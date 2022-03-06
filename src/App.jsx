import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MapChart from './Map/MapChart.jsx';
import MapChartIndonesia from './Map/MapChartIndonesia';
import MapChartChoropleth from './Map/MapChartChoropleth';
import MapChartChoroplethIndonesia from './Map/MapChartChoroplethIndonesia';
import { 
  Collapse, 
  DropdownItem, 
  DropdownMenu, 
  DropdownToggle, 
  Nav, 
  Navbar, 
  NavbarBrand, 
  NavbarText, 
  NavbarToggler, 
  NavItem, 
  NavLink, 
  UncontrolledDropdown 
} from 'reactstrap';

function App() {
  return (
    <>
      <div>
        <Navbar
          color="light"
          expand="md"
          light
        >
          <NavbarBrand href="/">
            reactstrap
          </NavbarBrand>
          <NavbarToggler onClick={function noRefCheck(){}} />
          <Collapse navbar>
            <Nav
              className="me-auto"
              navbar
            >
              <NavItem>
                <NavLink href="/components/">
                  Components
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
              <UncontrolledDropdown
                inNavbar
                nav
              >
                <DropdownToggle
                  caret
                  nav
                >
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText>
              Simple Text
            </NavbarText>
          </Collapse>
        </Navbar>
      </div>
      <div className="App">
        {/* <MapChart/> */}
        {/* <MapChartChoropleth /> */}
        {/* <MapChartIndonesia /> */}
        <MapChartChoroplethIndonesia />
      </div>
    </>
  );
}

export default App;
