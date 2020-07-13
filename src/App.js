import React, {Component} from 'react';
import './App.css';
import SideBar from "./Sidebar";
import Dashboard from './Dashboard/Dashboard.js';
import Add from './Add/Add.js';
import List from './List/List.js';
import Home from './Home/Home.js';
import {BrowserRouter, Route} from 'react-router-dom'

import {connect} from 'react-redux';


class App extends Component{
  
  // state={
  //   showpg: 1
  // }


  changeSide = (x) => {
    if(x===1){
      // this.setState({showpg:1});
      this.props.showDashboard();
    }
    else if(x===2){
      // this.setState({showpg:2});
      this.props.showAdd();
    }
    else if(x===3){
      // this.setState({showpg:3});
      this.props.showList();
    }
  }
  render() {


    // let add=null;
    // let dashboard=null;
    // let list=null;

    // if(this.props.ctr===1){
    //   dashboard=(
    //       <Dashboard/>
    //   );
    // }
    // if(this.props.ctr===2){
    //   add=(
    //       <Add/>
    //      );
    // }
    // if(this.props.ctr===3){
    //   list=(
    //       <List/>
    //   );

    // }

 
  return (
    <BrowserRouter>
    <div className="App">
      <SideBar 
      click={(opt)=>this.changeSide(opt)}/>
      <div className="header">
      <div className="left-header">
      </div>
      <div className="right-header">
      </div>
      <h1>Work Mate</h1>
      </div>
     
     
      <Route path="/" exact component={Home} />
      <Route path="/Dashboard" component={Dashboard} />
      <Route path="/Add" component={Add} />
      <Route path="/List" component={List}/>
      </div>
 
    </BrowserRouter>
  );

}

}

const mapStateToProps = state =>{
  return {
    ctr: state.redapp.showpg
  };
};

const mapDispatchToProps = dispatch =>{
  return {
    showDashboard: () => dispatch({type: 'SHOW_DASHBOARD'}),
    showAdd: () => dispatch({type: 'SHOW_ADD'}),
    showList: () => dispatch({type: 'SHOW_LIST'})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

  