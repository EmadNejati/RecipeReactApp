import './App.css';
import ProductCard
  from './Components/Atoms/ProductCard';
import CategoryTitle from './Components/Atoms/CategoryTitle';
import Footer from './Components/Atoms/Footer';
import Header from './Components/Atoms/Header';
function App() {
  return (
    <div className="app__container">
      <Header countryList={["iran", "iraq", "america", "england" ,"norway" , "turkey"]} />
      <CategoryTitle categoryTitle={"this is test 1"} />
      <div className="product__row">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <CategoryTitle categoryTitle={"this is test 2"} />
      <div className="product__row">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <Footer address={"Tehran - Pasdaran - G8"} phone={"021-224376901"} />
    </div>
  );
}

export default App;
