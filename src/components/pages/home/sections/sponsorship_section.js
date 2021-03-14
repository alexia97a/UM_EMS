import React from 'react';
import { Link } from 'react-router-dom';
import { FaSchool, FaUniversity} from 'react-icons/fa';
import { MdSchool} from 'react-icons/md';
import {IconContext} from 'react-icons/lib';
import './sponsorship_section.css'

function SponsorshipSection(){

  return (
  	<IconContext.Provider value={{color:'#fff', size: 64}}>

   	<div className="sponsorship__section" id="sponsorship-section-id">
   		<div className="sponsorship__wrapper">
   			<h1 className="sponsorship__heading">COMPETITION</h1>
   			<div className="sponsorship__container">
   				<Link to="/" className="sponsorship__container-card">
   					<div className="sponsorship__container-cardInfo">
                     <h7>INVENTOR/ INNOVATOR</h7>
   						<div className="icon">
   							<FaUniversity />
   						</div>
   						<h3>Professional</h3>
   						<h4>RM 390</h4>
   						<p>Registration Fee</p>
   					   <h5>
                        Professionals from the relevant industry or staff of higher education institutions including private and public universities including polytechnic, community colleges, SME industries.
                     </h5>
                     <p><span>* Early Bird Registration Fee: RM350</span></p>
   						<button className="sponsorship__register-button">Register</button>
   					</div>
   				</Link>
   				<Link to="/" className="sponsorship__container-card">
   					<div className="sponsorship__container-cardInfo">
                     <h7>YOUNG INVENTOR/ INNOVATOR</h7>
   						<div className="icon">
   							<MdSchool />
   						</div>
   						<h3>Higher Institution</h3>
   						<h4>RM 290</h4>
   						<p>Registration Fee</p>
   						<h5>
                        Students from all HEI including public and private universities, polytechnic, industrial learning colleges, IKM MARA, and international student participation.
                     </h5>
                     <p><span>* Early Bird Registration Fee: RM250</span></p>
   						<button className="sponsorship__register-button">Register</button>
   					</div>
   				</Link>
   				<Link to="/" className="sponsorship__container-card">
   					<div className="sponsorship__container-cardInfo">
                     <h7>JUNIOR INVENTOR/ INNOVATOR</h7>
   						<div className="icon">
   							<FaSchool />
   						</div>
   						<h3>School Students</h3>
   						<h4>RM 190</h4>
   						<p>Registration Fee</p>
   						 <h5>
                        Schools students (Age 17 and below) from government and private school including MRSM, Vocational Colleges.
                     </h5>
                     <p><span>* Early Bird Registration Fee: RM150</span></p>
   						<button className="sponsorship__register-button">Register</button>
   					</div>
   				</Link>
   			</div>
   		</div>
   	</div>
   	</IconContext.Provider>	
  )
}

export default SponsorshipSection;