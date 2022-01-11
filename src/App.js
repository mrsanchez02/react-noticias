import React,{Fragment,useState,useEffect} from 'react'
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import NewsList from "./components/NewsList";

function App() {

  // Definir la categoria y las noticias.
  const [category, setCategory]= useState('');
  const [news,setNews]=useState([]);

  useEffect(()=>{
    const queryAPI = async () => {
      const URI = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=e49935779ad04c008f316d7a04cf2a3b`;

      const response = await fetch(URI);
      const news = await response.json();

      setNews(news.articles);
    };
    queryAPI();
  },[category])

  return (
    <Fragment>
      <Header
        titulo='Noticias'
      />

      <div className='container white'>
        <Formulario 
          setCategory={setCategory}
        />
      <NewsList 
        news={news}
      />
      </div>
    </Fragment>
  );
}

export default App;
