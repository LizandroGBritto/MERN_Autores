import { Navbar, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <Navbar fluid rounded>
            <NavbarToggle />
            <h1 className="font-semibold">Autores</h1>
            <NavbarCollapse>
                <NavbarLink as={Link} to="/new">Crear Autor</NavbarLink>
                <NavbarLink as={Link} to="/">Ver Tabla</NavbarLink>
            </NavbarCollapse>
        </Navbar>)
}

export default Nav