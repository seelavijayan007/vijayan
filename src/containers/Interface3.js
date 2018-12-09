import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Container } from 'reactstrap';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import SearchBox from 'components/SearchBox';
import Drawer from '@material-ui/core/Drawer';
import {connect} from 'react-redux'
import SwipeableViews from 'react-swipeable-views';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CircularProgress from '@material-ui/core/CircularProgress';
import Input from '@material-ui/core/Input'
import Moment from 'moment';
import ChatUserList from 'components/chatPanel/ChatUserList';
import Conversation from 'components/chatPanel/Conversation/index';
import ContactList from 'components/chatPanel/ContactList/index';
import IntlMessages from 'util/IntlMessages';
import CustomScrollbars from 'util/CustomScrollbars';
import Button from '@material-ui/core/Button';
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
    overflowY: "auto",
    backgroundColor: "#1a1d1f"
};
const appbarcolor = {
    backgroundColor: "#0b0f11"
};
const time = {
    color: "#727272",
    fontSize: "2em"
};
const rss = {
    color: "#727272",
    fontSize: "2em"
};
const wifi = {
    color: "#727272",
    fontSize: "2em"
};
const mob = {
    color: "#727272",
    fontSize: "2em"
};
const applogo = {
    width: "9%",
    marginLeft: "485px"
};
const search = {
    color: "#727272",
    fontSize: "2em"
};
const identity = {
    color: "#727272",
    fontSize: "2em"
};
const img = {
    // width: "100%",
    position: "relative"
}

//chatUsers
let users = [
    {
        id: 1,
        // name: 'Alex Dolgove',
        name: 'Bin 1',
        thumb: '/img/B3.png',
        status: 'away',
        mood: 'English versions from the 1914 translation by H. Rackham',
        lastMessage: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
        unreadMessage: '',
        lastMessageTime: '20 min ago',
        recent: false
    }, {
        id: 2,
        // name: 'Domnic Brown',
        name: 'Bin 2',
        thumb: '/img/2.png',
        status: 'online',
        mood: 'English versions from the 1914 translation by H. Rackham',
        lastMessage: 'It is a long established fact',
        unreadMessage: '4',
        lastMessageTime: 'Yesterday',
        recent: true
    }, {
        id: 3,
        // name: 'Domnic Harris',
        name: 'Bin 2',
        thumb: '/img/2.png',
        status: 'offline',
        mood: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
        lastMessage: 'There are many variations of passages of ',
        unreadMessage: '',
        lastMessageTime: '20/11/17',
        recent: false
    }, {
        id: 4,
        name: 'Garry Sobars',
        thumb: 'http://via.placeholder.com/150x150',
        status: 'away',
        mood: 'It is a long established fact',
        lastMessage: 'English versions from the 1914 translation by H. Rackham',
        unreadMessage: '3',
        lastMessageTime: 'Yesterday',
        recent: true
    }, {
        id: 5,
        name: 'Jeson Born',
        thumb: 'http://via.placeholder.com/150x150',
        status: 'away',
        mood: 'I must explain to you how all this mistaken idea of denouncing ',
        lastMessage: 'It is a long established fact',
        unreadMessage: '',
        lastMessageTime: 'Monday',
        recent: true
    }, {
        id: 6,
        // name: 'Jimmy Jo',
        name: 'Bin 3',
        thumb: '/img/bedestrian.jpg',
        status: 'online',
        mood: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested',
        lastMessage: 'All the Lorem Ipsum generators on the',
        unreadMessage: '',
        lastMessageTime: 'Friday',
        recent: false
    }, {
        id: 7,
        name: 'John Smith',
        thumb: 'http://via.placeholder.com/150x150',
        status: 'away',
        mood: 'There are many variations of passages of ',
        lastMessage: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested',
        unreadMessage: '',
        lastMessageTime: 'Tuesday',
        recent: true
    },
    {
        id: 8,
        name: 'Kadir M',
        thumb: 'http://via.placeholder.com/150x150',
        status: 'online',
        mood: 'All the Lorem Ipsum generators on the',
        lastMessage: 'I must explain to you how all this mistaken idea of denouncing ',
        unreadMessage: '5',
        lastMessageTime: 'Monday',
        recent: false
    }, {
        id: 9,
        name: 'Jimmy Jon',
        thumb: 'http://via.placeholder.com/150x150',
        status: 'offline',
        mood: 'There are many variations of passages of ',
        lastMessage: 'There are many variations of passages of ',
        unreadMessage: '',
        lastMessageTime: '30 Min ago',
        recent: false
    }, {
        id: 10,
        name: 'Stella Johnson',
        thumb: 'http://via.placeholder.com/150x150',
        status: 'offline',
        mood: 'It is a long established fact',
        lastMessage: 'English versions from the 1914 translation by H. Rackham',
        unreadMessage: '',
        lastMessageTime: 'Yesterday',
        recent: false
    }, {
        id: 11,
        name: 'Steve Smith',
        thumb: 'http://via.placeholder.com/150x150',
        status: 'online',
        mood: 'The standard chunk of Lorem Ipsum used since the 1500s',
        lastMessage: 'The standard chunk of Lorem Ipsum used since the 1500s',
        unreadMessage: '2',
        lastMessageTime: 'Monday',
        recent: false
    }
]

