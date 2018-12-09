import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Header from "./Header";
import {
    Card,
  } from "reactstrap";
import { Divider } from '@material-ui/core';

//styles
const scroll = {
    overflowX: "hidden",
    overflowY: "auto",
    backgroundColor: "#272c2f"
}
const img = {
    width: "100%"
}
const img1 = {
    width: "240px",
    height: "150px",
    marginTop: "90px"
}
const textcolor = {
    color: "green"
}
const divider = {
    marginTop: "50px"
}
class Interface6 extends Component {
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return(
            <div className="animated slideInUpTiny animation-duration-3" style={scroll}>
                <div>
                    <Header />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                <div className="row">
                    <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 col-12 mt-4">
                        <Card>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 mt-4">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12">
                                        <img src="/img/shake-burger.jpg" alt="burger" img-responsive style={img}/>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12">
                                        <img src="/img/shake-hamburger.jpg" alt="hamburger" img-responsive style={img}/>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12">
                                        <img src="/img/shake-stack.jpg" alt="stack" img-responsive style={img}/>
                                    </div>
                                </div>
                            </div>
                            <Divider style={divider}/>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 mt-4 md-0">
                                <div className="row">
                                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 col-12">
                                         <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                                            <h3 style={textcolor}><b>ShackBurger®</b></h3>
                                            <p>Single or Double Cheeseburger topped with lettuce, tomato, <br /> ShackSauce™ <br />
                                            <b>530 cal/790 cal</b></p>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 mt-4">
                                            <h3 style={textcolor}><b>Hamburger</b></h3>
                                            <p>Single or Double Choice of lettuce, tomato, pickle or onion. Add <br /> cheese or all-natural applewood smoked bacon.  <br />
                                            <b>400 cal/590 cal</b></p>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 mt-4">
                                            <h3 style={textcolor}><b>Shack Stack®</b></h3>
                                            <p>Cheeseburger and a Shroom Burger topped with lettuce, tomato, <br /> ShackSauce™ <br />
                                            <b>800 cal</b></p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12">
                                        <img src="/img/slider1.png" alt="shake-shack" img-responsive style={img1} />
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>


        );
    }
}
export default Interface6;