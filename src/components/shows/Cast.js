import React from "react";
import { CastList } from "./CastStyled";

//import IMG_PLACEHOLDER from '../../images/not-found.png';
import imgUrl from "./NotFoundImage";
const Cast = ({ cast }) => {
  return (
    <CastList>
      {cast.map(({ person, character, voice }, key) => (
        <div key={key} className="cast-item">
          <div className="pic-wrapper">
            <img
              src={person.image ? person.image.medium : imgUrl}
              alt="cast-person"
            />
          </div>
          <div className="actor">
            <span>
              <span className="bold">{person.name}</span> | {character.name}{" "}
              {voice ? "| Voice" : ""}
            </span>
          </div>
        </div>
      ))}
    </CastList>
  );
};

export default Cast;
