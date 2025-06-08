// components/MainMenu.jsx
import Menu from "../components/Menu";
import Icon from "../components/Icon";

function SideMenu({ isOpen, toggle }) {
  return (
    <Menu type={isOpen ? '' : '-hidden'}>
      <Icon type="burger_menu" onClick={toggle} />
    </Menu>
  );
}

export default SideMenu;
