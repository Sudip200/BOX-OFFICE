import React from 'react';
import { FlexGrid } from '../styled';
import ActorCard from './ActorCard';

//import IMAGE_NOT_FOUND from '../../images/not-found.png';
const imgurl="data:image/png;base64,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"
const ActorGrid = ({ data }) => {
  return (
    <FlexGrid style={{marginTop:'10%'}}>
      {data.map(({ person }) => (
        <ActorCard
          key={person.id}
          name={person.name}
          country={person.country ? person.country.name : null}
          birthday={person.birthday}
          deathday={person.deathday}
          gender={person.gender}
          image={ person.image?person.image.medium:imgurl }
        />
      ))}
    </FlexGrid>
  );
};

export default ActorGrid;
