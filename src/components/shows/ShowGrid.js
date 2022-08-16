import React from "react";
import { FlexGrid } from "../styled";
import ShowCard from "./ShowCard";

//import IMAGE_NOT_FOUND from '../../images/not-found.png';

const ShowGrid = ({ data }) => {
  return (
    <FlexGrid style={{ marginTop: "5%" }}>
      {data.map(({ show }) => (
        <ShowCard
          key={show.id}
          id={show.id}
          name={show.name}
          image={show?.image?.medium}
          summary={show.summary}
        />
      ))}
    </FlexGrid>
  );
};

export default ShowGrid;
