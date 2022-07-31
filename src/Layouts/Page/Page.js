import Header from "./Header/Header";
import AboutCompany from './AboutCompany/AboutCompany'

function Page() {
    return (
      <div className='flex-grow-1'>
        <Header/>
        <div className='container'>
          <AboutCompany/>
        </div>
      </div>
    );
  }
  
  export default Page;