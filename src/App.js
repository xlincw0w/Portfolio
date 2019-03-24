import React, { Component } from 'react';
import { connect } from 'react-redux'
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Work from './Components/Work/Work';
import Inspiration from './Components/Inspiration/Inspiration';
import Footer from './Components/Footer/Footer';
import { Navigate } from './actions';
import './App.css';

const mapStateToProps = (state) => {
  return {
    render: state.FirstReducer.render,
  }
}

const mapDispatchToProps = (dispatch) => { 
  return {
  NavigateToAbout: (event) => dispatch(Navigate('about')),
  NavigateToCareers: (event) => dispatch(Navigate('careers')),
  NavigateTopricing: (event) => dispatch(Navigate('pricing')),
  NavigateToHireMe: (event) => dispatch(Navigate('hireme')),
  NavigateToContact: (event) => dispatch(Navigate('contact')) 
  }
}

class App extends Component {
  render() {
    const { 
      render,
      NavigateToAbout,
      NavigateToCareers,
      NavigateTopricing,
      NavigateToHireMe,
      NavigateToContact
    } = this.props;
    console.log(render);
    return (
      <div className="App">
        <Header 
        NavigateToAbout={NavigateToAbout}
        NavigateToCareers={NavigateToCareers}
        NavigateTopricing={NavigateTopricing}
        NavigateToHireMe={NavigateToHireMe}
        NavigateToContact={NavigateToContact}
        />
        <Main />
        <Work />
        <Inspiration />
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
