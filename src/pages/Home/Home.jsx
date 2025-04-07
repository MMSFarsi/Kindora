import Testimonials from "../../components/Testimonials"
import RecentEvent from "../RecentEvent/RecentEvent"
import Banner from "./Banner"
import HowWorks from "./HowWorks"
import Newsletter from "./Newsletter"
import WhyDonate from "./WhyDonate"


const Home = () => {
  return (
    
    <div className='bg-[#F6F9FA] pb-12'>
    <Banner></Banner>
    <WhyDonate></WhyDonate>
    <RecentEvent></RecentEvent>
    <HowWorks></HowWorks>
    <Testimonials></Testimonials>
    <Newsletter></Newsletter>
    </div>
  )
}

export default Home