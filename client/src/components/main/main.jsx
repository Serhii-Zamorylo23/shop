import s from "./main.module.scss"
import Banner from "../banner/banner"
const Main =()=>{
  
  return(
    <main>
      <div className={s.wrapper}>
      <Banner/>
      </div>
    </main>
  )
}
export default Main