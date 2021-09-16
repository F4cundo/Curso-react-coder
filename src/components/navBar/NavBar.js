import './NavBar.css';
import logo from './descarga.png';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
//import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';

const NavBar = () => {
  return (
  <AppBar position="static" className="main-navBar">
  <Toolbar>
    <Typography variant="h6">
      <div className="container-logo">
      <img src={logo} alt='logo principal'/>
      </div>
    </Typography>
    <div>
    <ul className="navBar-list">
      <li><Button color="inherit">Inicio</Button></li>
      <li><Button color="inherit">Historia</Button></li>
      <li><Button color="inherit">Galeria</Button></li>
      <li><Button color="inherit">Contacto</Button></li>
    </ul>
    </div>
  </Toolbar>
</AppBar>
  );
}


export default NavBar;
