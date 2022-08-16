import React from "react";
import { useState } from "react";
import ActorGrid from "../components/actors/ActorGrid";
import MainPageLayout from "../components/MainPageLayout";
import ShowGrid from "../components/shows/ShowGrid"
const Home = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');
  const isShowsSearch = searchOption === 'shows';




  const onSearch = () => {
    fetch(`https://api.tvmaze.com/search/${searchOption}?q=${input}`)
      .then((r) => r.json())
      .then((result) => {
        setResults(result)
        console.log(result);
      });
  };

  const onInputChange = (ev) => {
    setInput(ev.target.value);
  };

  const onKeyDown = (ev) => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };
  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };


  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No results</div>;
    }
    if (results && results.length > 0) {
    return   results[0].show
      ?  <ShowGrid data={results} />

      : <ActorGrid data={results}/>;

      
    }

    return null;

  }

  return (
    <MainPageLayout className="main-page-layout">
      <input
        type="text"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
        style={{width:'20rem' ,height:'3em'}}
      />
       <div>
        <label htmlFor="shows-search">
          Shows
          <input
            id="shows-search"
            type="radio"
            value="shows"
            checked={isShowsSearch}
            onChange={onRadioChange}
            style={{}}
          />
        </label>

        <label htmlFor="actors-search">
          Actors
          <input
            id="actors-search"
            type="radio"
            value="people"
            style={{marginRight:'10px'}}
            checked={!isShowsSearch}
            onChange={onRadioChange}
          />
        </label>
      </div>

      <button type="button" onClick={onSearch}  style={{width:'20rem' ,height:'3em',border:'none',background:'blue',color:'white',marginTop:'15px'}}>
        Search
      </button>
      {renderResults()}

    </MainPageLayout>
  );
};

export default Home;
