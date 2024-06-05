import ButtonsNavigation from "./ButtonsNavigation";
import MenuNavigation from "./MenuNavigation";
const HeaderNavigation = () => {
  return (
    <div className="menu z-20">
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