//conversationList 
let conversationList = [
    {
        'id': 1,
        'conversationData': [
            {
                'type': 'sent',
                'message': 'It is a long established fact',
                'sentAt': '3:08:35 PM',
            }, {
                'type': 'received',
                'message': 'I must explain to you how all this mistaken idea of denouncing ',
                'sentAt': '3:10:28 PM',
            }, {
                'type': 'sent',
                'message': 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested',
                'sentAt': '3:11:25 PM',
            }, {
                'type': 'received',
                'message': 'There are many variations of passages of ',
                'sentAt': '3:12:36 PM',
            }, {
                'type': 'received',
                'message': 'All the Lorem Ipsum generators on the',
                'sentAt': '3:12:45 PM',
            }, {
                'type': 'sent',
                'message': 'There are many variations of passages of ',
                'sentAt': '3:13:04 PM',
            }, {
                'type': 'received',
                'message': 'It is a long established fact',
                'sentAt': '3:13:28 PM',
            }, {
                'type': 'sent',
                'message': 'The standard chunk of Lorem Ipsum used since the 1500s',
                'sentAt': '3:15:45 PM',
            }
        ]
    },
    {
        'id': 2,
        'conversationData': [
            {
                'type': 'sent',
                'message': 'English versions from the 1914 translation by H. Rackham',
                'sentAt': '3:03:28 PM',
            },
            {
                'type': 'received',
                'message': 'English versions from the 1914 translation by H. Rackham',
                'sentAt': '3:05:47 PM',
            },
            {
                'type': 'sent',
                'message': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
                'sentAt': '3:07:52 PM',
            }, {
                'type': 'received',
                'message': 'There are many variations of passages of ',
                'sentAt': '3:12:36 PM',
            }, {
                'type': 'received',
                'message': 'All the Lorem Ipsum generators on the',
                'sentAt': '3:12:45 PM',
            }, {
                'type': 'sent',
                'message': 'There are many variations of passages of ',
                'sentAt': '3:13:04 PM',
            },
        ]
    },
    {
        'id': 3,
        'conversationData': [
            {
                'type': 'sent',
                'message': 'It is a long established fact',
                'sentAt': '3:08:35 PM',
            }, {
                'type': 'received',
                'message': 'I must explain to you how all this mistaken idea of denouncing ',
                'sentAt': '3:10:28 PM',
            }, {
                'type': 'sent',
                'message': 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested',
                'sentAt': '3:11:25 PM',
            }, {
                'type': 'received',
                'message': 'There are many variations of passages of ',
                'sentAt': '3:12:36 PM',
            }, {
                'type': 'received',
                'message': 'All the Lorem Ipsum generators on the',
                'sentAt': '3:12:45 PM',
            }, {
                'type': 'sent',
                'message': 'There are many variations of passages of ',
                'sentAt': '3:13:04 PM',
            }, {
                'type': 'received',
                'message': 'It is a long established fact',
                'sentAt': '3:13:28 PM',
            },
        ]
    },
    {
        'id': 4,
        'conversationData': [
            {
                'type': 'sent',
                'message': 'English versions from the 1914 translation by H. Rackham',
                'sentAt': '3:03:28 PM',
            },
            {
                'type': 'received',
                'message': 'English versions from the 1914 translation by H. Rackham',
                'sentAt': '3:05:47 PM',
            },
            {
                'type': 'sent',
                'message': 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested',
                'sentAt': '3:11:25 PM',
            }, {
                'type': 'received',
                'message': 'There are many variations of passages of ',
                'sentAt': '3:12:36 PM',
            }, {
                'type': 'received',
                'message': 'All the Lorem Ipsum generators on the',
                'sentAt': '3:12:45 PM',
            }, {
                'type': 'sent',
                'message': 'There are many variations of passages of ',
                'sentAt': '3:13:04 PM',
            }, {
                'type': 'received',
                'message': 'It is a long established fact',
                'sentAt': '3:13:28 PM',
            }, {
                'type': 'sent',
                'message': 'The standard chunk of Lorem Ipsum used since the 1500s',
                'sentAt': '3:15:45 PM',
            }
        ]
    }, {
        'id': 5,
        'conversationData': [
            {
                'type': 'sent',
                'message': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
                'sentAt': '3:07:52 PM',
            }, {
                'type': 'sent',
                'message': 'It is a long established fact',
                'sentAt': '3:08:35 PM',
            }, {
                'type': 'received',
                'message': 'I must explain to you how all this mistaken idea of denouncing ',
                'sentAt': '3:10:28 PM',
            }, {
                'type': 'sent',
                'message': 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested',
                'sentAt': '3:11:25 PM',
            }, {
                'type': 'received',
                'message': 'There are many variations of passages of ',
                'sentAt': '3:12:36 PM',
            }, {
                'type': 'received',
                'message': 'It is a long established fact',
                'sentAt': '3:13:28 PM',
            }, {
                'type': 'sent',
                'message': 'The standard chunk of Lorem Ipsum used since the 1500s',
                'sentAt': '3:15:45 PM',
            }
        ]
    },
    {
        'id': 6,
        'conversationData': [
            {
                'type': 'sent',
                'message': 'It is a long established fact',
                'sentAt': '3:08:35 PM',
            }, {
                'type': 'received',
                'message': 'I must explain to you how all this mistaken idea of denouncing ',
                'sentAt': '3:10:28 PM',
            }, {
                'type': 'sent',
                'message': 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested',
                'sentAt': '3:11:25 PM',
            }, {
                'type': 'received',
                'message': 'There are many variations of passages of ',
                'sentAt': '3:12:36 PM',
            }, {
                'type': 'received',
                'message': 'It is a long established fact',
                'sentAt': '3:13:28 PM',
            }, {
                'type': 'sent',
                'message': 'The standard chunk of Lorem Ipsum used since the 1500s',
                'sentAt': '3:15:45 PM',
            }
        ]
    }, {
        'id': 7,
        'conversationData': [

            {
                'type': 'received',
                'message': 'English versions from the 1914 translation by H. Rackham',
                'sentAt': '3:05:47 PM',
            },
            {
                'type': 'sent',
                'message': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
                'sentAt': '3:07:52 PM',
            }, {
                'type': 'sent',
                'message': 'It is a long established fact',
                'sentAt': '3:08:35 PM',
            }, {
                'type': 'received',
                'message': 'There are many variations of passages of ',
                'sentAt': '3:12:36 PM',
            }, {
                'type': 'received',
                'message': 'All the Lorem Ipsum generators on the',
                'sentAt': '3:12:45 PM',
            }, {
                'type': 'sent',
                'message': 'There are many variations of passages of ',
                'sentAt': '3:13:04 PM',
            }, {
                'type': 'received',
                'message': 'It is a long established fact',
                'sentAt': '3:13:28 PM',
            },
        ]
    },
    {
        'id': 8,
        'conversationData': [
            {
                'type': 'sent',
                'message': 'English versions from the 1914 translation by H. Rackham',
                'sentAt': '3:03:28 PM',
            },
            {
                'type': 'sent',
                'message': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
                'sentAt': '3:07:52 PM',
            }, {
                'type': 'sent',
                'message': 'It is a long established fact',
                'sentAt': '3:08:35 PM',
            }, {
                'type': 'received',
                'message': 'I must explain to you how all this mistaken idea of denouncing ',
                'sentAt': '3:10:28 PM',
            }, {
                'type': 'received',
                'message': 'There are many variations of passages of ',
                'sentAt': '3:12:36 PM',
            }, {
                'type': 'received',
                'message': 'All the Lorem Ipsum generators on the',
                'sentAt': '3:12:45 PM',
            }, {
                'type': 'received',
                'message': 'It is a long established fact',
                'sentAt': '3:13:28 PM',
            }, {
                'type': 'sent',
                'message': 'The standard chunk of Lorem Ipsum used since the 1500s',
                'sentAt': '3:15:45 PM',
            }
        ]
    },
    {
        'id': 9,
        'conversationData': [

            {
                'type': 'received',
                'message': 'English versions from the 1914 translation by H. Rackham',
                'sentAt': '3:05:47 PM',
            },
            {
                'type': 'sent',
                'message': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
                'sentAt': '3:07:52 PM',
            },
            {
                'type': 'received',
                'message': 'I must explain to you how all this mistaken idea of denouncing ',
                'sentAt': '3:10:28 PM',
            },
            {
                'type': 'received',
                'message': 'There are many variations of passages of ',
                'sentAt': '3:12:36 PM',
            },
            {
                'type': 'sent',
                'message': 'There are many variations of passages of ',
                'sentAt': '3:13:04 PM',
            },
            {
                'type': 'received',
                'message': 'It is a long established fact',
                'sentAt': '3:13:28 PM',
            },
            {
                'type': 'sent',
                'message': 'The standard chunk of Lorem Ipsum used since the 1500s',
                'sentAt': '3:15:45 PM',
            }
        ]
    },
    {
        'id': 10,
        'conversationData': [
            {
                'type': 'sent',
                'message': 'English versions from the 1914 translation by H. Rackham',
                'sentAt': '3:03:28 PM',
            }, {
                'type': 'received',
                'message': 'English versions from the 1914 translation by H. Rackham',
                'sentAt': '3:05:47 PM',
            }, {
                'type': 'sent',
                'message': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
                'sentAt': '3:07:52 PM',
            }, {
                'type': 'sent',
                'message': 'It is a long established fact',
                'sentAt': '3:08:35 PM',
            }, {
                'type': 'received',
                'message': 'I must explain to you how all this mistaken idea of denouncing ',
                'sentAt': '3:10:28 PM',
            }, {
                'type': 'sent',
                'message': 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested',
                'sentAt': '3:11:25 PM',
            }, {
                'type': 'received',
                'message': 'There are many variations of passages of ',
                'sentAt': '3:12:36 PM',
            }, {
                'type': 'received',
                'message': 'All the Lorem Ipsum generators on the',
                'sentAt': '3:12:45 PM',
            }, {
                'type': 'sent',
                'message': 'There are many variations of passages of ',
                'sentAt': '3:13:04 PM',
            }, {
                'type': 'received',
                'message': 'It is a long established fact',
                'sentAt': '3:13:28 PM',
            }, {
                'type': 'sent',
                'message': 'The standard chunk of Lorem Ipsum used since the 1500s',
                'sentAt': '3:15:45 PM',
            }
        ]
    },
    {
        'id': 11,
        'conversationData': [
            {
                'type': 'received',
                'message': 'There are many variations of passages of ',
                'sentAt': '3:12:36 PM',
            }, {
                'type': 'received',
                'message': 'All the Lorem Ipsum generators on the',
                'sentAt': '3:12:45 PM',
            }, {
                'type': 'sent',
                'message': 'There are many variations of passages of ',
                'sentAt': '3:13:04 PM',
            },
        ]
    }

]

