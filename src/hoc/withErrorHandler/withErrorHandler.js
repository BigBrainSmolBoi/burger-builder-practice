import React, { Component } from "react";

//other components
import Modal from "../../components/UI/Modal/Modal";

//For this work we have to call this function by providing a component we want
//to check errors in and axios. then this will return the class based
//component which will do the further functionality
const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = { error: null };

    componentDidMount() {
      //this runs when a request is sent and each time it sets the error state
      //to be null when the request is about to sent
      axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });

      //this runs when the response comes. if there is OK response we return it
      //but if there is any error then we set the state of error to true
      axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ error: error });
        }
      );
    }

    //this will make the errors state again null after we handle it
    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <React.Fragment>
          <Modal
            modalClosed={this.errorConfirmedHandler}
            show={this.state.error}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </React.Fragment>
      );
    }
  };
};

export default withErrorHandler;
