import React from 'react'
import Section from '../../UI-kits/Section'
import MainHeader from '../../UI-kits/MainHeader'
import teamMembersConf from '../../../config/teamMembersConf'
import TeamMemberCard from './TeamMemberCard'

const TeamMembers = () => {
  return (
    <Section extraClasses={"section-py"}>
        <div className="container">
            <div className="d-flex flex-column gap-5">
                <MainHeader text={"Meet Our Leaders"} />
                {/* <div className="d-flex flex-wrap align-items-center justify-content-between gap-4"> */}
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-4">
                    {
                        teamMembersConf.map((member, i)=>{
                            return(
                                <TeamMemberCard key={i} {...member} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </Section>
  )
}

export default TeamMembers