import React from 'react'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'
import './Navbar.css'
import { CoinContext } from '../../Context/Context'

const Navbar = () => {
    const { setCurrency } = React.useContext(CoinContext)

    const currencyHandler = (e) => {
        const currency = e.target.value;
        let symbol;

        switch (currency) {
            case 'usd':
                symbol = '$';
                break;
            case 'eur':
                symbol = '€';
                break;
            case 'inr':
                symbol = '₹';
                break;
            default:
                symbol = '$'; // Default to USD
        }

        setCurrency({
            name: currency,
            symbol: symbol
        });
    }

    return (
        <div className='navbar'>
            <img src={logo} alt='company-logo'/>
            <ul>
                <li>Home</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Blog</li>
            </ul>
            <div className='nav-right'>
                <select onChange={currencyHandler}>
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="inr">INR</option>
                </select>
                <button>Sign up <img src={arrow_icon} alt='arrow-icon'/></button>
            </div>
        </div>
    )
}

export default Navbar;
