import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import PropertyForm from './components/PropertyForm';
import OffPlan from './components/OffPlan';
import Footer from './components/Footer'; // Footer import karo
import Commercial from './components/Commercial';
import Blog from './data/Blogs';
import Partners from './components/Partners';
import StartHome from './components/StartHome';
import RequestForm from './components/RequestForm';
import Areas from './components/Areas';
import Developer from './components/Developer';
import MeetTheTeam from './components/MeetTheTeam';
import AboutUs from './components/AboutUs';
import PopPage from './components/PopPage';
import BlogPage from './components/BlogPage';
import BlogDetails from './components/BlogDetails';
import ViewProperty from './components/ViewProperty';
import ContactPage from './components/ContactPage';
import PropertyListing from './components/PropertyListing';
import BlogForm from './components/BlogForm';
import { Helmet } from 'react-helmet';
import FeedBack from './components/FeedBack';


const App = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Helmet>
                <title>Real Estate Dubai - Your Dream Properties</title>
                <meta name="description" content="Explore top properties in Dubai with expert guidance." />
                <meta name="keywords" content="Real Estate, Dubai, Properties, Rent, Buy" />
            </Helmet>
      {/* Navbar at the top */}
      <NavBar />
      {/* <PopPage/> */}

      {/* Main content with Routes */}
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<StartHome />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/pro" element={<PropertyForm />} />
          <Route path="/off-plan" element={<OffPlan />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/req" element={<RequestForm />} />
          <Route path="/area-guides-in-dubai" element={<Areas />} />
          <Route path="/developers" element={<Developer />} />
          <Route path="/meet-the-team" element={<MeetTheTeam />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/blogpage" element={<BlogPage />} />
          <Route path="/blogform" element={<BlogForm />} />
          <Route path="/feed" element={<FeedBack />} />
          <Route element={<Map />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/allproperties" element={<PropertyListing />} />
          <Route path="/property/:id" element={<ViewProperty />} />
          {/* <Route path="/map" element={<PopPage />} /> */}
          <Route path="*" element={<div>404 - Page Not Found</div>} />
          <Route path="*" element={<div><Helmet><title>404 - Page Not Found</title></Helmet>404 - Page Not Found</div>} />
        </Routes>
      </main>

      {/* Footer at the bottom */}
      <Partners />
      <Footer />
    </div>
  );
};

export default App;
