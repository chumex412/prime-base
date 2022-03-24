import React from 'react'
import TeamItem from './TeamItem';
import Loader from './Loader'
import {gql, useQuery} from '@apollo/client'

const GET_MEMBERS = gql`
  {
    members {
      member_id,
      member_firstname,
      member_lastname,
      member_image,
      member_position
    }
  }
`

function TeamList() {
  const { loading, error, data } = useQuery(GET_MEMBERS);

  if(loading) {
    return <Loader />
  }

  if(error) {
    return <strong>Unable to fetch data at the moment. Refresh</strong>
  }

  if(data) {
    const { members } = data;
    return (
      <section className="team-list row">
        {
          members.map(member => {
            const { member_id, member_firstname, member_lastname, member_image, member_position } = member;

            return (
              <TeamItem 
                key={member_id}
                id={member_id}
                firstname={member_firstname}
                lastname={member_lastname}
                image={member_image}
                position={member_position}
              />
            )
          })
        }
      </section>
    )
  }
}

export default TeamList;