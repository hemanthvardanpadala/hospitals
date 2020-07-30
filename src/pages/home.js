import React from 'react';
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
export default function Home() {
    return (
        <>
    <Hero>
      <Banner
          title="Healthy Hands"
          subtitle="beds starting at Rs.600"
        >
            <Link to="/rooms" className="btn-primary">
             beds
          </Link>
        </Banner>
        
    </Hero>
    <Services />  
    <FeaturedRooms />
  </>
    )
   
    
}
