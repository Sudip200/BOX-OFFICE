import React from 'react';
import Navs from './Nav';
import Title from './Title';

const MainPageLayout = ({ children }) => {
  return (
    <div style={{textAlign:'center'}}>
      <Title
        title="BOX OFFICE"
        subtitle="Are you looking for a movie or an actor?"
      />
      <Navs />
      {children}
    </div>
  );
};

export default MainPageLayout;

