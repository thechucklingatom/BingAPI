import { useState } from 'react';
import './App.css'
import SearchResults, { BingApiResults } from './SearchResults';

function Search() {
  const [searchText, setSearchText] = useState('');
  const [searchResponse, setSearchResponse] = useState(null);
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  }

  const searchForStuff = () => {
    fetch(import.meta.env.VITE_API_URL + `v7.0/search?q=${searchText}`, {
      method: 'get',
      headers: new Headers({
        'Ocp-Apim-Subscription-Key': import.meta.env.VITE_API_KEY
      })
    })
      .then(response => response.json())
      .then(json => setSearchResponse(json))
      .catch(error => console.error(error));
  }

  return (
    <>
      <h1>{import.meta.env.VITE_API_KEY}</h1>
      <label>
        What would you like to search for? <input name="searchInput" onChange={handleSearchChange}/>
      </label>
      <button onClick={searchForStuff}>Search</button>

      {searchResponse ? <SearchResults {...searchResponse as BingApiResults}/> : <p>No search data yet</p>}  
    </>
  )
}



export default Search
