import ButtonsNavigation from "./ButtonsNavigation";
import MenuNavigation from "./MenuNavigation";
const HeaderNavigation = () => {
  return (
    <div className="menu z-20 bg-black/10 fixed right-0 left-0 rounded-xl mt-2 px-4  ">
      <nav>
        <MenuNavigation />
      </nav>
      <nav>
        <ButtonsNavigation />
      </nav>
    </div>
  );
};

export default HeaderNavigation;
