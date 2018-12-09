import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchBox from 'components/SearchBox';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Container } from 'reactstrap';
import Avatar from '@material-ui/core/Avatar';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import {DirectionsRenderer, GoogleMap, withGoogleMap} from "react-google-maps";
import Header from "./Header";


import {
    PermScanWifi,
    RssFeed,
    StayPrimaryLandscape,
    Search,
    PermIdentity,

} from '@material-ui/icons'


//styles
const scroll = {
    overflowX: "hidden",
    overflowY: "auto"
}
const iconcolor = {
    color: "#6ed8e8" 
};

const bgimg = {
    width: "1530px",
    position: "relative"
}
const time = {
    color: "#727272",
    fontSize: "2em"
}
const rss = {
    color: "#727272",
    fontSize: "2em"
}
const wifi = {
    color: "#727272",
    fontSize: "2em"
}
const mob = {
    color: "#727272",
    fontSize: "2em"
}

const search = {
    color: "#727272",
    fontSize: "2em"
}
const identity = {
    color: "#727272",
    fontSize: "2em"
}
const applogo = {
    width: "9%",
    marginLeft: "485px"
}
const appbarcolor = {
    backgroundColor: "#0b0f11"
}

const title = {
    color: "#5a5a5b",
    // color: "#FFF",
    position: "absolute",
    // marginTop: "-790px",
    marginTop: "-645px",
    marginLeft: "730px"
}
//progress bar
const styles = {
    root: {
        flexGrow: 1,
    },
};
const progress = {
    height: "25px",
    color: "#6ed8e8",
    marginTop: "-340px"
}
const progresstime1 = {
    // color: "#5a5a5b",
    color: "#FFF",
    marginTop: "-340px",
    float: "Right"
}
const progresstime = {
    // color: "#5a5a5b",
    color: "#FFF",
    marginTop: "-340px",
}
const img1 = {
    position: "absolute",
    marginTop: "-292px",
    marginLeft: "71px"
}
const img2 = {
    position: "absolute",
    marginTop: "-290px",
    marginLeft: "-23px"
}
const img3 = {
    position: "absolute",
    marginTop: "-290px",
    marginLeft: "-4px"
}
const img4 = {
    position: "absolute",
    marginTop: "-292px"
}

//map
const google = window.google;
const DirectionsExampleGoogleMap = withGoogleMap(props => (
    <GoogleMap
        defaultZoom={7}
        defaultCenter={props.center}
    >
        {props.directions && <DirectionsRenderer directions={props.directions}/>}
    </GoogleMap>
));



class Interface2 extends Component {
    constructor() {
        super();
        this.state = {
            searchBox: false,
            searchText: '',
            completed: 0,
            // buffer: 10,
            origin: new google.maps.LatLng(41.8507300, -87.6512600),
            destination: new google.maps.LatLng(41.8525800, -87.6514100),
            directions: null,
        }
    }