class Interface3 extends Component {

//chat
filterContact = (userName) => {
    if (userName === '') {
        return users.filter(user => !user.recent);
    }
    return users.filter((user) =>
        !user.recent && user.name.toLowerCase().indexOf(userName.toLowerCase()) > -1
    );
};

filterUsers = (userName) => {
    if (userName === '') {
        return users.filter(user => user.recent);
    }
    return users.filter((user) =>
        user.recent && user.name.toLowerCase().indexOf(userName.toLowerCase()) > -1
    );
};

Communication = () => {
    const intl = this.props;
    const {message, selectedUser, conversation} = this.state;
    const {conversationData} = conversation;
    return <div className="chat-main">
        <div className="chat-main-header">
            <IconButton className="d-block d-xl-none chat-btn" aria-label="Menu"
                        onClick={this.onToggleDrawer.bind(this)}>
                <i className="zmdi zmdi-comment-text"/>
            </IconButton>
            <div className="chat-main-header-info">
                <div className="chat-avatar mr-2">
                    <div className="chat-avatar-mode">
                        <img src={selectedUser.thumb}
                             className="rounded-circle size-60"
                             img-responsive
                             alt=""/>
                        <span className={`chat-mode ${selectedUser.status}`}/>
                    </div>
                </div>
                <div className="chat-contact-name">
                    {selectedUser.name}
                </div>
            </div>
        </div>
        <CustomScrollbars className="chat-list-scroll scrollbar"
            style={{height: this.props.width >= 1200 ? 'calc(100vh - 300px)' : 'calc(100vh - 255px)'}}>
                <Conversation conversationData={conversationData}
                    selectedUser={selectedUser}/>
        </CustomScrollbars>

        <div className="chat-main-footer">
            <div className="d-flex flex-row align-items-center" style={{maxHeight: 51}}>
                <div className="col">
                    <div className="form-group">
                        <textarea
                            id="required" className="border-0 form-control chat-textarea"
                            onKeyUp={this._handleKeyPress.bind(this)}
                            onChange={this.updateMessageValue.bind(this)}
                            value={message}
                            placeholder="Type and hit enter to send message"
                        />
                    </div>
                </div>
                <div className="chat-sent">
                    <IconButton
                        onClick={this.submitComment.bind(this)}
                        aria-label="Send message">
                        <i className="zmdi  zmdi-mail-send"/>
                    </IconButton>
                </div>
            </div>
        </div>
    </div>
};

AppUsersInfo = () => {
    return <div className="chat-sidenav-main">
        <div className="bg-grey lighten-5 chat-sidenav-header">
            <div className="chat-user-hd mb-0">
                <IconButton className="back-to-chats-button size-30" aria-label="back button"
                    onClick={() => {
                        this.setState({
                            userState: 1
                        });
                    }}>
                    <i className="zmdi zmdi-arrow-back"/>
                </IconButton>
            </div>
            <div className="chat-user chat-user-center">
                <div className="chat-avatar mx-auto">
                    <img src="/img/newlogo.png"
                         className="avatar avatar-shadow rounded-circle size-60 huge" img-responsive alt="John Doe"/>
                </div>

                {/* <div className="user-name h4 my-2">Robert Johnson</div> */}
                <div className="user-name h4 my-2">Bedestrian</div>
            </div>
        </div>
        <div className="chat-sidenav-content">
            <CustomScrollbars className="chat-sidenav-scroll scrollbar"
                              style={{height: this.props.width >= 1200 ? 'calc(100vh - 328px)' : 'calc(100vh - 162px)'}}>
                <form className="p-4">
                    <div className="form-group mt-4">
                        <label>Mood</label>
                        <Input
                            fullWidth
                            id="exampleTextarea"
                            multiline
                            rows={3}
                            onKeyUp={this._handleKeyPress.bind(this)}
                            onChange={this.updateMessageValue.bind(this)}
                            defaultValue="it's a status....not your diary..."
                            placeholder="Status"
                            margin="none"/>
                    </div>
                </form>
            </CustomScrollbars>
        </div>
    </div>
};
ChatUsers = () => {
    return <div className="chat-sidenav-main">
        <div className="chat-sidenav-header">
            <div className="chat-user-hd">
                <div className="chat-avatar mr-3" onClick={() => {
                    this.setState({
                        userState: 2
                    });
                }}>
                    <div className="chat-avatar-mode">
                        <img id="user-avatar-button" src="/img/newlogo.png"
                             className="rounded-circle size-50"
                             img-responsive
                             alt=""/>
                        <span className="chat-mode online"/>
                    </div>
                </div>
                <div className="module-user-info d-flex flex-column justify-content-center">
                    <div className="module-title">
                        {/* <h5 className="mb-0">Robert Johnson</h5> */}
                        <h5 className="mb-0">Bedestrian</h5>
                    </div>
                    <div className="module-user-detail">
                        <a href="javascript:void(0)" className="text-grey">robert@example.com</a>
                    </div>
                </div>
            </div>

            <div className="search-wrapper">
                <SearchBox placeholder="Search or start new chat"
                           onChange={this.updateSearchChatUser.bind(this)}
                           value={this.state.searchChatUser}/>
            </div>
        </div>

        <div className="chat-sidenav-content">
            <AppBar position="static" className="no-shadow chat-tabs-header">
                <Tabs
                    className="chat-tabs"
                    value={this.state.selectedTabIndex}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    fullWidth
                >
                    <Tab label={<IntlMessages id="chat.chatUser"/>}/>
                    <Tab label={<IntlMessages id="chat.contacts"/>}/>
                </Tabs>
            </AppBar>
            <SwipeableViews
                index={this.state.selectedTabIndex}
                onChangeIndex={this.handleChangeIndex}
            >
                <CustomScrollbars className="chat-sidenav-scroll scrollbar"
                                  style={{height: this.props.width >= 1200 ? 'calc(100vh - 328px)' : 'calc(100vh - 202px)'}}>
                    {this.state.chatUsers.length === 0 ?
                        <div className="p-5">{this.state.userNotFound}</div>
                        :
                        <ChatUserList chatUsers={this.state.chatUsers}
                                      selectedSectionId={this.state.selectedSectionId}
                                      onSelectUser={this.onSelectUser.bind(this)}/>
                    }
                </CustomScrollbars>

                <CustomScrollbars className="chat-sidenav-scroll scrollbar"
                                  style={{height: this.props.width >= 1200 ? 'calc(100vh - 328px)' : 'calc(100vh - 202px)'}}>
                    {
                        this.state.contactList.length === 0 ?
                            <div className="p-5">{this.state.userNotFound}</div>
                            :
                            <ContactList contactList={this.state.contactList}
                                         selectedSectionId={this.state.selectedSectionId}
                                         onSelectUser={this.onSelectUser.bind(this)}/>
                    }
                </CustomScrollbars>
            </SwipeableViews>
        </div>
    </div>
};
_handleKeyPress = (e) => {
    if (e.key === 'Enter') {
        this.submitComment();
    }
};

handleChange = (event, value) => {
    this.setState({selectedTabIndex: value});
};
handleChangeIndex = index => {
    this.setState({selectedTabIndex: index});
};
onSelectUser = (user) => {
    this.setState({
        loader: true,
        selectedSectionId: user.id,
        drawerState: this.props.drawerState,
        selectedUser: user,
        conversation: this.state.conversationList.find((data) => data.id === user.id)
    });
    setTimeout(() => {
        this.setState({loader: false});
    }, 1500);
};
showCommunication = () => {
    return (
        <div className="chat-box">
            <div className="chat-box-main">{
                this.state.selectedUser === null ?
                    <div className="loader-view">
                        {/* <i className="zmdi zmdi-comment s-128 text-muted"/> */}
                        <img id="user-avatar-button" src="/img/newlogo.png"
                             className="rounded-circle size-100"
                             img-responsive
                             alt=""/>
                        <h1 className="text-muted">{<IntlMessages id="chat.selectUserChat"/>}</h1>
                        <Button className="d-block d-xl-none" color="primary"
                                onClick={this.onToggleDrawer.bind(this)}>{<IntlMessages
                            id="chat.selectContactChat"/>}</Button>
                    </div>
                    : this.Communication()}
            </div>
        </div>)
};


