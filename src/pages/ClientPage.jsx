import React from 'react'
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import {clientMap} from '../pages/clientMap'

import JobListings from "../components/clientPage/JobListings";
import ClientsCreativity from "../components/clientPage/ClientsCreativity";
import ClientsCurious from "../components/clientPage/ClientsCurious";
import ClientsUniq from "../components/clientPage/ClientsUniq";
import ClientsHero from "../components/clientPage/ClientsHero";
import Navbar from "../components/Navbar";

const ClientPage = () => {
  const { slug } = useParams();

  if (!slug) {
    return (
      <>
        <Navbar />
        <ClientsHero />
        <ClientsCreativity />
        <ClientsCurious />
        <ClientsUniq />
        <JobListings />
        <Footer />
      </>
    );
  }
  
  const Component = clientMap[slug];

  if (!Component) {
    return (
      <>
        <Navbar />
        <div className="h-screen flex items-center justify-center">
          <h1>Client not found</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Component />
    </>
  );
};

export default ClientPage;
