import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux'
import styleBanner from "./Banner.module.css"

const Banner = () => {
    /*****
     * Composant contenant le header 
     */
    const pokedex = useSelector(state=>state.pokedex)
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{minHeight:"100px"}}>
                <Container>
                    <Navbar.Brand href="/">Pokédex</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className={`me-auto ${styleBanner.nav_items}`}>
                            <Nav.Link href="/">Liste pokémons</Nav.Link>
                            <Nav.Link href="/Pokedex">Mes Pokédex <span className="text-white">{pokedex?.length}</span></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Banner