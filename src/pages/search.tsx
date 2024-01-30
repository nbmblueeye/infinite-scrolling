import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { Container } from 'react-bootstrap';
import CardItem from '../components/CardItem';
import useObserverHook from '../components/ObserverHook';
import { resetPosts, searchPost } from '../services/postSlide';
import { useSearchPostsMutation } from '../services/postApiSlide';

const Search = () => {

    const [searchParams] = useSearchParams();
   
    const [searchPosts, { isLoading }] = useSearchPostsMutation();
    const dispatch = useAppDispatch();
    const { posts } = useAppSelector(state => state.posts);
  
    const [totalPage, setTotalPage] = useState<number>(1);
    const [limit] = useState(20);
    
    const {observerRef, observerTargetRef , currentPage} = useObserverHook({margin: "0px", threshold: 1},{totalPage})

    useEffect(() => {
        loadingPosts();
    },[searchParams, totalPage, currentPage]);

    const loadingPosts = useCallback(async() => {
        try {
            let data = await searchPosts({search:searchParams.get('q'), skip:currentPage * limit, limit: limit}).unwrap();
            if(!isLoading && data){
                let { products, total } = data;
                if(total > limit){
                    let maxPage = Math.floor(total/limit);
                    setTotalPage(maxPage);
                }else{
                    setTotalPage(1);
                }  
                dispatch(searchPost(products.map((product:any) => {
                    return (
                        { 
                            id: product.id, 
                            title: product.title , 
                            description: product.description, 
                            price: product.price,
                            thumbnail: product.thumbnail 
                        }
                    )
                }))); 
                observerRef?.current?.scrollTo({
                    top: 0,
                    behavior:"smooth"
                })
            }
        } catch (error) {
          console.log(error);
        }
    },[searchParams, totalPage, currentPage]);
    

  return (
    <Container>
        <div className="content-wrapper border rounded" ref={observerRef}>
            {
                isLoading ?
                (
                    <div className="text-center text-primary w-100 h-100 d-flex justify-content-center align-items-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )
                :
                (
                    <>
                        <h3 className="mb-3 text-primary">Search Result for: {searchParams.get('q')}</h3>
                        {
                            totalPage > 1 &&
                            <h3 className="mb-5 text-primary">Page: {currentPage + 1}</h3>
                        }
                        <div className="content-box">
                        <div className="row row-cols-1 row-cols-md-4 g-4">
                            {
                            posts.length > 0 ?
                            (
                                posts.map(post => 
                                <div className="col" key={post.id}>
                                    <CardItem post={post}/>
                                </div>
                                )
                            )
                            :
                            (
                                <p>No Product is found</p>
                            )
                            }
                        </div>
                        </div>
                    </>
                )
            }
            {
                totalPage > 1 &&
                <div className='d-flex align-items-center justify-content-center border-top border-primary' style={{height:"60px", marginTop:"80px"}} ref={observerTargetRef}> 
                </div>
            }
           
        </div>
    </Container>
  )
}

export default Search