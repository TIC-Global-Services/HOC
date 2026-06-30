import React from 'react'
import Footer from "./Footer";
import JobListings from "../components/clientPage/JobListings";
import ClientsCreativity from "../components/clientPage/ClientsCreativity";
// import ClientsCurious from "../components/clientPage/ClientsCurious";
import ClientsUniq from "../components/clientPage/ClientsUniq";
import ClientsHero from "../components/clientPage/ClientsHero";
import Navbar from "../components/Navbar";
import ClientHero from '../components/clientPage/mobLayout/ClientHero';

const ClientPage = () => {

    return (
      <>
        <Navbar />
        <div className='lg:hidden'>
        <ClientHero />
        </div>
        <div className='hidden lg:block'>
        <ClientsHero />
        </div>
        <ClientsCreativity />
       {/* <ClientsCurious /> */}
        <ClientsUniq />
        <JobListings />
        <Footer />
      </>
    );
  }

export default ClientPage;
