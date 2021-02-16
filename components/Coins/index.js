import styles from '../Coins/Coins.module.css'
import Link from 'next/link'


const Coins = ({name, price, symbol, market, volume, image, priceChange, id,rank}) => {

    return (
    <Link href='/coin/[id]' as={`/coin/${id}`}>

    <a>

    <div className={styles.coin_container}>
        <div className={styles.coin_row}>
            <div className={styles.coin}>
                <p>{rank}.</p>
                <img src={image} alt={name} className={styles.coin_img}/>
                <h1 className={styles.coin_h1}>{name}</h1>
                <p className={styles.coin_symbol}>{symbol}</p>
            </div>

            <div className={styles.coin_data}>
                <p className={styles.coin_price}>€{price.toLocaleString()}</p>
                <p className={styles.coin_volume}>€{volume.toLocaleString()}</p>

        {/* Since prices are constantly changing, we want it to be Green if goes up, and Red if goes down... */}


            {priceChange < 0 ? (
                <p className={styles.coin_percent,styles.red}>{priceChange.toFixed(2)}%</p>
            ) : (
                <p className={styles.coin_percent,styles.green}>{priceChange.toFixed(2)}%</p>
            )}
                <p className={styles.coin_market}>${market.toLocaleString()}</p>

            </div>
        </div>
    </div>
    </a>
    </Link>

    )
}

export default Coins
