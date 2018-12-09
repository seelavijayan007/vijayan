import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Header from "./Header";


class RouteMap extends Component {
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return(
            <div className="animated slideInUpTiny animation-duration-3" >
               
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                                    <img src="/img/route.png" classname="img-responsive" alt="route" />
                                </div>
                                
                        </div>
                       
                    </div>
                </div>

        );
    }
    
}
export default RouteMap;