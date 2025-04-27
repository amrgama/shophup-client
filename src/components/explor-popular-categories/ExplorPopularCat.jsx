import React from 'react'
import MainHeader from '../UI-kits/MainHeader';
import { Link } from 'react-router-dom';
import CategoriesSlider from './CategoriesSlider';
import Section from '../UI-kits/Section';


const ExplorPopularCat = () => {

  return (
    <Section>
        <div className="container">
            <div className="d-flex flex-column">
                <div className="col-12 d-flex flex-wrap align-items-center gap-1 mb-5">
                    <MainHeader text={"Explore Popular Categories"} extraClasses={"text-nowrap"} />
                    <Link to="/" className='link-hover-effect text-dark ms-auto'>See All</Link>
                </div>
                <div className='col-12 d-flex flex-wrap mb-4'>
                    <CategoriesSlider />
                </div>
            </div>
        </div>
    </Section>
  )
}

export default ExplorPopularCat