import s from "./banner.module.scss"
import image from "./image 3.png"
const img = image
const BannerItem=()=>{
  return(
    <>
    <div className={s.banner_firstCont}>
    <h1 className={s.banner_firstCont_title}>Freshly pressed,straight to your door</h1>
    <p className={s.banner_firstCont_text}>At Pure Flave, we’re dedicated to goodness in every sip. Delicious, fresh juice, just as nature intended.</p>
    <button className={s.banner_firstCont_button}>Shop</button>
    </div>
    <div className={s.banner_secondCont}>
      <img src={img} alt="" />
    </div>
    </>
  )
}
export default BannerItem