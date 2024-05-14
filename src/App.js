import './App.css';
import Footer from './Components/Atoms/Footer';
import Header from './Components/Atoms/Header';
import ProductRow from './Components/Molecules/ProductRow';
import Navbar from './Components/Atoms/Navbar';
import { useState } from 'react';

function App() {
  

  const [productList,setProductList]=useState([
    {productImgUrl:"images/burger.png" ,productDsc:"this is test 1"},
    {productImgUrl:"images/pizza.PNG" ,productDsc:"this is test 1"},
    {productImgUrl:"images/sushi.png" ,productDsc:"this is test 1"},
    {productImgUrl:"images/salad.png" ,productDsc:"this is test 1"},

  ])

  const [categoryTitle , setCategoryTitle]= useState(["Popular Recupes","Vegetarian Items"])

  const [countryList,setCountryList]=useState(["Iran", "Iraq", "Egypt", "England" ,"Norway" , "Turkey"])

  return (
    <div className="app__container w-full flex flex-col my-0 mx-auto">
      <Header countryList={countryList} />
      <ProductRow categoryTitle={categoryTitle[0]} products={productList}  />
      <ProductRow categoryTitle={categoryTitle[1]} products={productList}  />
      <Footer address={"Tehran - Pasdaran - G8"} phone={"021-224376901"} />
    </div>
  );
}

export default App;
