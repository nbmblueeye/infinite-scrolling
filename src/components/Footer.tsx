import { Col, Container, Nav, NavItem, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <div className='footer-wrapper bg-dark py-3 text-white'>
        <Container>
            <Row>
                <Col sm={6} md={4}>
                    <h5>Cetegory</h5>
                    <Nav className="flex-column">
                        <Nav.Link href="#" className="text-white">Home</Nav.Link>
                        <Nav.Link href="#" className="text-white">Features</Nav.Link>
                    </Nav>
                </Col>
                <Col sm={6} md={4}>
                    <h5>About Me</h5>
                    <Nav className="flex-column">
                        <Nav.Link href="#" className="text-white">Home</Nav.Link>
                        <Nav.Link href="#" className="text-white">Features</Nav.Link>
                    </Nav>
                </Col>
                <Col sm={6} md={4}>
                    <h5>Contact Me</h5>
                    <Nav className="flex-column">
                        <NavItem className='d-flex align-items-center'>Email:<Nav.Link href="#" className="text-white">nbmblueeye@gmail.com</Nav.Link></NavItem>
                        <NavItem className='d-flex align-items-center'>Phone:<Nav.Link href="#" className="text-white">(+84)932300415</Nav.Link></NavItem>
                    </Nav>
                </Col>
            </Row>
            <div className="d-flex flex-column flex-sm-row justify-content-between py-4 border-top  ">
                <p>&copy; 2024 Company, Inc. All rights reserved.</p>
                <Nav className="list-unstyled d-flex white">
                    <Nav.Link href="#" className="text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                        </svg>
                    </Nav.Link>
                    <Nav.Link href="#" className="text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                        </svg>
                    </Nav.Link>
                    <Nav.Link href="#" className="text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                        </svg>
                    </Nav.Link>
                </Nav>
            </div>
        </Container>
    </div>
  )
}

export default Footer
