import React, { useEffect } from 'react';
import '../css/styles.css'
import '../css/bootstrap.css'
                 
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import AlertSection from '../Components/Body/AlertSection'
import FirstSection from '../Components/Body/FirstSection'
import SecondSection from '../Components/Body/SecondSection'
import ThirdSection from '../Components/Body/ThirdSection'
import FourthSection from '../Components/Body/FourthSection'
import FifthSection from '../Components/Body/FifthSection'
import SixthSection from '../Components/Body/SixthSection'
import $ from 'jquery'

function App() {
  useEffect(() => {
    const footerInteractivity = () => {
      $(".footer-links-wrapper h3").off('click').on('click', function() {
        if ($(window).width() <= 768) {
          $(this).next('ul').slideToggle();
          $(this).toggleClass('expanded');
        } else {
          $(this).next('ul').show();
        }
      });
    }
  
    footerInteractivity();
  
    const sizeHandle = () => {
      window.location.reload();
    }
  
    window.addEventListener('resize', sizeHandle);
  
    return () => {
      window.removeEventListener('resize', sizeHandle);
    }
  }, []);
  

  return (
    
    <>
     <Header />
     <AlertSection />
     <FirstSection />
     <SecondSection />
     <ThirdSection />
     <FourthSection />
     <FifthSection />
     <SixthSection />
     <Footer />
     
    </>
  )
}

export default App
