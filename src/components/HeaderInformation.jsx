import pnglogo from "../helpers/logo-word.png";
import Buttons from "./Buttons";
const HeaderInformation = () => {
  return (
    <div className="imagotipo w-full md:w-[500px] mt-[100%] sm:mt-0">
      <div className=" min-w-[500px] lg:gap-16 px-20">
        <img src={pnglogo} alt="Imagotipo" />
      </div>
      <Buttons firstBtn="Play" SecondBtn="Ver información" url="https://www.youtube.com/watch?v=9m9yRauMJIQ&t=47s" />
    </div>
  );
};

export default HeaderInformation;
