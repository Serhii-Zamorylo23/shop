import s from "./products.module.scss"
import ProductItem from "./productsItem"
const Products=()=>{
  const storageItem1=[
    {
      text:"green Punch",
      price:"$6.00"
    },
    {
      text:"Apple Citrus",
      price:"$6.00"
    },
    {
      text:"Orange Zest",
      price:"$6.00"
    }
  ]
  return(
    <div className={s.product}>
      <div className={s.product_wrapper}>
        <h1 className={s.product_wrapper_title}>Shop flaves</h1>
        <p className={s.product_wrapper_text}>Cold-pressed, 100% organic, packed with vitamins, nutrients, and natural goodness.</p>
        <div className={s.product_wrapper_item}>
          {storageItem1.map((item)=>(
            <ProductItem
            text={item.text}
            price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Products