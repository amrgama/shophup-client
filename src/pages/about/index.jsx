import React from 'react'
import Section from '../../components/UI-kits/Section'
import MainHeader from '../../components/UI-kits/MainHeader'
import AboutCard from '../../components/about/AboutCard'
import TeamMembers from '../../components/about/team-members'
import LinkButton from '../../components/UI-kits/LinkButton'
import WhyChooseUs from '../../components/about/WhyChooseUs'

const About = () => {
  return (
    <div id='about'>
        <Section extraClasses={"section-py"}>
            <div className="container">
                <div className="d-flex flex-column gap-5 text-start">
                    <MainHeader text={"About Our Store"} />
                    <p className="d-block w-100 fw-500 fs-5">Since 1985, we’re creating the awesome products & promise to give high quality in the eCommerce market for all our customers residing any part of the world.</p>
                    <p className="d-block w-100 text-muted">
                        Ut enim nunc, luctus vel nulla id, lacinia ultrices libero. Maecenas quis interdum nibh. Suspendisse purus nibh, vestibulum porttitor orci et, egestas maximus ligula. Proin pharetra convallis est, ut aliquam nisl consequat cursus. Donec ut finibus dui. felis urna, feugiat ac auctor in, euismod ut sapien. Cras nulla felis, faucibus sit amet aliquet a, vestibulum vitae turpis. Sed a interdum lectus, in varius purus. Cras maximus nulla in felis semper hendrerit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <div className="d-flex justify-content-between gap-5">
                        <div className="d-flex flex-column gap-2">
                            <h2 className="fs-5 fw-500 m-0">Our Mission</h2>
                            <p className="text-muted">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        </div>
                        <div className="d-flex flex-column gap-2">
                            <h2 className="fs-5 fw-500 m-0">Our Vision</h2>
                            <p className="text-muted">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
        <div className="container">
            <hr className='d-block bg-light m-0' />
        </div>
        <Section extraClasses={"section-py"}>
            <div className="container">
                <div className="d-flex flex-column gap-5 text-start">
                    <MainHeader text={"We Reached So Far"} />
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-1">
                        <AboutCard number={"120"} numExtension={"+"} description={"Stores around the world"} />
                        <AboutCard number={"15"} numExtension={"M"} description={"Stores around the world"} />
                        <AboutCard number={"200"} numExtension={"K"} description={"Stores around the world"} />
                        <AboutCard number={"300"} numExtension={"+"} description={"Stores around the world"} />
                    </div>
                </div>
            </div>
        </Section>
        <TeamMembers />
        <div className="container">
            <hr className='d-block bg-light m-0' />
        </div>
        <Section extraClasses={"section-py"}>
            <div className="container">
                <div className="d-flex flex-wrap jusify-content-between gap-5 text-start">
                    <div className="col-12 col-lg d-flex flex-column gap-4">
                        <p className="text-start fw-bold fs-4 m-0">In in mattis erat, eu mattis libero. Donec volutpat faucibus elit cursus interdum</p>
                    </div>
                    <div className="col-12 col-lg d-flex flex-column gap-4 text-start">
                        <p className="m-0">Nullam accumsan nulla in arcu condimentum imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur lacinia purus vitae lorem porttitor fermentum. In in mattis erat, eu mattis libero.</p>
                        <p className="m-0">ociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur lacinia purus vitae lorem porttitor fermentum. In in mattis erat, eu mattis libero. Donec volutpat faucibus elit cursus interdum.</p>
                        <LinkButton link={"/shop"} text={"Shop Now"} extraClasses={"w-fit"} />
                    </div>
                </div>
            </div>
        </Section>
        <div className="container">
            <hr className='d-block bg-light m-0' />
        </div>
        <WhyChooseUs />
    </div>
  )
}

export default About