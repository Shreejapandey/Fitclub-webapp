import './App.css';
import Connect from './components/ConnectFile/Connect';
import Footer from './components/FooterFile/Footer';
import Home from './components/HomeFile/Home'; 
import Plan from './components/PlanFile/Plan';
import Programs from './components/ProgramsFile/Programs';
import Serve from './components/ServeFile/Serve';
import Testimonial from './components/TestimonialFile/Testimonial';

function App() {
  return (
    <div className="App">
        <Home />
        <Programs />
        <Serve />
        <Plan />
        <Testimonial />
        <Connect />
        <Footer />
    </div>
  );
}

export default App;
