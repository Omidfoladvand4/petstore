import React from 'react'
 import './Menu.css'
 import Tab from './Tab'
 const itemData = [
  {name : 'صفحه نخست'},
  {name : ' محصولات گربه '},
  {name : 'محصولات سگ'},
  {name : 'محصولات پرندگان'},
  {name : 'محصولات جوندگان'},
  {name : 'محصولات آبزیان'},
  {name : 'سبک زندگی '},
  {name : ' فروش ویژه '},
  {name : ' بلاک پت استور'},
  {name : 'تماس با ما '},
 
 ]
const Menu = () => {
    return (
      <div className='menuContainer'>
     {itemData.map((item , index) => (
      <Tab key={index} Title={item.name}></Tab>
     ))}
      </div>
    )
  }
  
  export default Menu