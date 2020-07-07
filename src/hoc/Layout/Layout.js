import React, { Component } from "react";

// classes from css file will be only for this component
import classes from "./Layout.module.css";

// other components
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

//class based component because there will be state management
class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  //This is going to change the state of showsidedrawer to false
  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  //when this method is called then the state is changed from false to true and vice versa
  //setstate can accept a function which will have access to previous state
  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {
        showSideDrawer: !prevState.showSideDrawer,
      };
    });
  };

  render() {
    return (
      <React.Fragment>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </React.Fragment>
    );
  }
}

export default Layout;
