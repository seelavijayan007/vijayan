import React, { Component, Fragment } from 'react';
import { withStyles, MuiThemeProvider,
    createMuiTheme } from "@material-ui/core/styles";
import Header from "./Header";
import Slider from "react-slick";
import Button from '@material-ui/core/Button';
import green from "@material-ui/core/colors/green"; 
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import purple from "@material-ui/core/colors/purple";
import Truncate from 'react-truncate';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import classNames from "classnames";
import Bot from './Bot';
import {
    Card
} from 'reactstrap';

//styles

const theme = createMuiTheme({
    palette: {
      primary: green
    },
    typography: {
      useNextVariants: true
    }
  });
const styless = theme => ({
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    margin: {
      margin: theme.spacing.unit
    },
    cssRoot: {
      color: "#fff",
      backgroundColor: purple[500],
      "&:hover": {
        backgroundColor: purple[700]
      }
    },
    bootstrapRoot: {
      boxShadow: "none",
      textTransform: "none",
      fontSize: 16,
      padding: "6px 12px",
      border: "1px solid",
      backgroundColor: "#000",
      borderColor: "#007bff",
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(","),
      "&:hover": {
        backgroundColor: "#0069d9",
        borderColor: "#0062cc"
      },
      "&:active": {
        boxShadow: "none",
        backgroundColor: "#0062cc",
        borderColor: "#005cbf"
      },
      "&:focus": {
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)"
      }
    }
  });

const scroll = {
    overflowX: "hidden",
    overflowY: "auto"
}
const bgimg = {
    width: "100%",
    position: "relative"
}
const menuimg = {
    width: "125px",
    position: "relative",
    border:'2px solid #fff'
}
const itemimg = {
    width: "300px",
    position: "relative"
}
const cslider = {
    // position: "absolute",
    marginTop: "-35px",
    // marginLeft: "250px",
    width: "100%",
    backgroundColor: "#152d3e",
    // opacity: "0.50"
}
//progress bar

