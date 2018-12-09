import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Switch from '@material-ui/core/Switch';
import IconButton from '@material-ui/core/IconButton';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import SideNavOption from './SideNavOption';
import {changeDirection, setDarkTheme, setThemeColor} from 'actions/index';
import {
    AMBER,
    BLUE,
    CYAN,
    DARK_AMBER,
    DARK_BLUE,
    DARK_CYAN,
    DARK_DEEP_ORANGE,
    DARK_DEEP_PURPLE,
    DARK_GREEN,
    DARK_INDIGO,
    DARK_PINK,
    DEEP_ORANGE,
    DEEP_PURPLE,
    GREEN,
    INDIGO,
    PINK
} from 'constants/ThemeColors';

class ColorOption extends React.Component {

    toggleCustomizer = () => {
        this.setState({drawerStatus: !this.state.drawerStatus});
    };
    closeCustomizer = () => {
        this.setState({drawerStatus: false});
    };
    handleThemeColor = (colorCode) => {
        this.props.setThemeColor(colorCode);
        const body = document.body.classList;
        body.remove(this.props.themeColor);
        body.remove('dark-theme');
        body.add(colorCode);
    };
    handleDarkTheme = () => {
        this.props.setDarkTheme();
        const body = document.body.classList;
        body.toggle(this.props.themeColor);
        body.toggle('dark-theme');
    };

    constructor() {
        super();
        this.state = {drawerStatus: false}
    }

    componentDidMount() {
        document.body.classList.add(this.props.themeColor);
    }

    render() {
        const {themeColor, darkTheme, isDirectionRTL} = this.props;
        return (

            <div className="theme-option">
                <IconButton onClick={this.toggleCustomizer.bind(this)}>
                    <i className="zmdi zmdi-settings zmdi-hc-spin text-white"/>
                </IconButton>
                <Drawer className="app-sidebar-content right-sidebar"

                        anchor="right"
                        open={this.state.drawerStatus}
                        onClose={this.closeCustomizer.bind(this)}>
                    <div className="color-theme">
                        <div className="color-theme-header">
                            <h3 className="color-theme-title">Service Panel </h3>

                            <IconButton className="size-30" onClick={this.closeCustomizer}>
                                <i className="zmdi zmdi-close text-white"/>
                            </IconButton>
                        </div>
                        <div className="color-theme-body">
                            <h3>Light Sidenav</h3>
                            <ul className="color-option">
                                <li><a href="javascript:void(0)"
                                       onClick={this.handleThemeColor.bind(this, INDIGO)}
                                       className={`bg-indigo ${themeColor === INDIGO && 'active'}`}/>
                                </li>
                                <li><a href="javascript:void(0)"
                                       onClick={this.handleThemeColor.bind(this, CYAN)}
                                       className={`bg-cyan ${themeColor === CYAN && 'active'}`}/>
                                </li>
                                <li><a href="javascript:void(0)"
                                       onClick={this.handleThemeColor.bind(this, AMBER)}
                                       className={`bg-amber ${themeColor === AMBER && 'active'}`}/>
                                </li>
                                <li><a href="javascript:void(0)"
                                       onClick={this.handleThemeColor.bind(this, DEEP_ORANGE)}
                                       className={`bg-deep-orange ${themeColor === DEEP_ORANGE && 'active'}`}/>
                                </li>

                                <li><a href="javascript:void(0)"
                                       onClick={this.handleThemeColor.bind(this, PINK)}
                                       className={`bg-pink ${themeColor === PINK && 'active'}`}/>
                                </li>
                                <li><a href="javascript:void(0)"
                                       onClick={this.handleThemeColor.bind(this, BLUE)}
                                       className={`bg-blue ${themeColor === BLUE && 'active'}`}/>
                                </li>
                                <li><a href="javascript:void(0)"
                                       onClick={this.handleThemeColor.bind(this, DEEP_PURPLE)}
                                       className={`bg-deep-purple ${themeColor === DEEP_PURPLE && 'active'}`}/>
                                </li>
                                <li><a href="javascript:void(0)"
                                       onClick={this.handleThemeColor.bind(this, GREEN)}
                                       className={`bg-green ${themeColor === GREEN && 'active'}`}/>
                                </li>
                            </ul>
                            <h3>Dark Sidenav</h3>
                            <ul className="color-option cr-op-dark-sidebar">
                                <li><a href="javascript:void(0)"
                                       onClick={this.handleThemeColor.bind(this, DARK_INDIGO)}
                                       className={`bg-indigo ${themeColor === DARK_INDIGO && 'active'}`}/>
                                </li>
                                <li><a href="javascript:void(0)"
                                       onClick={this.handleThemeColor.bind(this, DARK_CYAN)}
                                       className={`bg-cyan ${themeColor === DARK_CYAN && 'active'}`}/>
                                </li>
                                <li><a href="javascript:void(0)"
                                       onClick={this.handleThemeColor.bind(this, DARK_AMBER)}
                                       className={`bg-amber ${themeColor === DARK_AMBER && 'active'}`}/>
                                </li>
                                <li><a href="javascript:void(0)"
                                       onClick={this.handleThemeColor.bind(this, DARK_DEEP_ORANGE)}
                                       className={`bg-deep-orange ${themeColor === DARK_DEEP_ORANGE && 'active'}`}/>
                                </li>

                                <li><a href="javascript:void(0)"
                                       onClick={this.handleThemeColor.bind(this, DARK_PINK)}
                                       className={`bg-pink ${themeColor === DARK_PINK && 'active'}`}/>
                                </li>
                                <li><a href="javascript:void(0)"
                                       onClick={this.handleThemeColor.bind(this, DARK_BLUE)}
                                       className={`bg-blue ${themeColor === DARK_BLUE && 'active'}`}/>
                                </li>
                                <li><a href="javascript:void(0)"
                                       onClick={this.handleThemeColor.bind(this, DARK_DEEP_PURPLE)}
                                       className={`bg-deep-purple ${themeColor === DARK_DEEP_PURPLE && 'active'}`}/>
                                </li>
                                <li><a href="javascript:void(0)"
                                       onClick={this.handleThemeColor.bind(this, DARK_GREEN)}
                                       className={`bg-green ${themeColor === DARK_GREEN && 'active'}`}/>
                                </li>
                            </ul>
                            <div className="row text-left">
                                <div className="col-6">
                                    <h3 className="mb-1">RTL</h3>
                                    <Switch color="primary"
                                            checked={isDirectionRTL}
                                            onChange={this.props.changeDirection}
                                    />
                                </div>
                                <div className="col-6">
                                    <h3 className="mb-1">Dark Theme</h3>
                                    <Switch color="primary"
                                            checked={darkTheme}
                                            onChange={this.handleDarkTheme}
                                    />
                                </div>
                            </div>
                            <div className="mt-3">
                                <SideNavOption closeCustomizer={this.closeCustomizer}/>
                            </div>
                        </div>
                    </div>

                </Drawer>
            </div>
        );
    }
}

const mapStateToProps = ({settings}) => {
    const {themeColor, darkTheme, isDirectionRTL} = settings;
    return {themeColor, darkTheme, isDirectionRTL}
};

export default withRouter(connect(mapStateToProps, {setThemeColor, setDarkTheme, changeDirection})(ColorOption));

