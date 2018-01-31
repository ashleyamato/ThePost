import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Jumbotron from './components/jumbotron'
import Navbar from './components/Navbar'
import About from './components/About'
import {pinkA200} from 'material-ui/styles/colors';
import Footer from './components/Footer'
import BodyContainer from './containers/BodyContainer'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getArticles } from './actions/actions_index.js'
import JumbotronContainer from './containers/JumbotronContainer'
import FilterContainer from './containers/FilterContainer'
import Filters from './components/Filter'
import ArticleContainer from './containers/ArticleContainer'
import SmallCard from './components/SmallCard'
import Login from './components/Login'
import SubmitButton from './components/Login'
import SignUp from './containers/SignUpContainer'
import LoginContainer from './containers/LoginContainer'
import Form from './components/Form'
import FormContainer from './containers/FormContainer'

class App extends Component {

  componentDidMount() {
    this.props.getArticles()
  }

  render() {
    return (
      <Router>
        <div className="App">

          <MuiThemeProvider>
            <Navbar />
            <Route exact path="/" render={() => (
              <div className='container-fluid'>
              <JumbotronContainer />
                <Filters />
              <BodyContainer />
            </div>
          )}/>

          <Route exact path ="/article/:id" render={() => (
            <div>
              <ArticleContainer />
            </div>
          )}/>

<<<<<<< HEAD
          <Route exact path ="/article-submit" render={() => (
            <div>
              <FormContainer/>
            </div>
          )}/>

=======
>>>>>>> 0218bd0c5694b56b4cd1f9f373994e66c5b09faa
          <Route exact path ="/about" render={() => (
            <div>
              <About />
            </div>
          )}/>

          <Route exact path ="/login" render={() => (
            <div>
              <LoginContainer />
            </div>
          )}/>
          <Route exact path ="/SignUp" render={()=>(
            <div>
              <SignUp />
            </div>
          )}/>

          <Footer />
        </MuiThemeProvider>

      </div>
    </Router>

    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getArticles,
}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(App)
