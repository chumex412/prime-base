import React from 'react'
import TeamList from './TeamList'
import '../styles/our-team.css'

function OurTeam() {
  return (
    <section className="teams">
      <div className="container">
        <h2 className="h3 teams-header">Our Team</h2>
        <TeamList />
      </div>
    </section>
  )
}

export default OurTeam;