import AboutHome from "../components/AboutHome";
import Footer from '../components/Footer';
import CustomerReviewSlider from "../components/CustomerReviewSlider";

export default function Home() {
  return (
    <div>
    
        {/* Main content of the page */}
        <AboutHome/>
        <CustomerReviewSlider/>
        <Footer />

    
        
    </div>
  );
}
