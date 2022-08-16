import React, { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import ShowMainData from "../components/shows/ShowMainData";
//import Details from "../components/shows/Details";
import Details from "../components/shows/Details";
import Seasons from "../components/shows/Seasons";
import Cast from "../components/shows/Cast";

//import { apiGet } from '../misc/config';
const reducer = (prevState, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS": {
      return { isLoading: false, error: null, show: action.show };
    }
    case "FETCH_FAILED": {
      return { ...prevState, isLoading: false, error: action.error };
    }
    default:
      return prevState;
  }
};
const initialState = {
  show: null,
  isLoading: true,
  error: null
};

const Show = () => {
 
  const { id } = useParams();
  console.log(id);
  const [{ show, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    let isMounted = true;
    axios("https://api.tvmaze.com/shows/"+id+"?embed[]=seasons&embed[]=cast")
      .then((results) => {
       if (isMounted) {
        dispatch({ type: "FETCH_SUCCESS", show: results.data });
        }
      })
      
      .catch((err) => {
        if (isMounted) {
          dispatch({ type: "FETCH_FAILED", error: err.message });
       }
      });
    return () => {
      isMounted = false;
    };
  }, [id]);

  console.log("show", show);
 //console.log(res);
  if (isLoading) {
    return <div><h3>Data is being loaded</h3></div>;
  }

  if (error) {
    return <div>Error occured: {error}</div>;
  }

  return (
    <div>
      <ShowMainData
        image={show.image}
        name={show.name}
        rating={show.rating}
        summary={show.summary}
        tags={show.genres}
      />

      <div>
        <h2>Details</h2>
        <Details
          status={show.status}
          network={show.network}
          premiered={show.premiered}
        />
      </div>

      <div>
        <h2>Seasons</h2>
        <Seasons seasons={show._embedded.seasons} />
      </div>

      <div>
        <h2>Cast</h2>
        <Cast cast={show._embedded.cast} />
      </div>
    </div>

  );
};

export default Show;
