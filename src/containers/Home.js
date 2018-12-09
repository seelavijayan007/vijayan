import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Header from "./Header";
import { Link } from "react-router-dom";
import {
    Card,
} from "reactstrap";
import { Container, Row, Col } from 'reactstrap';

//styles
const scroll = {
    overflowX: "hidden",
    overflowY: "auto"
};
const bg = {
    width: "100%",
    position: "relative"
}
const b1 = {
    position: "absolute",
    width: "90%",
    marginTop: "-845px",
    marginLeft: "60px"
}
const card1bg = {
    backgroundColor: "#3a4950",
    opacity: "0.50",
    position: "absolute",
    marginTop: "-210px",
    height: "150px",
    width: "600px",
    marginLeft: "100px"
}
const card2bg = {
    backgroundColor: "#3a4950",
    opacity: "0.50",
    position: "absolute",
    marginTop: "-210px",
    height: "150px",
    width: "560px",
    marginLeft: "415px"
}
const textcolor = {
    color: "#89e5f0",
    fontSize: "4em",
    marginTop: "40px"
}
const eta = {
    color: "#6f7072",
    fontSize: "2em",
    marginTop: "-15px"
}

class Home extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <Container fluid style={scroll}>
            <div className="animated slideInUpTiny animation-duration-3">

                <div>
                    <Header />
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                        <div >
                            <img src="/img/bg1.png" alt="bg" img-responsive style={bg} />
                        </div>
                        <div >
                            <img src="/img/b2.png" alt="b1" img-responsive style={b1} />
                        </div>
                        <div className='row'>
                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 col-12">
                                <Link to="/order">
                                    <Card style={card1bg}>
                                        <h1 className="text-center" style={textcolor}><b>ORDER</b></h1>
                                    </Card>
                                </Link>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 col-12">
                                <Link to="/delivery">
                                    <Card style={card2bg}>
                                        <h1 className="text-center" style={textcolor}><b>DELIVERY</b></h1>
                                        <h3 className="text-center" style={eta}><b>ETA 10:00AM</b></h3>
                                    </Card>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Container>

        );
    }
}
export default Home;