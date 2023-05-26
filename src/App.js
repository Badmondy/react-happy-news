import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewsList from "./components/news/NewsList";
import NavBar from "./components/ui/NavBar";
import NewsDetails from "./components/news/NewsDetails";
import AdminControl from "./components/admin/AdminControl";


import ScrollToTop from './components/scripts/ScrollToTop';



const App = () => {

  const [front, updateFront] = useState([]);

  const [tech, updateTech] = useState([]);

  const [culture, updateCulture] = useState([]);

  const [economy, updateEconomy] = useState([]);




  const base_url = 'http://localhost:5024/api/v1/';

  useEffect(() => {


    const fetchNews = async (endpoint, updateFunction) => {

      try {
        const response = await fetch(`${base_url}${endpoint}`);
        const data = await response.json();
        updateFunction(data);
      } catch {
        console.log('Något gick fel')
      }
    };

    fetchNews("senaste-nytt", updateFront)
    fetchNews("teknik", updateTech)
    fetchNews("kultur", updateCulture)
    fetchNews("ekonomi", updateEconomy)
  }, []);


  return (


    <Router>
      <ScrollToTop />
      <section>
        <NavBar />
        <Routes>

          <Route path='/' element={<NewsList news={front} />} />
          <Route path='/:id' element={<NewsDetails/>} />
          <Route path='/teknik' element={<NewsList news={tech} />} />
          <Route path='/ekonomi' element={<NewsList news={economy} />} />
          <Route path='/kultur' element={<NewsList news={culture} />} />
          <Route path='/admin' element={<AdminControl />} />


        </Routes>

      </section>
    </Router>


  )
}

export default App