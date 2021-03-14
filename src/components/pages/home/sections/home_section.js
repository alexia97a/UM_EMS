import React from 'react';
import { Link } from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import './home_section.css';

 
function HomeSection({
	lightBg, 
	lightText, 
	lightTextDesc, 
	headline, 
	description, 
	buttonLabel, 
	img, 
	bgImage,
	alt, 
	imgStart})
{



  return (
    <div className={lightBg ? 'home__home-section' : 'home__home-section darkBg'} id="home-section-id">
    	<div className="container home__home-container">
	    		<div className="row home__home-row">
	    			<div className="home__home-img-wrapper">
	    				<img src={img} alt={alt} className="home__home-img"/>
	    			</div>
	    		</div>
	    		<div className="row home__home-row">
    				<div className="home__home-text-wrapper">
    					<h1 className={lightText ? 'heading' : 'heading darkBg'}>{headline}</h1>
    					<p className={lightTextDesc ? 'home__home-subtitle' : 'home__home-subtitle dark'}>{description}</p>		
    				</div>
    				<div className="btnContainer">
    					<LinkS to="competition-section-id">
	    					<button className="home__home-btn">{buttonLabel}</button>
	    				</LinkS>
	    			</div>
	    		</div>
	    			
	    		
    	</div>
    </div>
  )
}

export default HomeSection;