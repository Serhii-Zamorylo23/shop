import s from "./banner.module.scss"
import BannerItem from "./bannerItem.jsx"
const Banner=()=>{
  return(
    <div className={s.banner}>
      <BannerItem/>
    </div>
  )
}
export default Banner