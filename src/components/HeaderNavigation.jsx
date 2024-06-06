import ButtonsNavigation from "./ButtonsNavigation";
import MenuNavigation from "./MenuNavigation";
const HeaderNavigation = () => {
  return (
    <div className="menu   bg-black/10 z-20 fixed right-0 left-0 rounded-xl mt-2 px-4 ">
      <nav className="    ">
        <MenuNavigation />
      </nav>
      <nav>
        <ButtonsNavigation />
      </nav>
    </div>
  );
};

export default HeaderNavigation;
