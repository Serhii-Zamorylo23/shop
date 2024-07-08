import s from "./AboutUs.module.scss"

const AboutUs=()=>{
  return(
    <>
      <ul className={s.list}>
        <li className={s.list_item}>
          <a className={s.list_item_link} href="#">Terms & Conditions</a>
          </li>
        <li className={s.list_item}>
          <a className={s.list_item_link} href="#">Privacy Policy</a>
        </li>
        <li className={s.list_item}>
          <a className={s.list_item_link} href="#">Shipping Policy</a>
        </li>
      </ul>
      <ul className={s.list}>
        <li className={s.list_item}>
          <a className={s.list_item_link} href="#">Cookie Policy​</a>
          </li>
        <li className={s.list_item}>
          <a className={s.list_item_link} href="#">FAQ</a>
        </li>
        <li className={s.list_item}>
          <a className={s.list_item_link} href="#">Payment Methods</a>
        </li>
      </ul>
      <ul className={s.list}>
        <li className={s.list_item}>
          <a className={s.list_item_link} href="#">Address:</a>
          </li>
        <li className={s.list_item}>
          <a className={s.list_item_link} href="#">500 Terry Francine St.</a>
        </li>
        <li className={s.list_item}>
          <a className={s.list_item_link} href="#">San Francisco, CA 94158</a>
        </li>
      </ul> 
      <ul className={s.list}>
        <li className={s.list_item}>
          <a className={s.list_item_link} href="#">Contact:</a>
          </li>
        <li className={s.list_item}>
          <a className={s.list_item_link} href="#">info@mysite.com</a>
        </li>
        <li className={s.list_item}>
          <a className={s.list_item_link} href="#">123-456-7890</a>
        </li>
      </ul> 
    </>
  )
}
export default AboutUs