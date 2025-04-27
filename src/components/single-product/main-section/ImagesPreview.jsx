import React, { useEffect, useState } from 'react'
import ImageMagnifier from './ImageMagnifier';
import { combineWithBaseURL } from '../../../helper/helper.js';

const ImagesPreview = ({images, isLoading}) => {
  const [selectedImg, setSelectedImg] = useState(images?.[0]);
  const renderedImgButtons = (images?.length > 1) && images?.map((img, i)=>{
    return (
      <button 
        key={i} 
        onClick={(e) => {
          setSelectedImg(prev => img)
        }}
        className={`btn border border-2 px-3 py-2 ${(selectedImg === images[i])? "border-secondary": ""}`}
        style={{width: "100px", height: "90px"}}>
        <img 
          src={combineWithBaseURL(img)} alt="..." 
          className='w-100 h-100'          
          style={{objectFit: "fill", objectPosition: "center"}}
        />
      </button>
    )
  });

  useEffect(()=>{
    setSelectedImg(images?.[0])
  }, [images?.[0]])
  return (
    <div className='col-12 col-lg-5 px-0 px-lg-3 p-3' style={{minWidth: "400px"}}>
      <div className="d-flex gap-5 gap-sm-4 gap-lg-5 flex-wrap position-sticky top-0 p-0">
        <div className="col-12 col-sm-9 col-lg-12" style={{}}>
          {
            (isLoading || !!!selectedImg)?
              <div className="placeholder-glow" style={{
                width: "100%",
                height:"400px"
              }}>
                <span class="placeholder w-100 h-100"></span>
              </div>
            :
              <ImageMagnifier 
                src={combineWithBaseURL(selectedImg)} 
                width={"100%"}
                height={"400px"} 
                magnifierHeight={"200"} 
                magnifieWidth={"200"} 
              />
          }
        </div>
        <div className="col-12 col-sm col-lg-12 d-flex gap-3 flex-sm-column flex-lg-row align-items-center justify-content-center rounded-3">
          {renderedImgButtons}
        </div>
      </div>
    </div>
  )
}

export default ImagesPreview