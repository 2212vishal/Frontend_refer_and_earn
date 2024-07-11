import Faq from "./components/Faq";
import Feature_section from "./components/Feature_section"
import Firstpage from "./components/Firstpage";
import Footer from "./components/Footer";
// import Loginform from "./components/Loginform";
import Navbar from "./components/Navbar";
import ReferralFlow from "./components/ReferralFlow";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => (
  <div className="flex flex-col">
    <ToastContainer />
    <div className={`bg-primary sm:px-16 px-6 flex justify-center items-center`}>
      <div className={` xl:max-w-[1280px] w-full`}>
        <Navbar/>
      </div>
    </div>

    <div className="flex flex-col items-center gap-4 w-full overflow-hidden">
    

    <div className="w-10/12 p-4">
      <Firstpage />
    </div>

    

    <div>
      <div>
        <h2 class="font-mullish text-center text-2xl leading-[1.2] font-extrabold block">How Do I <span className="text-blue-500">Reffer</span> ?</h2>
        <div class="w-6 h-1 mx-auto mt-4 mb-6 bg-blue-600"></div>
      </div>
        <ReferralFlow/>
    </div>

    <div className="w-full">
       <Feature_section/> 
    </div>

    <div>
      <Faq/>
    </div>

    <div className="w-full">
      <Footer/>
    </div>

  </div>
    
  </div>
  
  
);

export default App;

