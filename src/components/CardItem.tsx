import { Post } from "../types/postType"
import PriceFormat from "../utils/priceFormat"
import TextFormat from "../utils/textFormat"

type Props = {
  post: Post
}

const CardItem = ({post}:Props) => {
  return (
    <div className="card h-100">
      <img src={post.thumbnail} className="card-img-top" alt={post.title}/>
      <div className="card-body">
          <h5 className="card-title text-success mb-0">{post.title}</h5>
          <TextFormat text={post.description}/>
          <PriceFormat price={post.price}/>
      </div>
    </div>
  )
}

export default CardItem
