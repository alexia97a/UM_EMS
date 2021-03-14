import React from 'react';
import HomeSection from '../../pages/home/sections/home_section';
import CompetitionSection from '../../pages/home/sections/competition_section';
import SponsorshipSection from '../../pages/home/sections/sponsorship_section';
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './data'



function Home() {
  return (
    <>
      <HomeSection {...homeObjOne} />
      <CompetitionSection />
      <SponsorshipSection />
    </>
  );
}

export default Home;