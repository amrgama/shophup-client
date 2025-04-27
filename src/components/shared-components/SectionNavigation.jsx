import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import AnimatedLink from './links/AnimatedLink';

const SectionNavigation = ({navLinks, activeFirstTab, extraClasses}) => {
    const {pathname,hash, search} = useLocation();
   const url = pathname+hash+search;
   const isFirstRender = useRef(true);

    const renderednavLinks = navLinks.map(({label, link}, i)=>{
        const isActive = url.includes(link)
        const activeFirstLink = activeFirstTab ?? true;
        // console.log("isActive", isActive, url, link, activeFirstLink);
        return (
            <li key={i} className="nav-item">
                <AnimatedLink
                    to={link}
                    active={(isFirstRender.current)? activeFirstLink : isActive}
                    mode={"dark"}
                    wrapperclasses={`nav-link text-nowrap px-3 py-1 `}
                    // className={`nav-link text-nowrap px-3 py-1 `}
                    // aria-current="page"
                >
                    {label}
                </AnimatedLink>
            </li>
        )
    })

    useEffect(()=>{isFirstRender.current= false}, [])

    return (
        <nav className={`nav col-12 col-sm h-100 align-items-center justify-content-center justify-content-lg-end ${extraClasses ?? ""}`}>
            <ul className="navbar-nav flex-row">
                {renderednavLinks}
            </ul>
        </nav>
    )
}

export default SectionNavigation