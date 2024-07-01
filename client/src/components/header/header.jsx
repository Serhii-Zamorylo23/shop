import s from "./header.module.scss"
import Nav from "../nav/nav"
const Header=()=>{
  return(
    <header className={s.header}>
      <div className={s.header_wrapper}>
      <h1 className={s.header_logo}>° pure flave</h1>
      <Nav/>
      </div>
    </header>
  )
}
export default Header
