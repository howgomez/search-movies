import "../components/Header.css";
import video from "../helpers/background-video.mp4";
import HeaderInformation from "./HeaderInformation";
import HeaderNavigation from "./HeaderNavigation";
import HomePopular from "./HomePopular";

const Header = () => {
  return (
    <div>
      <aside className="background--banner">
        <video muted loop autoPlay className="h-[100%]">
          <source src={video} type="video/mp4" />
        </video>
        <div className="banner">
          <HeaderNavigation />
          <HeaderInformation />
        </div>
      </aside>
      <HomePopular />
    </div>
  );
};

export default Header;
