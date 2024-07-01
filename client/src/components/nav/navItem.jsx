import s from "./nav.module.scss"
const NavItem=(props)=>{
  return(
      <a href="#" className={s.Item_link}>{props.text}</a>
  )
}
export default NavItem