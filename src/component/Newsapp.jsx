import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Card from "./Card.jsx";
import "../App.css";

const Newsapp = ({ category }) => {

  
  const navigate = useNavigate();


  const { query } = useParams();


  
  const [search, setSearch] = useState(
    query || category || ""
  );


  

  const [newsData, setNewsData] = useState([]);


  const API_KEY = "pub_f91c9da544fe449d8ec2e2cc6ee270ae";


 
  const getData = async (queryText) => {

    if (!queryText || queryText.trim() === "") {

      alert("Please enter something to search");

      return;
    }

    try {

      const response = await fetch(
        `https://newsdata.io/api/1/latest?qInTitle=${encodeURIComponent(
          queryText
        )}&apikey=${API_KEY}`
      );

      const jsonData = await response.json();

      console.log(jsonData);

      setNewsData(jsonData.results || []);

    } catch (error) {

      console.log("Error fetching news:", error);

    }
  };


  const handleCategory = (categoryName) => {

    navigate(`/${categoryName}`);

  };


  

  useEffect(() => {

    const currentSearch = query || category;

    if (currentSearch) {

      setSearch(currentSearch);

      getData(currentSearch);

    }

  }, [category, query]);


 
  const handleInput = (e) => {

    setSearch(e.target.value);

  };


  
  const handleSearch = () => {

    if (search.trim() === "") {

      alert("Please enter something to search");

      return;
    }

    

    navigate(
      `/search/${encodeURIComponent(search.trim())}`
    );

  };


  // =========================
  // UI
  // =========================

  return (

    <div>

      {/* =========================
          NAVBAR
      ========================= */}

      <nav className="navbar">

        {/* LOGO */}

        <div className="logo">

          <h1>
            News World
          </h1>

        </div>


        {/* =========================
            CATEGORY BUTTONS
        ========================= */}

        <div className="categoryBtns">

          <button
            onClick={() =>
              handleCategory("technology")
            }
          >
            Technology
          </button>


          <button
            onClick={() =>
              handleCategory("business")
            }
          >
            Business
          </button>


          <button
            onClick={() =>
              handleCategory("sports")
            }
          >
            Sports
          </button>


          <button
            onClick={() =>
              handleCategory("entertainment")
            }
          >
            Entertainment
          </button>


          <button
            onClick={() =>
              handleCategory("health")
            }
          >
            Healthcare
          </button>

        </div>


        {/* =========================
            SEARCH BOX
        ========================= */}

        <div className="search-bar">

          <input
            type="text"
            placeholder="Search news..."
            value={search}
            onChange={handleInput}
          />


          <button
            onClick={handleSearch}
          >
            Search
          </button>

        </div>

      </nav>


      {/* =========================
          NEWS CARDS
      ========================= */}

      <div>

        <Card
          data={newsData}
        />

      </div>

    </div>

  );
};


export default Newsapp;