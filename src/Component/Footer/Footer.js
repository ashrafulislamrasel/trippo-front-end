import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <section id='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h3>Tripo</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipi. Suspend isse ultrices hendrerit nunc vitae vel a sodales. Ac lectus vel risus suscipit venenatis.</p>
                        <p>Strömgatan 18, Stockholm,<br/>
                        Sweden(+46) 322.170.71<br/>
                        roam@qodeinteractive.com</p>
                    </div>
                    <div className="col-md-4">
                        <h3>Important Links</h3>
                        <ul>
                            <li><NavLink target='_blank' to='/details/6276cb9b429bc7b3595c6a90'> Masjid Al Aqsa</NavLink></li>
                            <li> <NavLink target = '_blank'
                            to = '/details/6276cb9b429bc7b3595c6a8c' > City of Prophet 's Mosque</NavLink></li>
                            <li><NavLink target = '_blank' to='/details/6276cb9b429bc7b3595c6a8e'>Renault Mexicoo</NavLink></li>
                            <li><NavLink target = '_blank' to='/details/6276cb9b429bc7b3595c6a91'> Red Square</NavLink></li>
                            <li><NavLink target = '_blank' to='/details/6276cb9b429bc7b3595c6a8f'>The Dark Forest Adventure</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </section>
    );
};

export default Footer;