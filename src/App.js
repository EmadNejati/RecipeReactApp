import './App.css';
import Footer from './Components/Molecules/Footer';
import Header from './Components/Molecules/Header';
import ProductRow from './Components/Molecules/ProductRow';
import Navbar from './Components/Atoms/Navbar';
import Recommanded from './Components/Molecules/Recommanded';
import { useState } from 'react';

function App() {
  const [recommandedTitle, setRecommandedTitle] = useState("Meet Steak")

  const [recommandedText, setRecommandedText] = useState("Pat dry – use paper towels to pat the steaks dry to get a perfect sear and reduce oil splatter. Season generously just before cooking steaks, sprinkle both sides liberally with salt and pepper.Preheat the pan on medium and brush with oil.Using just 1 / 2 Tbsp oil reduces splatter.Sear steaks – add steaks and sear each side 3 - 4 minutes until a brown crust has formed then use tongs to turn steaks on their sides and sear edges(1 min per edge).Add butter and aromatics – melt in butter with quartered garlic cloves and rosemary sprigs.Tilt pan to spoon garlic butter over steaks and cook to your desired doneness(see chart below).Remove steak and rest 10 minutes before slicing against the grain")

  const [productList, setProductList] = useState([
    { productImgUrl: "images/burger.png", productDsc: "this is test 1 this is test 1 this is test 1 this is test 1 this is test 1 this is test 1" },
    { productImgUrl: "images/pizza.PNG", productDsc: "this is test 1 this is test 1 this is test 1 this is test 1 this is test 1 this is test 1" },
    { productImgUrl: "images/sushi.png", productDsc: "this is test 1 this is test 1 this is test 1 this is test 1 this is test 1 this is test 1" },
    { productImgUrl: "images/salad.png", productDsc: "this is test 1 this is test 1 this is test 1 this is test 1 this is test 1 this is test 1" },

  ])

  const [categoryTitle, setCategoryTitle] = useState(["Popular Recupes", "Vegetarian Items"])

  const [countryList, setCountryList] = useState(["Iran", "Iraq", "Egypt", "England", "Norway", "Turkey"])

  return (
    <div className="app__container w-full flex flex-col justify-center items-center my-0 mx-auto">
      <Header countryList={countryList} />
      <Recommanded imageUrl={"images/steak.png"} recommandedTitle={recommandedTitle} recommandedText={recommandedText} />
      <ProductRow categoryTitle={categoryTitle[0]} products={productList} />
      <ProductRow categoryTitle={categoryTitle[1]} products={productList} />
      <Footer address={"Tehran - Pasdaran - G8"} phone={"021-224376901"} />
    </div>
  );
}

export default App;