    onSearchBoxSelect = () => {
        this.setState({
            searchBox: !this.state.searchBox
        })
    };
    handleRequestClose = () => {
        this.setState({ mailNotification: false, appNotification: false, searchBox: false });
    };
    updateSearchText(evt) {
        this.setState({
            searchText: evt.target.value,
        });
    }
    componentDidMount() {
        //progressbar
        this.timer = setInterval(this.progress, 500);

        //map
        const DirectionsService = new google.maps.DirectionsService();

        DirectionsService.route({
            origin: this.state.origin,
            destination: this.state.destination,
            travelMode: google.maps.TravelMode.DRIVING,
        }, (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
                this.setState({
                    directions: result,
                });
            } else {
                console.error(`error fetching directions ${result}`);
            }
        });
      }
    //progressbar
    componentWillUnmount() {
        clearInterval(this.timer);
      }
    //progresbar      
    progress = () => {
        const { completed } = this.state;
        if (completed === 100) {
          this.setState({ completed: 0 });
        } else {
          const diff = Math.random() * 10;
          this.setState({ completed: Math.min(completed + diff, 100) });
        }
      };
    render() {
        //progressbar
        const { classes } = this.props;
        const { completed, buffer } = this.state;
        return (
            <div className="animated slideInUpTiny animation-duration-3" style={scroll}>
                <div>
                    <Header />
                </div>
            
                    {/* <AppBar className="app-main-header" position="static" >
                        <Toolbar style={appbarcolor}>
                            <h2 className="mb-0 " style={time}><b>12:30</b></h2>
                            <ul className="header-notifications list-inline d-none d-sm-block">

                                <li className="list-inline-item ml-4">
                                    <RssFeed style={rss} />
                                </li>
                                <li className="list-inline-item ml-2">
                                    <PermScanWifi style={wifi} />
                                </li>
                                <li className="list-inline-item mr-auto ml-2">
                                    <StayPrimaryLandscape style={mob} />
                                </li>
                            </ul>
                            <img src="/img/bdlogo.png" className="mb-0 mr-auto " alt="jambo" title="jambo" style={applogo} />
                            <ul className="header-notifications list-inline ml-3 d-none d-sm-block">

                                <li className="list-inline-item">
                                    <Search style={search} />
                                </li>
                                <li className="list-inline-item">
                                    <PermIdentity style={identity} />
                                </li>

                            </ul>

                            <IconButton className="jr-menu-icon ml-4" aria-label="Menu">
                                <span className="menu-icon" />
                            </IconButton>

                          

                            <div className="d-inline-block d-sm-none list-inline-item">
                                <Dropdown
                                    className="quick-menu nav-searchbox"
                                    isOpen={this.state.searchBox}
                                    toggle={this.onSearchBoxSelect.bind(this)}>

                                    <DropdownToggle
                                        className="d-inline-block"
                                        tag="span"
                                        data-toggle="dropdown">
                                        <IconButton className="icon-btn size-30">
                                            <i className="zmdi zmdi-search zmdi-hc-fw" />
                                        </IconButton>
                                    </DropdownToggle>

                                    <DropdownMenu right className="p-0">
                                        <SearchBox styleName="search-dropdown" placeholder="Search people & places"
                                            onChange={this.updateSearchText.bind(this)}
                                            value={this.state.searchText} />
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                            
                        </Toolbar>
                    </AppBar> */}
                    <div className="row">
                        <img src="/img/nightmap.jpg" alt="map" img-responsive style={bgimg} />
                        {/* <DirectionsExampleGoogleMap
                containerElement={
                    <div className="embed-responsive embed-responsive-21by9"/>
                }
                mapElement={<div className="embed-responsive-item"/>}
                center={this.state.origin}
                directions={this.state.directions}
                style={bgimg}
            /> */}
                        {/* <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                            <h4 style={title}>B E D E S T R I A N</h4>
                        </div> */}
                    </div>
                    <div className="row mt-4">
                        <div className='col-lg-2 col-md-2 col-sm-12 col-xs-12 col-12'>
                            <h2 className="mb-0 " style={progresstime1}><b>9:00AM</b></h2>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 col-12">
                            {/* <LinearProgress variant="buffer" value={completed} valueBuffer={buffer} style={progress} /> */}
                            <LinearProgress variant="determinate" value={this.state.completed} style={progress}/>
                        </div>
                        <div className='col-lg-2 col-md-2 col-sm-12 col-xs-12 col-12'>
                            <h2 className="mb-0 " style={progresstime}><b>ETA 10:00AM</b></h2>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 col-12">
                            <img src="/img/view1.png"   alt="jambo" title="jambo" img-responsive  style={img1} />
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 col-12">
                            <img src="/img/view2.png"   alt="jambo" title="jambo" img-responsive style={img2}  />
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 col-12">
                            <img src="/img/view2.png"   alt="jambo" title="jambo" img-responsive style={img3} />
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 col-12">
                            <img src="/img/view3.png"   alt="jambo" title="jambo" img-responsive style={img4} />
                        </div>
                    </div>
            </div>
        );
    }
}
export default withStyles(null, { withTheme: true })(Interface2);

