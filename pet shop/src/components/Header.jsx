import React from 'react'
import Menu from './Menu'
import './Header.css'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PersonIcon from '@mui/icons-material/Person';
const Header = () => {
  return (
    <header >
    <nav>
   <div>
   <ShoppingBasketIcon className='userBasket'></ShoppingBasketIcon>
   <div className="loginContainer">
       ورود / ثبت نام کنید
     <PersonIcon ></PersonIcon></div>
   </div>
   <div>
   <input type="text" className="searchBox"  placeholder='نام کالا ، برند یا دسته بندی مورد نظر ....'/>
   <img src="../../public/pet-store-logo.svg" alt="" />
   </div>
    </nav>
    <Menu></Menu>
    </header>
  )
}

export default Header