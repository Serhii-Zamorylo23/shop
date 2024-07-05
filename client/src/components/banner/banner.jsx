import s from "./banner.module.scss"
import BannerItem from "./bannerItem.jsx"
const Banner=()=>{
  return(
    <div className={s.banner}>
      <div className={s.banner_wrapper} >
      <BannerItem/>
      </div>
    </div>
  )
}
export default Banner