import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

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
    DropdownItem
} from 'reactstrap';
import { COLLAPSED_DRAWER, FIXED_DRAWER } from 'constants/ActionTypes'
import { toggleCollapsedNav } from 'actions/Setting'

import {
    PermScanWifi,
    RssFeed,
    StayPrimaryLandscape,
    Search,
    PermIdentity,

} from '@material-ui/icons'


//styles 
const headerheight = {
    // minHeight: "120px",
    height: "125px",
    width: "100%",
    backgroundColor: "#1a1b1d",
    fontSize: "12px",
    lineHeight: "1.5",
    color: "rgb(27, 27, 25)"
}
const timecolor = {
    color: "#6f7072",
    marginTop: "34px"
}
const iconcolor = {
    color: "#6f7072",
}
const logo = {
    width: "14%",
    marginLeft: "320px"
}

class Header extends Component {
    onSearchBoxSelect = () => {
        this.setState({
            searchBox: !this.state.searchBox
        })
    }
    handleRequestClose = () => {
        this.setState({
            searchBox: false
        })
    }
    constructor() {
        super();
        this.state = {
            searchBox: false,
            searchText: '',

        }
        this.toggle = this.toggle.bind(this);

    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    onToggleCollapsedNav = e => {
        const val = !this.props.navCollapsed
        this.props.toggleCollapsedNav(val)
    }
    updateSearchText(evt) {
        this.setState({
            searchText: evt.target.value
        })
    }

    render() {
        const {
            drawerType,
        } = this.props
        const drawerStyle = drawerType.includes(FIXED_DRAWER)
            ? 'd-block d-xl-none'
            : drawerType.includes(COLLAPSED_DRAWER) ? 'd-block' : 'd-none'
        return (
            <div>
                <Navbar color="light" light expand="lg">
                    <Nav>
                        <NavItem className="iconleft list herdericonsandtext">
                            <NavLink>
                                <div>
                                    <h2 style={timecolor}><b>12:30</b></h2>
                                </div>
                            </NavLink>
                        </NavItem>
                        <NavItem className="iconleft list herdericonsandtext">
                            <NavLink>
                                <div className="mt-4">
                                    <Link to='#'>
                                        <div>
                                            <RssFeed style={iconcolor} />
                                        </div>
                                    </Link>
                                </div>
                            </NavLink>
                        </NavItem>
                        <NavItem className="iconleft list herdericonsandtext">
                            <NavLink>
                                <div className="mt-4">
                                    <Link to='#'>
                                        <div>
                                            <PermScanWifi style={iconcolor} />
                                        </div>
                                    </Link>
                                </div>
                            </NavLink>
                        </NavItem>
                        <NavItem className="iconleft list herdericonsandtext">
                            <NavLink>
                                <div className="mt-4">
                                    <Link to='#'>
                                        <div>
                                            <StayPrimaryLandscape style={iconcolor} />
                                        </div>
                                    </Link>
                                </div>
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarToggler onClick={this.toggle} />
                    <NavbarBrand>
                        <NavLink >
                            <Link className='mb-0 mr-auto' to='/home'>
                                <img src='img/bdlogo.png' img-responsive style={logo} />
                            </Link>
                        </NavLink>
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>

                            <NavItem className="iconright list herdericonsandtext">
                                <NavLink>
                                    <div className="mt-4">
                                        <Link to='#'>
                                            <div>
                                                <Search style={iconcolor} />
                                            </div>
                                        </Link>
                                    </div>
                                </NavLink>
                            </NavItem>

                            <NavItem className="iconright list herdericonsandtext">
                                <NavLink>
                                    <div className="mt-4">
                                        <Link to='#'>
                                            <div>
                                                <PermIdentity style={iconcolor} />
                                            </div>
                                        </Link>
                                    </div>
                                </NavLink>
                            </NavItem>

                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
            // <Navbar light expand="lg" style={headerheight}>
            //     <NavbarToggler onClick={this.toggle} />
            //         <Collapse isOpen={this.state.isOpen} navbar className="listposition">
            //             <Nav className="ml-auto" navbar>
            //                 <NavItem className="iconleft list herdericonsandtext">
            //                     <NavLink>
            //                         <div>
            //                             <h2  style={timecolor}><b>12:30</b></h2>
            //                         </div>
            //                     </NavLink>
            //                 </NavItem>
            //                 <NavItem className="iconleft list herdericonsandtext">
            //                     <NavLink>
            //                         <div className="mt-4">
            //                             <Link to='#'>
            //                                 <div>
            //                                     <RssFeed style={iconcolor}/>
            //                                 </div>
            //                             </Link>
            //                         </div>
            //                     </NavLink>
            //                 </NavItem>
            //                 <NavItem className="iconleft list herdericonsandtext">
            //                     <NavLink>
            //                         <div className="mt-4">
            //                             <Link to='#'>
            //                                 <div>
            //                                 <PermScanWifi style={iconcolor}/>
            //                                 </div>
            //                             </Link>
            //                         </div>
            //                     </NavLink>
            //                 </NavItem>
            //                 <NavItem className="iconleft list herdericonsandtext">
            //                     <NavLink>
            //                         <div className="mt-4">
            //                             <Link to='#'>
            //                                 <div>
            //                                 <StayPrimaryLandscape style={iconcolor}/>
            //                                 </div>
            //                             </Link>
            //                         </div>
            //                     </NavLink>
            //                 </NavItem>
            //                 <NavbarBrand>
            //                     <NavLink >
            //                         <Link className='mb-0 mr-auto' to='/home'>
            //                             <img src='img/bdlogo.png' img-responsive style={logo} />
            //                         </Link>
            //                     </NavLink>
            //                 </NavbarBrand>
            //                 <NavItem className="iconright list herdericonsandtext">
            //                     <NavLink>
            //                         <div className="mt-4">
            //                             <Link to='#'>
            //                                 <div>
            //                                 <Search style={iconcolor}/>
            //                                 </div>
            //                             </Link>
            //                         </div>
            //                     </NavLink>
            //                 </NavItem>
            //                 <NavItem className="iconright list herdericonsandtext">
            //                     <NavLink>
            //                         <div className="mt-4">
            //                             <Link to='#'>
            //                                 <div>
            //                                 <PermIdentity style={iconcolor}/>
            //                                 </div>
            //                             </Link>
            //                         </div>
            //                     </NavLink>
            //                 </NavItem>
            //             </Nav>
            //         </Collapse>
            //     </Navbar>

        );
    }
}
const mapStateToProps = ({ settings }) => {
    const {
        drawerType,
        locale,
        navigationStyle,
        horizontalNavPosition
    } = settings
    return { drawerType, locale, navigationStyle, horizontalNavPosition }
}
export default withRouter(
    connect(mapStateToProps, { toggleCollapsedNav })(Header)
)