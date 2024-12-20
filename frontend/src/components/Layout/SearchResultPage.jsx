// SearchResultsPage.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { server } from '../../server';
import ProductCard from '../Route/ProductCard/ProductCard';

const SearchResultsPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('query');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      axios.get(`${server}/search?productName=${encodeURIComponent(searchTerm)}`)
        .then(response => {
          setSearchResults(response.data.products);
        })
        .catch(error => {
          console.error('Error fetching search results:', error);
        });
    }
  }, [searchTerm]);

  return (
    <div>
      <h2>Search Results for "{searchTerm}"</h2>
      <div>
        {searchResults.map(product => (
          <Link to={`/product/${product._id}`} key={product._id}>
            <div>
                <h3>{product.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchResultsPage;
