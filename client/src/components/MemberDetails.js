import React from 'react'
import MemberInfo from './MemberInfo'
import MemberBackground from './MemberBackground'
import { useParams } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client'
import '../styles/single-member.css'
import Loader from './Loader'

const GET_MEMBER = gql`
  query Member($id: ID) {
    member (id: $id) {
      member_id,
      member_firstname,
      member_lastname,
      member_image,
      member_position,
      details {
        address,
        background,
        phone_number,
        social_media {
          url, 
          media_id
        }
      }
    }
  }
`

function MemberDetails() {
  const {nameid} = useParams();

  const id = String(nameid.split("+").slice(-1));

  const { loading, error, data } = useQuery(GET_MEMBER, {
    variables: {id}
  })

  return (
    <main className="member">
      <div className="container">
        {
          loading ? <Loader /> : error ? (
            <strong>{error.message}</strong>
          ) : (
            <>
              <MemberInfo 
                firstname={data.member.member_firstname}
                lastname={data.member.member_lastname}
                position={data.member.member_position}
                image={data.member.member_image}
                address={data.member.details.address}
                phone={data.member.details.phone_number}
                social={data.member.details.social_media}

              />
              <MemberBackground background={data.member.details.background} />
            </>
          )
        }
      </div>
    </main>
  )
}

export default MemberDetails