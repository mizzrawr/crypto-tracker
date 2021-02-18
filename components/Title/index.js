
import styles from '../Title/Title.module.css'

const Title = ()=>{

return(
    <div className={styles.title_container}>
        <div className={styles.title_row}>

        <div className={styles.title}>

        <p>No.</p>
        <p className={styles.title_img}>Img</p>
        <p className={styles.title_h1}>Name</p>
        <p className={styles.title_symbol}>Symbol</p>
        </div>


            <div className={styles.title_data}>

            <p className={styles.title_price}>Unit price</p>
            <p className={styles.title_volume}>Volume</p>
            <p className={styles.title_percent}>% Change (24hrs) </p>
            <p className={styles.title_market}>Market Cap.</p>
            </div>


        </div>
    </div>


)


}
export default Title