import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from "react-router-dom";
import { Container } from 'reactstrap';
import Header from "./Header";

import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardSubtitle,
    CardText,
    CardImg
} from "reactstrap";
import IntlMessages from "util/IntlMessages";
import SearchBox from 'components/SearchBox';
import {
    BELOW_THE_HEADER,
    COLLAPSED_DRAWER,
    FIXED_DRAWER,
    HORIZONTAL_NAVIGATION,
    INSIDE_THE_HEADER
} from 'constants/ActionTypes';
import Menu from 'components/TopNav/Menu';
import {
    Mic,
    PermScanWifi,
    RssFeed,
    LocationOn,
    AddAlert,
    Settings,
    Contacts,
    QuestionAnswer,
    Receipt,

    


} from '@material-ui/icons'
import { Button } from "reactstrap";
import LinearProgress from '@material-ui/core/LinearProgress';

import { DirectionsRenderer, GoogleMap, withGoogleMap } from "react-google-maps";
const google = window.google;
const DirectionsExampleGoogleMap = withGoogleMap(props => (
    <GoogleMap
        defaultZoom={7}
        defaultCenter={props.center}
    >
        {props.directions && <DirectionsRenderer directions={props.directions} />}
    </GoogleMap>
));


//styles
const scroll = {
    overflowX: "hidden",
    overflowY: "auto"
};
const logo = {
    width: "35%"
};
const img1 = {
    width: "450px"
};
const b3 = {
    width: "50%",
    marginLeft: "40px",
    marginTop: "-25px"
};
const iconcolor = {
    color: "#6ed8e8",
    fontSize: "2em"
}
const progress = {
    height: "25px",
    color: "#6ed8e8"
}

const btncolor = {
    color: "#6ed8e8",
    borderColor: "#6ed8e8"
}
const map ={
    height: "450px"
}
const applogo = {
    width: "9%",
    marginLeft: "300px"
}
const appbarcolor = {
    backgroundColor: "#FFF"
}
const mic = {
    color: "#6ed8e8",
    fontSize: "2em",
    position: "absolute",
    marginLeft: "-50px",
    marginTop: "-14px"
}
const search = {
    backgroundColor: "#FFF",
    width: "350px",
    border: "1px solid #6ed8e8",
    position: "relative"
}
const eta = {
    float: "right"
}

//progress bar
const styles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    eta: {
        float: "right"
    }
});

class Interface1 extends Component {
    onSearchBoxSelect = () => {
        this.setState({
            searchBox: !this.state.searchBox
        })
    };

    constructor() {
        super();
        // state = {
        //     completed: 0,
        // };  
        this.state = {
            origin: new google.maps.LatLng(41.8507300, -87.6512600),
            destination: new google.maps.LatLng(41.8525800, -87.6514100),
            directions: null,

            completed: 0,
            buffer: 10,

        };

    }
    updateSearchText(evt) {
        this.setState({
            searchText: evt.target.value,
        });
    }

    componentDidMount() {
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

        //progressbar
        this.timer = setInterval(this.progress, 500);

    }

    //progressbar
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    //progresbar      
    progress = () => {
        const { completed } = this.state;
        if (completed > 100) {
            this.setState({ completed: 0, buffer: 10 });
        } else {
            const diff = Math.random() * 10;
            const diff2 = Math.random() * 10;
            this.setState({ completed: completed + diff, buffer: completed + diff + diff2 });
        }
    };


    render() {
        const { drawerType, locale, navigationStyle, horizontalNavPosition } = this.props;

        //progressbar
        const { classes } = this.props;
        const { completed, buffer } = this.state;

        return (
            <div className="animated slideInUpTiny animation-duration-3" style={scroll}>
                <div className="row" style={scroll}>
                    <div>
                        <Header />
                    </div>                   
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div>
                            <Card className="`shadow border-0`">                            
                                <CardBody>
                                    <div className="row">
                                        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 col-12">
                                            <DirectionsExampleGoogleMap
                                                containerElement={
                                                    <div className="embed-responsive embed-responsive-21by9"  style={map}/>
                                                }
                                                mapElement={<div className="embed-responsive-item" />}
                                                center={this.state.origin}
                                                directions={this.state.directions}
                                            />
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12">
                                            <div className="col-lg-12 co-md-12 col-sm-12 col-xs-12 col-12">
                                                <img src="/img/view1 copy.png" alt="jambo" title="jambo" img-responsive style={img1} />
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                                                <img src="/img/view2.png" alt="jambo" title="jambo" img-responsive style={img1} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 mt-4">
                                            <h4 className={classes.eta}><b>ETA 10.00 AM</b></h4>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                                            <LinearProgress variant="buffer" value={completed} valueBuffer={buffer} style={progress} />
                                            {/* <LocationOn style={iconcolor} /> */}

                                            <p className="mt-1 mb-4"><b>9:00 AM</b></p>

                                        </div>
                                    </div>
                                    <div className="row ">
                                        <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 col-12">
                                            <Button variant="raised" className="jr-btn jr-btn-lg bg-white  btn-block" style={btncolor}>5 M/H</Button>
                                        </div>
                                        <div className="col-lg-1 col-md-1 col-sm-12 co-xs-12 col-12">
                                            <span className="d-flex align-items-center mb-2">
                                                <LocationOn style={iconcolor} />
                                            </span>
                                            <p className=" mt-1 mb-4">Location</p>
                                        </div>
                                        <div className="col-lg-1 col-md-1 col-sm-12 col-xs-12 col-12">
                                            <span className="d-flex align-items-center mb-2">
                                                <AddAlert style={iconcolor} />
                                            </span>
                                            <p className="mt-1 mb-4">Notifications</p>
                                        </div>
                                        <div className="col-lg-1 col-md-1 col-sm-12 col-xs-12 col-12">
                                            <span className="d-flex align-items-center mb-2">
                                                <Settings style={iconcolor} />
                                            </span>
                                            <p className="mt-1 mb-4">Settings</p>
                                        </div>
                                        <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 col-12">
                                            <Link className="logo-lg" to="/" title="Jambo">
                                                <img src="/img/newlogo.png" alt="jambo" title="jambo" img-responsive style={b3} />
                                            </Link>
                                        </div>
                                        <div className="col-lg-1 col-md-1 col-sm-12 col-xs-12 col-12">
                                            <span className="d-flex align-items-center mb-2">
                                                <Contacts style={iconcolor} />
                                            </span>
                                            <p className="mt-1 mb-4">Contacts</p>
                                        </div>
                                        <div className="col-lg-1 col-md-1 col-sm-12 col-xs-12 col-12">
                                            <span className="d-flex align-items-center mb-2">
                                                <QuestionAnswer style={iconcolor} />
                                            </span>
                                            <p className="mt-1 mb-4">Chat</p>
                                        </div>
                                        <div className="col-lg-1 col-md-1 col-sm-12 col-xs-12 col-12">
                                            <span className="d-flex align-items-center mb-2">
                                                <Receipt style={iconcolor} />
                                            </span> 
                                            <p className="mt-1 mb-4">Docks</p>
                                        </div>
                                        <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 col-12">
                                            <Button variant="raised" className="jr-btn jr-btn-lg bg-white  btn-block" style={btncolor}>View</Button>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default withStyles(styles, { withTheme: true })(Interface1);
