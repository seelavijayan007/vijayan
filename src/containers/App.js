import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/MuiPickersUtilsProvider';
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl'
import 'react-notifications/lib/notifications.css'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'styles/jumbo.css'
import indigoTheme from './themes/indigoTheme';
import cyanTheme from './themes/cyanTheme';
import orangeTheme from './themes/orangeTheme';
import amberTheme from './themes/amberTheme';
import pinkTheme from './themes/pinkTheme';
import blueTheme from './themes/blueTheme';
import purpleTheme from './themes/purpleTheme';
import greenTheme from './themes/greenTheme';
import darkTheme from './themes/darkTheme';
import mojTheme from './themes/mojTheme';
import AppLocale from '../lngProvider';
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
    PINK,
    MOJ
} from 'constants/ThemeColors';

import MainApp from 'app/index';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';
import Order from './Order';
import Delivery from './Delivery';
import Bot from './Bot';
import Main from './Main';
import Interface1 from './Interface1';
import Interface2 from './Interface2';
import Interface3 from './Interface3';
import Interface4 from './Interface4';
import Interface6 from './Interface6';
import Header from './Header';
import Header2 from './Header2';
import { setInitUrl } from '../actions/Auth';
import RTL from 'util/RTL';
import asyncComponent from 'util/asyncComponent';

const RestrictedRoute = ({ component: Component, ...rest, authUser }) =>
    <Route
        {...rest}
        render={props =>
            authUser
                ? <Component {...props} />
                : <Redirect
                    to={{
                        pathname: '/signin',
                        state: { from: props.location }
                    }}
                />}
    />;

class App extends Component {

    componentWillMount() {
        if (this.props.initURL === '') {
            this.props.setInitUrl(this.props.history.location.pathname);
        }
    }

    getColorTheme(themeColor, applyTheme) {
        switch (themeColor) {
            case INDIGO: {
                applyTheme = createMuiTheme(indigoTheme);
                break;
            }
            case CYAN: {
                applyTheme = createMuiTheme(cyanTheme);
                break;
            }
            case AMBER: {
                applyTheme = createMuiTheme(amberTheme);
                break;
            }
            case DEEP_ORANGE: {
                applyTheme = createMuiTheme(orangeTheme);
                break;
            }
            case PINK: {
                applyTheme = createMuiTheme(pinkTheme);
                break;
            }
            case BLUE: {
                applyTheme = createMuiTheme(blueTheme);
                break;
            }
            case DEEP_PURPLE: {
                applyTheme = createMuiTheme(purpleTheme);
                break;
            }
            case GREEN: {
                applyTheme = createMuiTheme(greenTheme);
                break;
            }
            case DARK_INDIGO: {
                applyTheme = createMuiTheme(indigoTheme);
                break;
            }
            case DARK_CYAN: {
                applyTheme = createMuiTheme(cyanTheme);
                break;
            }
            case DARK_AMBER: {
                applyTheme = createMuiTheme(amberTheme);
                break;
            }
            case DARK_DEEP_ORANGE: {
                applyTheme = createMuiTheme(orangeTheme);
                break;
            }
            case DARK_PINK: {
                applyTheme = createMuiTheme(pinkTheme);
                break;
            }
            case DARK_BLUE: {
                applyTheme = createMuiTheme(blueTheme);
                break;
            }
            case DARK_DEEP_PURPLE: {
                applyTheme = createMuiTheme(purpleTheme);
                break;
            }
            case DARK_GREEN: {
                applyTheme = createMuiTheme(greenTheme);
                break;
            }
            case MOJ: {
                applyTheme = createMuiTheme(mojTheme);
                break;
            }
        }
        return applyTheme;
    }

    render() {
        const { match, location, themeColor, isDarkTheme, locale, authUser, initURL, isDirectionRTL } = this.props;
        let applyTheme = createMuiTheme(mojTheme);
        if (isDarkTheme) {
            applyTheme = createMuiTheme(darkTheme)
        } else {
            applyTheme = this.getColorTheme(themeColor, applyTheme);
        }
        if (location.pathname === '/') {
            if (authUser === null) {
                return (<Redirect to={'/signin'} />);
            } else if (initURL === '' || initURL === '/' || initURL === '/signin') {
                // return (<Redirect to={'/app/dashboard/default'} />);
                return (<Redirect to={'/home'} />);
            } else {
                return (<Redirect to={initURL} />);
            }
        }
        if (isDirectionRTL) {
            applyTheme.direction = 'rtl';
            document.body.classList.add('rtl')
        } else {
            document.body.classList.remove('rtl');
            applyTheme.direction = 'ltr'; 
        }

        const currentAppLocale = AppLocale[locale.locale];
        return (
            <MuiThemeProvider theme={applyTheme}>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                    <IntlProvider
                        locale={currentAppLocale.locale}
                        messages={currentAppLocale.messages}>
                        <RTL>
                            <div className="app-main">
                                <Switch>
                                    <RestrictedRoute path={`${match.url}app`} authUser={authUser}
                                        component={MainApp} />
                                    <Route path='/signin' component={SignIn} />
                                    <Route path='/signup' component={SignUp} />
                                    <Route path='/home' component={Home} />
                                    <Route path='/order' component={Order} />
                                    <Route path='/delivery' component={Delivery} />
                                    <Route path='/bot' component={Bot} />
                                    <Route path='/main' component={Main} />
                                    <Route path='/interface1' component={Interface1} />
                                    <Route path='/interface2' component={Interface2} />
                                    <Route path='/interface3' component={Interface3} />
                                    <Route path='/interface4' component={Interface4} />
                                    <Route path='/interface6' component={Interface6} />
                                    <Route path='/header' component={Header} />
                                    <Route path='/header2' component={Header2} />
                                </Switch>
                            </div>
                        </RTL>
                    </IntlProvider>
                </MuiPickersUtilsProvider>
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = ({ settings, auth }) => {
    const { themeColor, sideNavColor, darkTheme, locale, isDirectionRTL } = settings;
    const { authUser, initURL } = auth;
    return { themeColor, sideNavColor, isDarkTheme: darkTheme, locale, isDirectionRTL, authUser, initURL }
};

export default connect(mapStateToProps, { setInitUrl })(App);
