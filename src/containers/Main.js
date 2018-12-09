import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Container } from 'reactstrap';
import Header from "./Header";
import {
    Card,
    Button
  } from "reactstrap";


//styles
const scroll = {
    overflowX: "hidden",
    overflowY: "auto",
    backgroundColor: "#272c2f"
}
const card = {
    backgroundColor: "#FFF",
    height: "150px"
}
const text = {
    color: "#707175",
    marginTop: "40px"
}
const cardimg = {
    width: "100%"
}

class Main extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return(
            <div className="animated slideInUpTiny animation-duration-3" style={scroll}>
                <div className="row" style={scroll}>
                    <div>
                        <Header />
                    </div>
                    <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 col-12 mt-4">
                                <Link to ="/interface1">
                                    <Card  style={card}>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
                                                <img src='img/newlogo.png' alt="cardlogo" style={cardimg} />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12 mt-4">
                                                <h2 className="text-center" style={text}>
                                                    <b>Interface 1</b>
                                                </h2>
                                            </div>
                                        </div>
                                    </Card>
                                </Link>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 col-12 mt-4">
                                <Link to = "/interface2">
                                    <Card  style={card}>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
                                                <img src='img/newlogo.png' alt="cardlogo" style={cardimg} />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12 mt-4">
                                                <h2 className="text-center" style={text}>
                                                    <b>Interface 2</b>
                                                </h2>
                                            </div>
                                        </div>
                                    </Card>
                                </Link>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 co-12 mt-4">
                                <Link to = "/interface3">
                                    <Card  style={card}>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
                                                <img src='img/newlogo.png' alt="cardlogo" style={cardimg} />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12 mt-4">
                                                <h2 className="text-center" style={text}>
                                                    <b>Interface 3</b>
                                                </h2>
                                            </div>
                                        </div>
                                    </Card>
                                </Link>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 co-12 mt-4">
                                <Link to = "/interface4">
                                    <Card  style={card}>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
                                                <img src='img/newlogo.png' alt="cardlogo" style={cardimg} />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12 mt-4">
                                                <h2 className="text-center" style={text}>
                                                    <b>Interface 4</b>
                                                </h2>
                                            </div>
                                        </div>
                                    </Card>
                                </Link>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 co-12 mt-4">
                                <Link to = "/interface5">
                                    <Card  style={card}>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
                                                <img src='img/newlogo.png' alt="cardlogo" style={cardimg} />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12 mt-4">
                                                <h2 className="text-center" style={text}>
                                                    <b>Interface 5</b>
                                                </h2>
                                            </div>
                                        </div>
                                    </Card>
                                </Link>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 co-12 mt-4">
                                <Link to = "/interface6">
                                    <Card  style={card}>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
                                                <img src='img/newlogo.png' alt="cardlogo" style={cardimg} />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12 mt-4">
                                                <h2 className="text-center" style={text}>
                                                    <b>Interface 6</b>
                                                </h2>
                                            </div>
                                        </div>
                                    </Card>
                                </Link>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
            </div>

        );
    }
}
export default withStyles(null, { withTheme: true })(Main);
