import React from 'react';
import Footer from '../components/Dashboard/Footer';
import Navbar from '../components/Dashboard/Navbar';
import Bottom from '../components/Dashboard/Bottom';
import Body from '../components/Dashboard/Body';


const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Body/>
      <Bottom/>
      <Footer />
    </div>
  );
};

export default Dashboard;
