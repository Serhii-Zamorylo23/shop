import s from "./products.module.scss"
import imgage from "./Rectangle 3.png"
const ProductItem=(props)=>{
  return(
    <li className={s.list_item}>
      <img className={s.list_item_img} src={imgage} alt={props.name}/>
      <h3 className={s.list_item_name}>{props.name}</h3>
      <p className={s.list_item_price}>${props.price}.00</p>
    </li>
  )
}
export default ProductItem  