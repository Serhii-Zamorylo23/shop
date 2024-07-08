import s from "./cardfooter.module.scss"

const Cardfooter=()=>{
  const footerStorage=[
    "Terms & Conditions",
    "Privacy Policy",
    "Shipping Policy",
    "Cookie Policy​",
    "FAQ",
    "Payment Methods",
    "Address:",
    "500 Terry Francine St.",
    "San Francisco, CA 94158",
    "Contact:",
    "info@mysite.com",
    "123-456-7890"
    
  ]
  return(
    <section className={s.sectionCard}>
    <div className={s.sectionCard_wrapper}>
      
    </div>
  </section>
  )
}
export default Cardfooter