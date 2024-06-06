import pnglogo from "../helpers/logo-word.png";
import Buttons from "./Buttons";
import { CiPlay1 } from "react-icons/ci";
const HeaderInformation = () => {
  return (
    <div className="imagotipo w-full lg:w-[500px]">
      <div className=" min-w-[500px] lg:gap-16 px-20">
        <img src={pnglogo} alt="Imagotipo" />
      </div>
      <Buttons firstBtn="Play" SecondBtn="Ver información" />
    </div>
  );
};

export default HeaderInformation;
