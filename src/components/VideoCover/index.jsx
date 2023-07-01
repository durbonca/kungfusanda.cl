'use client';
import React, { useEffect, useRef } from 'react'
// import videoSrc from '/video/videoHeader.mp4';

const VideoCover = () => {
    const videoRef = useRef();
    useEffect(() => {
        setTimeout(()=>{
            videoRef.current.play()
        }, 2000)
    }, []);

  return (
    <section>
      <div
        style={{
          width: '100vw',
          height: '90vh',
          position: 'fixed',
          top: 60,
          left: 0,
          right: 0,
          zIndex: -1,
        }}
      >
        <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className='w-full'
        >
            <source src="/video/videoHeader.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  )
}

export default VideoCover