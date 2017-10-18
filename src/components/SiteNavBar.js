import React from 'react';

import { Link } from 'react-router-dom';

import './SiteNavBar.css';

const NAVBAR_LINKS = [
  {name: 'Character Search', to: '/'},
  {name: 'Group Chats', to: '/groups'},
  {name: 'Your Chats', to: '/chats'},
  {name: 'Your Characters', to: '/characters'},
  {name: 'Settings', to: '/settings'}
]

const SiteNavBar = ({ users_connected, users_searching, current_user }) => {
  let userLink;

  if (!current_user) {
    userLink = <li className='float-right'><Link to={'/log_in'}>Log in</Link></li>;
  } else {
    userLink = <li className='float-right'><Link to={'/log_out'}>Log out</Link></li>;
  }

  return <nav>
    <ul className='navigation'>
      {NAVBAR_LINKS.map((linkObject) => {
        return <li key={linkObject.to}><Link to={linkObject.to}>{linkObject.name}</Link></li>
      })}
      {userLink}
    </ul>
  </nav>;
};

export default SiteNavBar;
