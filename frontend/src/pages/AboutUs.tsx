import React from 'react';

//component
import Navbar from '../components/Navbar';

//CSS
import './css/AboutUs.css';

function AboutUs() {
    return(
        <div className="aboutUs-1">
            <Navbar />
            <div className="aboutUs-1-1">
                <p className='aboutUs-text-1'><b>Waste On Delivery</b> <br /> Pesan Pengambilan Sampah Secara Online dengan Mudah dan Nyaman dari Rumah Anda</p>
            </div>
        </div>
    );
}

export default AboutUs;