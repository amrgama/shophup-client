import React, { useState } from 'react'

const ImageMagnifier = ({
    src,
    width,
    height,
    magnifierHeight = 100,
    magnifieWidth = 100,
    zoomLevel = 1.5
}) => {
    const [[x, y], setXY] = useState([0, 0]);
    const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
    const [showMagnifier, setShowMagnifier] = useState(false);

    const onStart = (e) => {
        // update image size and turn-on magnifier
        const elem = e.currentTarget;
        const { width, height } = elem.getBoundingClientRect();
        setSize([width, height]);
        setShowMagnifier(true);
    };

    const onMove = (e) => {
        // update cursor position
        const elem = e.currentTarget;
        const { top, left } = elem.getBoundingClientRect();

        // calculate cursor position on the image
        const x = e.pageX - left - window.pageXOffset;
        const y = e.pageY - top - window.pageYOffset;
        setXY([x, y]);
    };

    const onEnd = () => {
        // close magnifier
        setShowMagnifier(false);
    };

    return (
      <div
        style={{
          position: "relative",
          height: height,
          width: width
        }}
      >
        <img
          src={src}
          style={{objectFit: "fill", objectPosition: "center" }}
          className={'h-100 w-100'}
          onTouchStart={onStart}
          onMouseEnter={onStart}
          onTouchMove={onMove}
          onMouseMove={onMove}
          onTouchEnd={onEnd}
          onTouchCancel={onEnd}
          onMouseLeave={onEnd}
          alt={"img"}
        />
  
        <div
          style={{
            display: showMagnifier ? "" : "none",
            position: "absolute",
  
            // prevent magnifier blocks the mousemove event of img
            pointerEvents: "none",
            // set size of magnifier
            height: `${magnifierHeight}px`,
            width: `${magnifieWidth}px`,
            // move element center to cursor pos
            top: `${y - magnifierHeight / 2}px`,
            left: `${x - magnifieWidth / 2}px`,
            opacity: "1", // reduce opacity so you can verify position
            border: "1px solid lightgray",
            backgroundColor: "white",
            backgroundImage: `url('${src}')`,
            backgroundRepeat: "no-repeat",
  
            //calculate zoomed image size
            backgroundSize: `${imgWidth * zoomLevel}px ${
              imgHeight * zoomLevel
            }px`,
  
            //calculate position of zoomed image.
            backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
            backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`
          }}
        ></div>
      </div>
    );
  };

  export default ImageMagnifier;