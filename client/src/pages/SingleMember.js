import React from 'react'
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MemberDetails from '../components/MemberDetails';

function SingleMember() {
  const {nameid} = useParams();

  const name = nameid.split("+").slice(0, 2);

  return (
    <>
      <Header pageInfo={{title: `${name.join(" ")}`, page1: "about us", page2: {text: 'team member', path: nameid}}} />
      <MemberDetails />
      <Footer />
    </>
  )
}

export default SingleMember;