import React, { useEffect, useState } from 'react';
import "../Stylesheets/ComponentsStyleSheet.css";

/**Definiting interface for slides show
 * Ensure that the order of the altText is the same as that 
 *  of the images.
*/
interface SlideshowProps {
    images: string[]; // An array of image URLs
    altText: string[]; // An array of image alt texts
    interval?: number; // Optional: Interval between slides in milliseconds
  }
/**Defining slide show function that takes image tuple as input
 * and returns that imagee as the current slide.
 * @src: string value linking to the image
 * @alt: alternative string to display if image does not show
 * 
 * Other info: All images must be rendered in the body of the content 
 * container
 * 
 * return: an image slideshow
*/
const Slideshow: React.FC<SlideshowProps> = ({ images,altText, interval = 3000 }) => {
    //Images are tracked using indexes
    const [currentImage, setCurrentImage] = useState<number>(0);

    /**nextSlide*/
    const nextSlide = () => {
        setCurrentImage((currentImage + 1) % images.length);
    };
    /**previousSlide*/
    const previousSlide = () => {
        setCurrentImage((currentImage + images.length - 1) % images.length);
    };
    /**Automatically move to next slide */
    useEffect(() => {
        const timer = setInterval(nextSlide, interval);
        return () => clearInterval(timer);//reset timer
    }, [currentImage, interval]);
    return (
        <div className="slideshow-container">
            <img src={images[currentImage]} alt={altText[currentImage]} />
            <div className="slideshow-controls">
                <button onClick={previousSlide}>Previous</button>
                <button onClick={nextSlide}>Next</button>
            </div>
    
        </div>
        );
};

export default Slideshow;
