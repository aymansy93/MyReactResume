import React, { useState, useEffect } from 'react'
import './ScrollToTopButton.css'
import {TbArrowBigTop} from 'react-icons/tb'
const ScrollToTopButton = () => {


    const [showButton, setShowButton] = useState(false);

    const handleButtonClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 100) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
         <>
            {showButton ? (
           <button className="goto" onClick={handleButtonClick}><TbArrowBigTop/></button>
            ) : (
            ''
            )}
        </>
    )
}

export default ScrollToTopButton