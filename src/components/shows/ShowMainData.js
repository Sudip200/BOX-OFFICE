import React from 'react';
import imgUrl from './NotFoundImage'
import { Headline, MainDataWrapper,TagList } from './ShowMainDataStyled';
//import IMG_PLACEHOLDER from '../../images/not-found.png';
//import { Star } from '../styled';

const ShowMainData = ({ name, summary, tags, image ,rating}) => {
  return (
    <MainDataWrapper>
    <img src={image ? image.original : imgUrl} alt="show-cover" />
    <div className="text-side">
      <Headline>
        <h1>{name}</h1>
        <div>
         rating
         {/*<span>{rating.average || 'N/A'}</span>*/}
        </div>
      </Headline>
      <div style={{color:'white'}}
        className="summary"
        dangerouslySetInnerHTML={{ __html: summary }}
      />

      <div>
        Tags:{' '}
        <TagList>
          {tags.map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </TagList>
      </div>
    </div>
  </MainDataWrapper>

  )
}
export default ShowMainData;
