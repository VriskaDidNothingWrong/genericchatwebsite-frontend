import React from 'react';
import { bindActionCreators } from 'redux';

import { withRouter } from 'react-router';
import {
  Route,
  Switch,
} from 'react-router-dom'
import { connect } from 'react-redux';

import { PropsRoute } from 'util/routes';

import { actions as profileActions } from 'reducks/profile';

import NoMatchComponent from 'components/NoMatchComponent';
import ChatList from 'components/ChatList';
import SiteHeader from 'components/SiteHeader';
import ErrorDisplay from 'components/ErrorDisplay';
import LoginPage from 'components/LoginPage';

const FrontPageContainer = ({ chats, match, doLogin, doRegister, last_error, current_user }) => {
  return <div>
    <SiteHeader users_connected={413} users_searching={612} current_user={current_user}/>
    <main>
      <ErrorDisplay last_error={last_error}/>
      <Switch>
        <PropsRoute path="/log_in" exact current_user={current_user} component={LoginPage} doLogin={doLogin} doRegister={doRegister}/>
        <Route component={NoMatchComponent}/>
      </Switch>
    </main>
  </div>;
};

const mapStateToProps = state => ({
  last_error: profileActions.getLastError(state),
  current_user: profileActions.getProfile(state)
});

const mapDispatchToProps = dispatch => ({
  doLogin: bindActionCreators(profileActions.doLogin, dispatch),
  doRegister: bindActionCreators(profileActions.doRegister, dispatch)
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(FrontPageContainer));
