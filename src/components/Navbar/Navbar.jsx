import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/logo-bold.png'
import arrow_icon from '../../assets/arrow_icon.png'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const {setCurrency} = useContext(CoinContext)

  const currencyHandler = (event)=>{
    switch (event.target.value) {
      case 'cad': {
          setCurrency({
            name: 'cad',
            symbol: 'C$'
          });
          break;
      }
      case 'usd': {
        setCurrency({
          name: 'usd',
          symbol: '$'
        });
        break;
      }
      case 'eur': {
        setCurrency({
          name: 'eur',
          symbol: '€'
        });
        break;
      }
      default : {
        setCurrency({
          name: 'cad',
          symbol: 'C$'
        });
        break;
      }
    }
  }

  return (
    <div className='navbar'>
      <Link to={'/'}>
        <img src={logo} className='logo'/>
      </Link>
        <ul>
            <Link to={'/'}><li> Home </li> </Link>
            <Link to={'/contact-us'}><li> Contact us </li> </Link>
        </ul>
      
        <div className="nav-right">
            <select onChange={currencyHandler}>
            <option value='cad'> CAD </option>
            <option value='usd'> USD </option>
            <option value='eur'> EUR </option>
            </select>
            <button> Sign up <img src={arrow_icon} /></button>
        </div>
    </div>
  )
}

export default Navbar
