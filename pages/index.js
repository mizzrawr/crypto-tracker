import {useState} from 'react'
import SearchBar from '../components/SearchBar'
import CoinList from '../components/CoinList/CoinList'
import Layout from '../components/Layout/Layout'
import Title from '../components/Title'



export default function Home(
{filteredCoins}) {

  const [search, setSearch] = useState('')

  const allCoins = filteredCoins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLocaleLowerCase())
    )

  const handleChange = e =>{
    e.preventDefault()
    setSearch(e.target.value.toLowerCase())
  }
  return (
    <Layout>

    <div className="coin_app">


      <SearchBar type="text"  placeholder="Search..." onChange={handleChange}/>
      <Title />
      <CoinList filteredCoins={allCoins}/>
    </div>
    </Layout>
  )
}
//para datos cambiantes como criptomonedas es mejor usar servserviceprop
export const getServerSideProps = async()=>{
  const res= await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=1000&page=1&sparkline=false')

  const filteredCoins = await res.json()
  return {
    props:{
      filteredCoins
    }
  }
}