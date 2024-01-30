import { Container, Nav, Navbar } from 'react-bootstrap'
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {

   let navigation = useNavigate();
   let location = useLocation();

  const handleSearch = async(e:React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    let search = e.target.value;
    if(!search){
      navigation({
        pathname:"/",
      });
    }else{
      if(location.pathname === "/search"){
        navigation({
          search: `${createSearchParams({q:search})}`
        });
      }else{
        navigation({
          pathname:"/search",
          search: `${createSearchParams({q:search})}`
        });
      }
    }
  }

  return (
    <Navbar collapseOnSelect expand="md" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
        <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto d-flex justify-content-between w-100">
                <Nav.Link href="#"></Nav.Link>
                <form role="search" className='w-50' style={{maxWidth:"400px", minWidth:"260px"}}>
                    <input className="form-control me-2 w-100" type="search" placeholder="Search..." aria-label="Search" onChange={(e) => handleSearch(e)}/>
                </form>
                <Nav.Link href="#"></Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header