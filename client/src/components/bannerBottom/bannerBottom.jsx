import s from "./bannerBottom.module.scss"
import BannerBottomItem from "./bannerBottomItem.jsx"
const BannerBottom=()=>{
  return(
    <section className={s.BannerBottom}>
    <div className={s.BannerBottom_wrapper}>
      <BannerBottomItem/>
    </div>
  </section>
  )
}
export default BannerBottom