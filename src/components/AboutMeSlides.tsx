import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Slideshow: React.FC = () => {
    const images: string[] = [
        'pic1.jpg',
        'pic2.jpg',
        'pic3.jpg',
    ];

    const zoomOutProperties = {
        indicators: true,
        scale: 0.4,
    };

    return (
        <div>
            <Zoom {...zoomOutProperties}>
                {images.map((each, index) => (
                    <div key={index} style={{ width: '100%' }}>
                        <img
                            style={{ objectFit: 'cover', width: '100%' }}
                            src={each}
                            alt={`slide-${index}`} // Adding alt for accessibility
                        />
                    </div>
                ))}
            </Zoom>
        </div>
    );
};

export default Slideshow;
