import './App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import Products from './components/Products';

const bestSellingData = [
  { name: 'خمیر مالت پرسا گربه', image: '/cat.png', price: 44000, unit: 'تومان', oldPrice: 70000},
  { name: 'خاک گربه', image: '/cat2.png', price: 160000, unit: 'تومان' , oldPrice : 220000},
  { name: 'بستنی گربه وینستون', image: '/cat3jpg.webp', price: 325000, unit: 'تومان', oldPrice: 640000},
  { name: 'غذای خشک گربه بالغ', image: '/cat4.webp', price: 320000, unit: 'تومان', oldPrice: 430000},
  { name: 'غذای خشک گربه بالغ فیدار', image: '/cat5.webp', price: 1438000, unit: 'تومان', oldPrice: 1800000},
];
const dogFood = [
  { name: 'غذای خشک سگ بالغ نوتری', image: '/dog.webp', price: 1450000, unit: 'تومان', oldPrice: 1700000},
  { name: 'غذای خشک سگ بالغ سلبن', image: '/dog2.webp', price: 315000, unit: 'تومان' , oldPrice : 415000},
  { name: 'مسواک انگشتی حیوانات ', image: '/dog3.webp', price: 8000, unit: 'تومان', oldPrice: 8000},
  { name: 'قرص ضدحیوانات', image: '/dog4.webp', price: 19000, unit: 'تومان', oldPrice: 25000},
  { name: 'پد پرزگیر رولی دوبل کوچک', image: '/dog5.webp', price: 95000, unit: 'تومان', oldPrice: 125000},
];

function App() {
  return (
    <div className="myApp">
      <Header />
      <Slider />
       <h1>پرفروش ترین کالا ها</h1>
      <h2>تاریخ انقضا : 02/2026</h2>
   <div  className='productsContainer'>
      {bestSellingData.map((item, index) => (
        <Products
          key={index}
          image={item.image}
          name={item.name}
          price={item.price}
          oldPrice={item.oldPrice}
          unit={item.unit}
        />
      ))}
       </div>
       <div className="adsContainer">
        <img src="../../public/ads1.jpg" alt="" />
        <img src="../../public/ads2.jpg" alt="" />
       </div>
       <h1>کالاهای سگ</h1>
      
       <div className="productsContainer">
       {dogFood.map((item, index) => (
        <Products
          key={index}
          image={item.image}
          name={item.name}
          price={item.price}
          oldPrice={item.oldPrice}
          unit={item.unit}
        />
      ))}
       </div>
    </div>
  );
}

export default App;