    constructor(){
        super();
        this.state = {
            loader: false,
            userNotFound: 'No user found',
            drawerState: false,
            selectedSectionId: '',
            selectedTabIndex: 0,
            userState: 1,
            searchChatUser: '',
            contactList: users.filter((user) => !user.recent),
            selectedUser: null,
            message: '',
            chatUsers: users.filter((user) => !user.recent),
            conversationList: conversationList,
            conversation: null

        }
    }

    //chat
    submitComment(){
        if (this.state.message !== '') {
            const updatedConversation = this.state.conversation.conversationData.concat({
                'type': 'sent',
                'message': this.state.message,
                'sentAt': Moment(new Date).format('hh:mm:ss A'),
            });
            this.setState({
                conversation: {
                    ...this.state.conversation, conversationData:updatedConversation
                },
                message: '',
                conversationList: this.state.conversationList.map(conversationData => {
                    if (conversationData.id === this.state.conversation.id) {
                        return {...this.state.conversation, conversationData: updatedConversation};
                    } else {
                        return conversationData;
                    }
                })
            });
        }
    }
    updateMessageValue(evt) {
        this.setState({
            message: evt.target.value
        });
    }
    updateSearchChatUser(evt) {
        this.setState({
            searchChatUser: evt.target.value,
            contactList: this.filterContact(evt.target.value),
            chatUsers: this.filterUsers(evt.target.value)
        });
    }
    onToggleDrawer(){
        this.setState({
            drawerState: !this.state.drawerState
        });
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
    render(){
        const {loader, userState, drawerState, selectedUser} = this.state;
        console.log('userstate: ', userState);
        return(
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
                                        <SearchBox styleName="search-dropdown" placeholder=""
                                            onChange={this.updateSearchText.bind(this)}
                                            value={this.state.searchText} />
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </Toolbar>
                    </AppBar> */}
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
                            <img src="/img/bedestrian.png" alt="bedestrian" img-responsive style={img}/>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
                            <div className="app-wrapper app-wrapper-module">
                                <div className="app-module chat-module animated slideInUpTiny animation-duration-3">
                                    <div className="chat-module-box">
                                        <div className="d-block d-xl-none">
                                            <Drawer open={drawerState}
                                                onClose={this.onToggleDrawer.bind(this)}>
                                                {userState === 1 ? this.ChatUsers() : this.AppUsersInfo()}
                                            </Drawer>
                                        </div>
                                        <div className="chat-sidenav d-none d-xl-flex">
                                            {userState === 1 ? this.ChatUsers() : this.AppUsersInfo()}
                                        </div>
                                        {loader ?
                                            <div className="loader-view w-100"
                                                style={{height: 'calc(100vh - 120px)'}}>
                                                    <CircularProgress/>
                                            </div> : this.showCommunication()
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

const mapStateToProps = ({settings}) => {
    const {width} = settings;
    return {width}
};

export default connect(mapStateToProps)(Interface3);