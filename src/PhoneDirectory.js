import React, { Component } from "react";
import AddSubscriber from "./AddSubscriber";
import ShowSubscribers from "./ShowSubscribers";
import { BrowserRouter as Router, Route } from "react-router-dom";

class PhoneDirectory extends Component {
  constructor() {
    super();
    this.state = {
      subscribersList: [
        {
          id: 1,
          name: "tab",
          phone: "1234567890",
        },
        {
          id: 2,
          name: "rez",
          phone: "0987654321",
        },
      ],
    };
  }

  addSubscriberHandler = (newSubscriber) => {
    let subscribersList = this.state.subscribersList;
    if (subscribersList.length > 0) {
      newSubscriber.id = subscribersList[subscribersList.length - 1].id + 1;
    } else {
      newSubscriber.id = 1;
    }
    subscribersList.push(newSubscriber);
    this.setState({subscribersList: subscribersList })
    
  }
  render() {
    return (
      <Router>
        <div className="main-container">
          <Route exact path="/" render={(props) => (<ShowSubscribers {...props} subscribersList={this.state.subscribersList} /> )} />
          <Route exact path="/add" render={({history}, props) => (<AddSubscriber history={history} {...props} addSubscriberHandler={this.addSubscriberHandler} /> )} />
        </div>
      </Router>
    );
  }
}

export default PhoneDirectory;
