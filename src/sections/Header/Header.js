import './Header.css'
import logo from '../../assets/images/logo2.png';
import { NavItem } from '../../components/index'
import { NavItemData} from '../../Portfolio';

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt='' />
          </a>
          <button className="navbar-toggler"
          type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">

            <span className="navbar-toggler-icon btn btn-light"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {
              NavItemData.map((element,i) => (
                <NavItem url={element.url} text={element.text} key={i} />
              ))
              }
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header