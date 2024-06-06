import "../components/Header.css";
import HeaderInformation from "./HeaderInformation";
import HeaderNavigation from "./HeaderNavigation";
import HomePopular from "./HomePopular";
import Walpapper from "../helpers/wallpaper.webp";
import Footer from "./Footer";
import MobileBackground from "../helpers/background-mobile.webp";
import { useMediaQuery } from "@uidotdev/usehooks";

const Header = () => {
  const isMobile = useMediaQuery("(min-width: 500px)");
  return (
    <div>
      <aside className="background--banner">
        <div>
          <img
            src={isMobile ? Walpapper : MobileBackground}
            alt="Walpapper"
            className="walpapper  w-full absolute top-0 left-0 right-0 z-10 h-full"
          />
        </div>
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
