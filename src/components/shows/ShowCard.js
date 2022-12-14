import React from "react";
import { Link } from "react-router-dom";
import { SearchCard } from "../styled";
import { StyledShowCard } from "./ShowCardStyled";
const ShowCard = ({ id, image, name, summary }) => {
  const summaryAsText = summary
    ? `${summary.split(" ").slice(0, 10).join(" ").replace(/<.+?>/g, "")}...`
    : "No description";

  return (
    <StyledShowCard>
      <div className="img-wrapper">
        <img src={image} alt="Photo" />
      </div>

      <h1>{name}</h1>

      <p>{summaryAsText}</p>

      <div className="btns">
        <button type="button">
          {" "}
          <Link to={`/show/${id}`} style={{ textDecoration: "none" }}>
            Read more
          </Link>
        </button>
      </div>
    </StyledShowCard>
  );
};

export default ShowCard;
