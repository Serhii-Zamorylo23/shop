import s from "../aboutUs/AboutUs.module.scss"
import AboutUs from "../aboutUs/AboutUs.jsx"
const Footer=()=>{
  return(
    <footer className={s.footer}>
      <section className={s.footer_wrapper}>
      <AboutUs/>
      </section>
    </footer>
  )
}
export default Footer