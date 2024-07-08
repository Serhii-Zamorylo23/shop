import s from "./cardfooter.module.scss"
const CardfooterItem=(props)=>{
  <>
  <section className={s.sectionCard_wrapper_firstContent}>
    <p className={s.sectionCard_wrapper_firstContent_text}>{props.text}</p>
  </section>
  </>
}
export default CardfooterItem