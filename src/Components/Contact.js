import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import ContactsIcon from '@mui/icons-material/Contacts';
import CallIcon from '@mui/icons-material/Call';
import GoogleMapReact from 'google-map-react';
import EmailIcon from '@mui/icons-material/Email';
import { Email } from '@mui/icons-material';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Contact = () => {

    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };

    return (

        <React.Fragment>
            <br />
            <br />
            <div className='container'>
                <h4 style={{ textAlign: 'center' }}>CONTACT US</h4>
                <br />
                <br />
                <br />
                <div className='row'>
                    <div className='col-lg-4'>
                        <div className='z-depth-4' style={{ padding: '20px', height: '220px', borderRadius: '25px' }}>
                            <h6 style={{ textAlign: 'center' }}>Message Us</h6>
                            <br></br>
                            <span style={{ display: 'flex', alignItems: 'center' }}><FacebookIcon color="primary" />&nbsp;&nbsp;&nbsp;ABC Inc.</span>
                            <br></br>
                            <span style={{ display: 'flex', alignItems: 'center' }}><InstagramIcon color="primary" />&nbsp;&nbsp;&nbsp;ABCInc.</span>
                            <br />
                            <span style={{ display: 'flex', alignItems: 'center' }}><TwitterIcon color="primary" />&nbsp;&nbsp;&nbsp;ABCInc.</span>
                        </div>
                    </div>
                    <div className='col-lg-4 '>
                        <div className='z-depth-4' style={{ padding: '20px', height: '220px', borderRadius: '25px' }}>
                            <h6 style={{ textAlign: 'center' }}>Call Us</h6>
                            <br></br>
                            <span style={{ display: 'flex', alignItems: 'center' }}><ContactsIcon color="primary" />&nbsp;&nbsp;&nbsp;+630000000000</span>
                            <br />
                            <span style={{ display: 'flex', alignItems: 'center' }}><CallIcon color="primary" />&nbsp;&nbsp;&nbsp;00-0000-0000</span>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='z-depth-4' style={{ padding: '20px', height: '220px', borderRadius: '25px' }}>
                            <h6 style={{ textAlign: 'center' }}>Email Us</h6>
                            <br />
                            <span style={{ display: 'flex', alignItems: 'center' }}><EmailIcon color="primary" />&nbsp;&nbsp;&nbsp;abcinc@gmail.com</span>
                            <br />
                            <span style={{ display: 'flex', alignItems: 'center' }}><EmailIcon color="primary" />&nbsp;&nbsp;&nbsp;abcinc_support@gmail.com</span>
                        </div>
                    </div>
                </div>
                <div style={{ height: '100vh', width: '100%' }}>
                    <h3>Location</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3988978.0410205247!2d120.54457531663103!3d12.483888738008917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sabc%20inc!5e0!3m2!1sen!2sph!4v1677200174429!5m2!1sen!2sph"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                    />
                </div>
            </div>
        </React.Fragment>
    );
};

export default Contact;