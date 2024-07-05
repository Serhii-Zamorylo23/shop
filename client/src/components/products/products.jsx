import s from "./products.module.scss"
import ProductItem from "./productsItem"
const Products=()=>{
  const storageItem1=[
    {
      id:1,
      name:"green Punch",
      price:6
    },
    {
      id:2,
      name:"Apple Citrus",
      price:6
    },
    {
      id:3,
      name:"Orange Zest",
      price:6
    }
  ]
  const storageItem2=[
    {
      id:4,
      name:"Total Care",
      price:50
    },
    {
      id:5,
      name:"Detox Plan",
      price:30
    },
    {
      id:6,
      name:"Full-Day Cleanses",
      price:30
    }
    
  ]
  return(
    <section className={s.section}>
      <div className={s.wrapper}>
      <h1 className={s.section_name}>Shop flaves</h1>
      <p className={s.section_text}>Cold-pressed, 100% organic, packed with vitamins, nutrients, and natural goodness.</p>
      <ul className={s.list}>
        {storageItem1.map((item)=>{
          return(
            <ProductItem key={item.id} name={item.name} price={item.price}/>
          )
        })}
      </ul>
      <h1 className={s.section_name}>Subscription</h1>
      <p className={s.section_text}>Subscribe to any of our plans and select how often you want them delivered.</p>
      <ul className={s.list}>
        {storageItem2.map((item)=>{
          return(
            <ProductItem key={item.id} name={item.name} price={item.price}/>
          )
        })}
      </ul>
      </div>
    </section>
  )
}
export default Products