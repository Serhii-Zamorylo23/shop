import s from "./products.module.scss"
import imgage from "./Rectangle 3.png"
const ProductItem=(props)=>{
  return(
    <article>
      <img className={s.product_wrapper_item_img} src={imgage} alt="Image juse" />
      <p className={s.product_wrapper_item_text}>{props.text}</p>
      <p className={s.product_wrapper_item_price}>{props.price}</p>
    </article>
  )
}
export default ProductItem  