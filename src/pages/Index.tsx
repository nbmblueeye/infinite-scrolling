import { Container } from "react-bootstrap"
import CardItem from "../components/CardItem"
import { useCallback, useEffect, useState } from "react";
import { useGetPostsMutation } from "../services/postApiSlide";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { resetPosts, setPosts } from "../services/postSlide";
import useObserverHook from "../components/ObserverHook";

const Index = () => {

  const [getPosts, { isLoading }] = useGetPostsMutation();
  const dispatch = useAppDispatch();
  const { posts } = useAppSelector(state => state.posts);

  const [totalPage, setTotalPage] = useState<number>(1);
  const [limit] = useState<number>(20);
 
  const {observerRef, observerTargetRef , currentPage} = useObserverHook({margin: "0px", threshold: 1},{totalPage})

  useEffect(() => {
    loadingPosts();
    return () => {
      dispatch(resetPosts());
    }
  },[currentPage]);

  const loadingPosts = useCallback(async() => {
    try {
      let data = await getPosts({skip: currentPage * limit, limit: limit}).unwrap();
      if(!isLoading && data){
            let { products, total } = data;
            if(total > limit){
              let maxPage = Math.floor(total/limit);
              setTotalPage(maxPage);
            }else{
                setTotalPage(1);
            }
            dispatch(setPosts(products.map((product:any) => {
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
  },[currentPage]);

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
              <h3 className="mb-5 text-primary"><span>Total Pages: </span>{totalPage}, Page: {currentPage + 1}</h3>
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
                      <p>No Product available</p>
                    )
                  }
                </div>
              </div>
            </>
          )
        }
        <div className='d-flex align-items-center justify-content-center border-top border-primary' style={{height:"60px", marginTop:"80px"}} ref={observerTargetRef}> 
        </div>
      </div>
    </Container>
  )
}

export default Index