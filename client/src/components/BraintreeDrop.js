import React from "react";
import BraintreeDropin from "braintree-dropin-react";
import braintree from "braintree-web-drop-in";
import { Button, Dimmer, Loader, Segment } from "semantic-ui-react";

const renderSubmitButton = ({ onClick, isDisabled, text }) => {
  return (
    <Button primary onClick={onClick} disabled={isDisabled}>
      {text}
    </Button>
  );
};

class BraintreeDrop extends React.Component {
  state = { loaded: false, token: "" };

  handlePaymentMethod = () => {};
  render() {
    const { loaded, token } = this.state;
    if (loaded) {
      return (
        <Segment>
          <BraintreeDropin
            braintree={braintree}
            authorizationToken={token}
            handlePayment={this.handlePaymentMethod}
            renderSubmitButton={renderSubmitButton}
          />
        </Segment>
      );
    }
    return (
      <Dimmer active>
        <Loader>Loading...</Loader>
      </Dimmer>
    );
  }
}

export default BraintreeDrop;
