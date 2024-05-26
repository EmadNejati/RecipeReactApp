import Footer from '../Molecules/Footer.js'
import Header from '../Molecules/Header';
import ProductRow from '../Molecules/ProductRow';
import Recommanded from '../Molecules/Recommanded';
import { useEffect, useState } from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function Home() {


  const [categoryTitle, setCategoryTitle] = useState(["Popular Recipes", "Vegetarian Items"])

  const [countryList, setCountryList] = useState(["Iran", "Iraq", "Egypt", "England", "Norway", "Turkey"])


  const [vegData, setVegData] = useState(null);
  const [popularData, setPopularData] = useState(null);
  const [recomRecipe , setRecomRecipe] = useState(null);

  const [loadingRecom,setLoadingRecom]= useState();
  const [loadingVeg, setLoadingVeg] = useState(true);
  const [loadingPopular, setLoadingPopular] = useState(true);

  
  useEffect(() => {
    fetch('https://api.spoonacular.com/recipes/random?apiKey=2dd851c086554e79ae1c6c28e8fce939&number=1')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.json();
      })
      .then((recomRecipe) => {
        setRecomRecipe(recomRecipe);
        setLoadingRecom(false);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        setLoadingRecom(false);
      });
  }, []);

  useEffect(() => {
    fetch('https://api.spoonacular.com/recipes/random?apiKey=2dd851c086554e79ae1c6c28e8fce939&number=4&diet=vegetarian')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.json();
      })
      .then((vegData) => {
        setVegData(vegData);
        setLoadingVeg(false);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        setLoadingVeg(false);
      });
  }, []);

  useEffect(() => {
    fetch('https://api.spoonacular.com/recipes/random?apiKey=2dd851c086554e79ae1c6c28e8fce939&number=4')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.json();
      })
      .then((popularData) => {
        setPopularData(popularData);
        setLoadingPopular(false);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        setLoadingPopular(false);
      });
  }, []);

  if (loadingVeg || loadingPopular || loadingRecom) {
    return <div>Loading...</div>;
  }


  return (
    <div className="app__container w-full flex flex-col justify-center items-center my-0 mx-auto">
      <Header countryList={countryList} />
      <Recommanded imageUrl={recomRecipe.recipes[0].image} recommandedTitle={JSON.stringify(recomRecipe.recipes[0].title)} recommandedText={recomRecipe.recipes[0].summary} />
      <ProductRow categoryTitle={categoryTitle[0]} products={popularData.recipes} />
      <ProductRow categoryTitle={categoryTitle[1]} products={vegData.recipes} />
      <Footer address={"Tehran - Pasdaran - G8"} phone={"021-224376901"} />
    </div>
  );
}

export default Home;
