import s from "./nav.module.scss"
import NavItem from "./navItem"
const Nav=()=>{
  const navStorage=[
    "Shop",
    "Subscription",
    "About Us"
  ]
  return(
      <nav className={s.Item}>
        {navStorage.map((item)=>(
          <NavItem text={item} />
        ))}
      </nav>
  )
}
export default Nav