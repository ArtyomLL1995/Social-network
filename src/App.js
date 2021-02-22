import React from 'react'
import './App.css'
import { Route, withRouter, BrowserRouter } from 'react-router-dom';
import { connect, Provider } from 'react-redux'
import { initializeApp } from './redux/appReducer'
import { compose } from 'redux';
import store from './redux/reduxStore'
import Nav from './components/Navbar/Nav';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import HeaderContainer from './components/Header/HeaderContainer';
import UsersInnerContainer from './components/Users/UsersInnerContainer';
import LoginForm from './components/Login/LoginForm';
import Preloader from './components/Common/Preloader/Preloader';
import { WithSuspense } from './hoc/WithSuspense';
const Dialogs = React.lazy(() => import('./components/Dialogs/Dialogs'))
const ProfileContainer = React.lazy(() => import('./components/NewProfile/ProfileContainer'))

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) return <Preloader />
    return (
      <>
        <div className='app-wrapper'>
          <HeaderContainer />
          <Nav />
          <div className='app-wrapper-content'>
            <Route path='/Dialogs' render={WithSuspense(Dialogs)}/>
            <Route path='/Profile/:userId?' render={WithSuspense(ProfileContainer)}/>
            <Route path='/Users/:userId' render={WithSuspense(ProfileContainer)} />
            <Route exact path='/Users' render={() => <UsersInnerContainer />} />
            <Route path='/Music' render={() => <Music />} />
            <Route path='/Settings' render={() => <Settings />} />
            <Route path='/Login' render={() => <LoginForm />} />
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.appReducer.initialized
})

let AppWithRouter = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App)

let MainApp = (props) => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppWithRouter />
    </Provider>
  </BrowserRouter>
}

export default MainApp
