import s from "./bannerBottom.module.scss"
import PhotoProduct from "./image 4.png"
const BannerBottomItem=()=>{
  return(
    <>
  <div className={s.BannerBottom_wrapper_firstContent}>
    <p className={s.BannerBottom_wrapper_firstContent_about}>About Us</p>
    <h1 className={s.BannerBottom_wrapper_firstContent_title}>Bringing 100% natural juices straight to your door</h1>
    <p className={s.BannerBottom_wrapper_firstContent_text}>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
  </div>
  <div className={s.BannerBottom_wrapper_secondContent}>
    <img className={s.BannerBottom_wrapper_secondContent_photo} src={PhotoProduct} alt="Bottom banner img" />
  </div>
  </>
  )
}
export default BannerBottomItem