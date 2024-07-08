import s from "../aboutUs/AboutUs.module.scss"
import AboutUs from "../aboutUs/AboutUs.jsx"
const Footer=()=>{
  return(
    <footer className={s.footer}>
      <AboutUs/>
    </footer>
  )
}
export default Footer