import React from 'react'
import Footer from "./Footer";
import JobListings from "../components/clientPage/JobListings";
import ClientsCreativity from "../components/clientPage/ClientsCreativity";
import ClientsCurious from "../components/clientPage/ClientsCurious";
import ClientsUniq from "../components/clientPage/ClientsUniq";
import ClientsHero from "../components/clientPage/ClientsHero";
import Navbar from "../components/Navbar";

const ClientPage = () => {

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

export default ClientPage;
