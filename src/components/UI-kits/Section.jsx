import React from 'react'

const Section = ({id, extraClasses, children}) => {
    const className = `section-py ${extraClasses ?? ""}`
    
    return (
        <>
            {
                (id)?
                    <section id={id} className={className}>
                        {children}
                    </section>
                :
                    <section className={className}>
                        {children}
                    </section>

            }
        </>
    )
}

export default Section