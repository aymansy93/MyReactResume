import React, { useEffect } from 'react';

import './MouseFollower.css'


function MouseFollower() {

  useEffect(() => {
    function handleMouseMove(event) {
      const shadow = document.querySelector('.shadow-M');
      shadow.style.left = event.clientX + 'px';
      shadow.style.top = event.clientY + 'px';
    }

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <div className="shadow-M"></div>
  );
}

export default MouseFollower;
