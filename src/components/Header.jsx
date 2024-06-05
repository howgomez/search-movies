import "../components/Header.css";
import video from "../helpers/background-video.mp4";
import HeaderInformation from "./HeaderInformation";
import HeaderNavigation from "./HeaderNavigation";
import HomePopular from "./HomePopular";
import Walpapper from '../helpers/wallpaper.webp'
import Footer from './Footer'

const Header = () => {
  return (
    <div>
      <aside className="background--banner">
        <img src={Walpapper} alt="Walpapper" className="walpapper" />
        {/* <video muted loop autoPlay className="h-[100%]">
          <source src={video} type="video/mp4" />
        </video> */}
        <div className="banner">
          <HeaderNavigation />
          <HeaderInformation />
        </div>
      </aside>
      <HomePopular />
      <Footer />
    </div>
  );
};

export default Header;
