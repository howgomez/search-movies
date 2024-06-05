import { CiPlay1 } from "react-icons/ci";
import { Link } from "react-router-dom";
import { CiCircleInfo } from "react-icons/ci";
const Buttons = ({ firstBtn, SecondBtn, url }) => {
  return (
    <div className="imagotipo--info">
      <div className="flex items-center gap-8">
        <Link to={url} target="_blank">
          <p className="flex px-6 py-2 rounded-md items-center gap-6">
            <CiPlay1 />
            <span>{firstBtn}</span>
          </p>
        </Link>
        <p className="flex px-6 py-2 rounded-md items-center gap-6">
          <CiCircleInfo />
          <span>{SecondBtn}</span>
        </p>
      </div>
    </div>
  );
};
export default Buttons;
