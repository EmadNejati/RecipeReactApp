import './App.css';
import Footer from './Components/Molecules/Footer';
import Header from './Components/Molecules/Header';
import ProductRow from './Components/Molecules/ProductRow';
import Navbar from './Components/Atoms/Navbar';
import Recommanded from './Components/Molecules/Recommanded';
import { useEffect, useState } from 'react';

function App() {


  const [categoryTitle, setCategoryTitle] = useState(["Popular Recupes", "Vegetarian Items"])

  const [countryList, setCountryList] = useState(["Iran", "Iraq", "Egypt", "England", "Norway", "Turkey"])

  const [data, setData] = useState([])

  const [loading, setLoading]= useState(true)

  useEffect(() => {
    fetch('https://api.spoonacular.com/recipes/random?apiKey=583e681cdabc4c64b29c12f7c9f9f933&number=10')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok' + response.statusText);

        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
        // console.log(JSON.stringify(data).recipes);
      })
  }, [])

  if(loading){
    return <div>Loading data is processing </div>
  }

  return (
    <div className="app__container w-full flex flex-col justify-center items-center my-0 mx-auto">
      <Header countryList={countryList} />
      <Recommanded imageUrl={data.recipes[0].image} recommandedTitle={JSON.stringify(data.recipes[0].title)} recommandedText={JSON.stringify(data.recipes[0].summary)} />
      <ProductRow categoryTitle={categoryTitle[0]} products={data.recipes.slice(1,5)} />
      <ProductRow categoryTitle={categoryTitle[1]} products={data.recipes.slice(5,9)} />
      <Footer address={"Tehran - Pasdaran - G8"} phone={"021-224376901"} />
    </div>
  );
}

export default App;