const progress = {
    height: "25px",
    color: "#6ed8e8",
    marginTop: "-220px"
}
const progressml = {
    // marginLeft: "200px"
    marginLeft: "100px"

}
const progresstime1 = {
    // color: "#5a5a5b",
    color: "#6f7072",
    marginTop: "-220px",
    // float: "Right"
    marginLeft: "80px"

}
const progresstime = {
    // color: "#5a5a5b",
    color: "#6f7072",
    marginTop: "-220px",
}
const sliderimg1 = {
    width: "350px",
    height: "200px",
    marginTop: "25px",
    marginLeft: "80px"
}
const sliderimg2 = {
    width: "350px",
    height: "200px",
    marginTop: "25px",
    marginLeft: "40px"
}
const sliderimg = {
    width: "350px",
    height: "200px",
    marginTop: "25px"
}
//chat
const chatbot = {
    position: "absolute",
    width: "100%",
    marginTop: "-855px"
}
const chatboxheight = {
    // height: "620px"
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

//SHAKE SHACK DATA
const ShakeShack = [{
    Category:"Burgers",
    Items:[{
        imgURL:"/img/shake-stack.jpg",
        name:"ShackBurger®",
        Description:"Single or Double Cheeseburger topped with lettuce, tomato, ShackSauce™."
    },{
        imgURL:"/img/shake2.jpg",
        name:"Hamburger",
        Description:"Single or Double Choice of lettuce, tomato, pickle or onion. Add cheese or all-natural applewood smoked bacon."
    },{
        imgURL:"/img/shake3.jpg",
        name:"Shack Stack®",
        Description:"Cheeseburger and a ’Shroom Burger topped with lettuce, tomato, ShackSauce™."
    }]
},{
    Category:"Chicken",
    Items:[{
        imgURL:"/img/shackChick.png",
        name:"Chick'n Shack",
        Description:"Crispy chicken breast with lettuce, pickles and buttermilk herb mayo."
    }]
},{
    Category:"Fries",
    Items:[{
        imgURL:"/img/shakeFries.jpg",
        name:"Cheese Fries",
        Description:"Topped with our special blend of cheddar and American cheese sauce. Warning: They’re highly addictive."
    }]
}];
//Roasting Plant data
const RoastingPlant = [{
    Category:"Coffee",
    Items:[{
        imgURL:"/img/Roast1.jpg",
        name:"ABC Blend",
        Description:"Our ABC blend is going to be your favorite back to school fuel."
    },{
        imgURL:"/img/Roast2.jpg",
        name:"God Cheer Blend",
        Description:"The ultimate holiday coffee to jumpstart you right into the holiday season!"
    },{
        imgURL:"/img/Roast3.jpg",
        name:"Roasting Plant Blend",
        Description:"We put our own name on this deep, satisfying blend because it represents the core qualities of Roasting Plant coffee: Fresh beans, a precision roast, heady aroma, and crave-worthy flavor."
    },{
        imgURL:"/img/Roast4.jpg",
        name:"Roasting Plant Espresso Blend",
        Description:"A striking union between the Brazil Serra Negra and Roasting Plant’s flagship blend."
    }]
},{
    Category:"Holiday Gift Boxes",
    Items:[{
        imgURL:"/img/Roast11.jpg",
        name:"Premium Box",
        Description:"Filled with Roasting Plant Classic, our Premium box is a perfect gift for friends, family or co-workers!"
    },{
        imgURL:"/img/Roast12.jpg",
        name:"Select Box",
        Description:"Crispy chicken breast with lettuce, pickles and buttermilk herb mayo.An assortment of handpicked beans from all over the world, this Select Box will upgrade the coffee tasting experience."
    },{
        imgURL:"/img/Roast13.jpg",
        name:"Reserve Box",
        Description:"Give the gift of the most ambitious coffee tasting experience this year.  This collection represents the peak of the worlds most rare artisan coffees."
    }]
},{
    Category:"Merchandise",
    Items:[{
        imgURL:"/img/Roast21.jpg",
        name:"Roasting Plant T-Shirt",
        Description:"Our current Roasting Plant Coffee t-shirts are here to help you show off your favorite just roasted coffee."
    },{
        imgURL:"/img/Roast22.jpg",
        name:"Roasting Plant Coffee Mug",
        Description:"Get ready to sip in style with our heavy-weight 16oz mug. "
    },{
        imgURL:"/img/Roast23.jpg",
        name:"Roasting Plant Adjustable Hat",
        Description:"Adjustable hat embroidered with the Roasting Plant Coffee logo. One size fits all. Available in off-white or dark blue."
    }]
}];

//Plum market Data
const PlumMarket = [{
    Category:"Holiday Dinner Packages",
    Items:[{
        imgURL:"/img/Plum1.jpg",
        name:"Holiday Dinner Package",
        Description:"Includes : All Natural Roasted Boneless Turkey Breast with Gravy, Housemade Cranberry Sauce, Choice of 3 additional Holiday Side Dishes"
    },{
        imgURL:"/img/Plum2.jpg",
        name:"Mini Holiday Package",
        Description:"Includes: All Natural Roasted Turkey Breast with Gravy, Choice of Italian Sausage & Chestnut or Traditional Vegetarian Herbed Bread Stuffing, Crème Fraîche Mashed Potatoes, Green Beans Almondine, Housemade Cranberry Sauce"
    },{
        imgURL:"/img/Plum3.jpg",
        name:"Spiral Ham Dinner Package",
        Description:"Includes: Sliced Ham, Selection of 3 Holiday Side Dishes"
    }]
},{
    Category:"BakeHouse",
    Items:[{
        imgURL:"/img/Plum11.jpg",
        name:"Patisserie Parmentier Yule Logs",
        Description:"Flavors : Vanilla and Chocolate."
    },{
        imgURL:"/img/Plum12.jpg",
        name:"Ethel's 3 Pack Gluten Free Dandies",
        Description:"Flavors : Turtle Dandies, Raspberry Dandies, Pecan Dandies, Brownies and Blondies."
    },{
        imgURL:"/img/Plum13.jpg",
        name:"Zingerman's Bakehouse Coffeecakes",
        Description:"Sour Cream | Lemon Poppyseed | Hot Cocoa | Tea Cake | Gingerbread"
    }]
},{
    Category:"Platters And Boards",
    Items:[{
        imgURL:"/img/Plum21.jpg",
        name:"Mediterranean Dip Display",
        Description:"Tabouli, Hummus, Tzatziki, Vegetarian Grape Leaves, Caprese Skewers, with Olives and Mini Pita Bread"
    },{
        imgURL:"/img/Plum22.jpg",
        name:"All Natural Grilled Chicken Platter",
        Description:"Marinated and grilled to perfection, served with Mini Pretzel Rolls and our Housemade Tzatziki and Basil Aioli"
    },{
        imgURL:"/img/Plum23.jpg",
        name:"International Artisan Cheese Board",
        Description:"The best cheeses from abroad! Includes Cotswold, 6 month aged Manchego, Brie, Chevre, and Cheddar, served with Dried Fruits, Nuts, Crackers, and sliced Baguette."
    }]
}];
const Menu = (props) => {
    const { expanded, classes } = props;
   
    return (
        <div>
            <div><h1 style={{paddingTop: 15,textAlign: "center",color: "#6ed7e8"}}>Menu List</h1></div>
            {
                props.data.map((item, i) => {
                    let Itemss = item.Items;
                    return (
                        <ExpansionPanel expanded={expanded === (i + 1)} onChange={props.handleChange(i + 1)} style={{margin: 10}}>
                            <ExpansionPanelSummary style={{background: '#1f2528'}}expandIcon={<ExpandMoreIcon style={{color:"#6ad7e8"}} />}>
                                <Typography style={{color:"#6ad7e8"}} className={classes.heading}>{item.Category}</Typography>
                                <Typography className={classes.secondaryHeading}></Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails style={{background:'#14191c',paddingBottom: 0}}>
                                <div className="row">
                                    {   
                                        
                                        Itemss.map((row, j) => {
                                            return (
                                                <div className="row col-12" onClick={() => props.onItemClick(row)} style={{ padding: 10, cursor: "pointer", borderBottom: "1px solid #ccc" }}>
                                                    <div className="col-4">
                                                        <img src={row.imgURL} alt="category" img-responsive style={menuimg} />
                                                    </div>
                                                    <div className="col-8">
                                                        <Typography style={{color:'#fff'}}>
                                                        <div><h4 style={{textAlign: "center",color: "#6ed7e8"}}>{row.name}</h4></div>
                                                        <Truncate lines={3} ellipsis={<span style={{color:"aqua"}}>.. <a onClick={()=>{
                                                            props.that.setState({check:1})}}>Read more</a></span>}>
                                                            {row.Description}
                                                        </Truncate>
                                                        </Typography>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            </ExpansionPanelDetails>

                        </ExpansionPanel>
                    )
                })
            }


        </div>
    );

}
class Order extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            completed: 0,
            activeIndex: 0,
            shop: 1,
            data:ShakeShack,
            expanded: false,
            item: {},
            check: false
        }
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }


    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    next(slider) {
        this[slider].slickNext();
    }
    previous(slider) {
        this[slider].slickPrev();
    }


    componentDidMount() {
        //progressbar
        this.timer = setInterval(this.progress, 500);
    }
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
    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };
    onButtonSelect = (val) => {
        if(val==1){
            this.setState({shop: val,data:ShakeShack});
        }
        else if(val==2){
            this.setState({shop: val,data:RoastingPlant});
        }
        else{
            this.setState({shop:val,data:PlumMarket});
        }
        
    }
    render() {
        //progressbar
        const { classes } = this.props;
        const { completed } = this.state;
        //react-slick
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            prev: true,
            next: true,
            arrows: true
        };



        return (
            <div className="animated slideInUpTiny animation-duration-3" style={scroll}>
                <Header />
                <div className="row" style={{ background:"#0a0f12",minHeight: 500 }}>
                    {
                        this.state.check ?
                            <Fragment>
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12">
                                <div><h1 style={{paddingTop: 15,textAlign: "center",color: "#6ed7e8"}}>Item Details</h1></div>
                                    <div className="row" style={{background: '#14191c',height:495,paddingTop: 35}}>
                                   
                                        <div className="col-12" >
                                        <div><h2 style={{textAlign: "center",color: "#fff"}}>Item Details</h2></div>
                                            <img src={"/img/shake-stack.jpg"} alt="category" img-responsive style={{width: "300px", margin: "auto", display: "block"}}/>
                                            <div style={{color:"#fff",padding:"0px 90px"}}>
                                            <br/>
                                                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                                                maximus est, id dignissim quam.
                                            </div>
                                            <div className="col-12" >
                                                <span className="col-3">
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    className={classNames(classes.margin, classes.cssRoot)}>
                                                    Add
                                                </Button>
                                                </span>
                                                <span className="col-3">
                                                <MuiThemeProvider theme={theme}>
                                                    <Button variant="contained" color="primary" className={classes.margin}>
                                                    MuiThemeProvider
                                                    </Button>
                                                </MuiThemeProvider>
     

                                                </span>
                                                <span className="col-3">
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    disableRipple
                                                    className={classNames(classes.margin, classes.bootstrapRoot)}
                                                >
                                                    Bootstrap
                                                </Button>
                                                </span>
                                            </div>
                                            
                                        </div>
                                        <div className="col-12" style={{}}>
                                        
                                          
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12">
                                    <div className="row">
                                        <Menu onItemClick={(data) => {
                                            this.setState({
                                                item: data,
                                                check: !this.state.check
                                            })
                                        }} that={this} data={this.state.data} handleChange={this.handleChange} expanded={this.state.expanded} classes={classes} />
                                    </div>
                                </div>
                            </Fragment> :
                            <Fragment>
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12" style={{ overflow: "hidden" }}>
                                    <div className="row">
                                        <img src={"/img/default" + this.state.shop + ".png"} alt="map" img-responsive style={bgimg} />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12">
                                    <div className="row">
                                        <Menu onItemClick={(data) => {
                                            console.log(data); this.setState({
                                                item: data,
                                                check: !this.state.check
                                            })
                                        }} that={this} data={this.state.data} handleChange={this.handleChange} expanded={this.state.expanded} classes={classes} />
                                    </div>
                                </div>
                            </Fragment>
                    }
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12">
                        <div className="row">
                            <Bot buttonSelect={this.onButtonSelect} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <Card style={cslider}>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                            <Slider ref={c => (this["slider1"] = c)} {...settings}>
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12" onClick={() => { this.setState({ shop: 1,data:ShakeShack }) }}>
                                    <img src="/img/slider1.png" style={sliderimg1} />
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12" onClick={() => { this.setState({ shop: 2,data:RoastingPlant }) }}>
                                    <img src="/img/slider2.jpg" style={sliderimg2} />
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12" onClick={() => { this.setState({ shop: 3,data:PlumMarket }) }}>
                                    <img src="/img/slider3.jpg" style={sliderimg} />
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12" onClick={() => { this.setState({ shop: 1,data:ShakeShack }) }}>
                                    <img src="/img/slider1.png" style={sliderimg1} />
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12" onClick={() => { this.setState({ shop: 2,data:RoastingPlant }) }}>
                                    <img src="/img/slider2.jpg" style={sliderimg2} />
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12" onClick={() => { this.setState({ shop: 3,data:PlumMarket }) }}>
                                    <img src="/img/slider3.jpg" style={sliderimg} />
                                </div>
                            </Slider>
                            <Button variant="raised" color="primary" className="jr-btn text-white float-right" style={{ marginTop: "-130px" }}
                                onClick={() => this.next("slider1")} aria-hidden="true">Next</Button>
                            <Button variant="raised" color="primary" className="jr-btn text-white float-left" style={{ marginTop: "-130px" }}
                                onClick={() => this.previous("slider1")} aria-hidden="true">Prev</Button>
                        </div>
                    </Card>
                </div>

            </div>

        );
    }
}
export default withStyles(styles,styless, { withTheme: true })(Order);