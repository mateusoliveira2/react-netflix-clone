import React from 'react';
import './Header.css';

class Header extends React.Component {

    render(){

        return(
            <header className={'black'}>
                <div className="header--logo">
                    <img alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"/>
                </div>

                <div className="header--user">
                    <img alt="profile" src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"/>
                </div>
            </header>
        )
    }
}

export default Header;
