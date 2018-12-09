import React, { Component, Fragment } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Header from "./Header";
import {Card } from 'reactstrap';
import Bot from './Bot';

//styles
const scroll = {
    overflowX: "hidden",
    overflowY: "auto"
}

const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
});


class Delivery extends Component {   

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }            
    }   
    

    render() {      
        return (
            <div className="animated slideInUpTiny animation-duration-3" style={scroll}>
                <Header />
                <div className="row" style={{minHeight: 500}}>                                       
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12" style={{overflow: "hidden"}}>
                        <div className="row">
                            <div className="col-4 text-center p-0">
                                <Card style={{ margin: 0, background: "#1C1E21",height: 100,padding: 20,color: "#3edaeb"}}>test1</Card>
                            </div>
                            <div className="col-4 text-center p-0">
                                <Card style={{ margin: 0, background: "#1C1E21",height: 100,padding: 20,color: "#3edaeb"}}>test2</Card>
                            </div>
                            <div className="col-4 text-center p-0">
                                <Card style={{ margin: 0, background: "#1C1E21",height: 100,padding: 20,color: "#3edaeb"}}>test3</Card>
                            </div>
                        </div>
                        <div className="row">
                            <img src="/img/bedestrian.png" alt="bedestrian" img-responsive style={{height: 450}}/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
                        <div className="row">
                            <Bot />
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default withStyles(styles, { withTheme: true })(Delivery);