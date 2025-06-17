// components/MainMenu.jsx
import Menu from "../components/Menu";
import Icon from "../components/Icon";
import {Link} from 'react-router-dom';


function SideMenu({ isOpen, toggle }) {
  return (
    <Menu type={isOpen ? '' : '-hidden'}>
      <Icon type="burger_menu" onClick={toggle} />
      <Link to='/upcoming-tasks'>Upcoming</Link>
      <Link to='/'>Today</Link>
      <Link to='/calendar'>Calendar</Link>
      <Link to='/sticky-wall'>Sticky Wall</Link>
    </Menu>
  );
}

export default SideMenu;
