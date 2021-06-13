import React from "react";
import "./Header.scss";
import image from './image/2.jpg'; 
import image1 from './image/3.jpg'; 
import image2 from './image/4.jpg'; 
import image3 from './image/5.jpg'; 
const Header = () => (

 
   
    <div className="header">
      <div className="wissam">
    <h4>Des questions? Discutons ! </h4>
     <p>Réponse sous 1 heure</p>
    </div>
    <div className="image">
     <img src={image} alt="Logo" width="40px" height="40px" style={{border: '1px solid white',borderRadius: '50px'}}/>
     <img src={image1} alt="Logo" width="40px" height="40px" style={{border: '1px solid white',borderRadius: '50px'}}/>
     <img src={image2} alt="Logo" width="40px" height="40px" style={{border: '1px solid white',borderRadius: '50px'}}/>
     <img src={image3} alt="Logo" width="40px" height="40px" style={{border: '1px solid white',borderRadius: '50px'}}/>
     <p>+6</p>
     </div>
  </div>
);


export default Header;