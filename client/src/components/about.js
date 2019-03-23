import React, { Component } from 'react';

import './about.css';

class about extends Component {
    render() {
        return (
            <div>
                <video controls autoplay>
                    <source src="https://s3.amazonaws.com/nikeinc-vendor-assets/about/About-Landing-Movie.mp4" type="video/mp4" />>
            </video>
            
                <h3 id="text" > OUR MISSION:BRING INSPIRATION AND INNOVATION TO EVERY TOURIST IN THE WORLD</h3>
            </div>
        );
    }
}

export default about;