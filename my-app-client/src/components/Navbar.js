import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import {Link} from "react-router-dom";

export default class NavbarMain extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div  className="navbarMain">
                <Navbar color="primary" light expand="md">
                    <NavbarBrand href="/">Logo</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    <span className="text-white">Shaxsiy Kutubxona</span>
                                </DropdownToggle>
                                <DropdownMenu  >
                                    <DropdownItem>
                                        <Link to="/">
                                            Video
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="/personal-books" >
                                            Kitoblar
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="/">
                                            Maqolalar
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="/">
                                            Hujjatlar
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="/">
                                            Tadbirlar
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="/">
                                            Istiqbolli rejalar
                                        </Link>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    <span className="text-white">Kutubxona</span>
                                </DropdownToggle>
                                <DropdownMenu  >
                                    <DropdownItem>
                                        <Link to="/">
                                            Video
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="/books">
                                            Kitoblar
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="/">
                                            Maqolalar
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="/">
                                            Hujjatlar
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="/">
                                            Tadbirlar
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="/">
                                            Istiqbolli rejalar
                                        </Link>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                                <NavLink className="text-white" >Guruhlar</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}