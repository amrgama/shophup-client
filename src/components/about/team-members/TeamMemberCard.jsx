import React from 'react'
import ImageWithOverlay from '../../UI-kits/ImageWithOverlay'
import useMediaQuery from '../../../hooks/useMediaQuery'
import {PiFacebookLogoBold} from "react-icons/pi"
import {RiInstagramLine, RiTwitterFill} from "react-icons/ri"
import {TbBrandPinterest} from "react-icons/tb"
import { Link } from 'react-router-dom'

const TeamMemberCard = ({img, name, jobTitle}) => {
  const matches = useMediaQuery("(min-width: 768px)");
  return (
    <div className='col col-lg d-flex flex-column gap-3 text-start bg-white' style={{minWidth: !matches? "200px": "unset", maxWidth: "350px", maxHeight: "400px"}}>
        <ImageWithOverlay img={img} extraClasses={"rounded-3 fs-3"}>
          <Link to={""} className="nav-link text-white">
            <PiFacebookLogoBold />
          </Link>
          <Link to={""} className="nav-link text-white">
            <RiInstagramLine />
          </Link>
          <Link to={""} className="nav-link text-white">
            <RiTwitterFill />
          </Link>
          <Link to={""} className="nav-link text-white">
            <TbBrandPinterest />
          </Link>
        </ImageWithOverlay>
        <div className='w-100'>
          <span className="d-block fs-5 fw-500">{name}</span>
          <span className="d-block fs-7 text-muted">{jobTitle}</span>
        </div>
    </div>
  )
}

export default TeamMemberCard