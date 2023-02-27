import React from 'react';
import "./About.css";
import CardMedia from '@mui/material/CardMedia';
import image from "../img/happyPic.jpg";
const About = () => {

    return (
        <div>
            <br></br>
            <div className="col s12 m2" style={{ width: '50%', margin: 'auto', height: '50%' }}>
                <div className="z-depth-4" style={{padding: '20px'}}>
                <span style={{display: 'flex',alignItems:'center'}}><i className="material-icons" style={{fontSize: '40pt'}}>face</i><h6 style={{fontSize: '20pt'}}>ABC Inc.</h6></span>
                    <div style={{textAlign: 'center'}}>
                    <h3 id="aboutTitle">About Us</h3>
                    <h4 id="aboutSubTitle">OUR STORY</h4>
                    </div>
                    <br />
                    <br />
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    agna aliqua. Sapien et ligula ullamcorper malesuada
                    proin libero nunc. Pretium lectus quam id leo in vitae
                    turpis massa sed. Id cursus metus aliquam eleifend.
                    Habitant morbi tristique senectus et. Consequat mauris
                    nunc congue nisi vitae suscipit tellus mauris a. Sem
                    integer vitae justo eget magna fermentum iaculis eu non.
                    Semper auctor neque vitae tempus quam pellentesque nec.
                    Id faucibus nisl tincidunt eget nullam non. Vitae elementum
                    curabitur vitae nunc sed. Eget sit amet tellus cras adipiscing.
                    Est ante in nibh mauris cursus mattis. Eu ultrices vitae auctor eua.
                    </p>
                    <div>
                    <CardMedia component="img" src={image} />
                    </div>
                </div>
            </div>
        </div>
    );
 
};
export default About;