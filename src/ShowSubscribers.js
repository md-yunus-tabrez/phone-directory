import React, { Component } from "react";
import Header from "./Header";
import "./ShowSubscribers.css";
class ShowSubscribers extends Component {

  // constructor()
  // {
  //   super();
  //   this.state = {
  //     subscribersListToShow: []
  //   }
  //   // console.log("Component Called")
  // }

  // componentDidMount() {
  //   let newSubscriber = {
  //     id: 1,
  //     name: "Tabrez Khan",
  //     Phone: "8888888888"
  //   }
  //   let subscriberList = this.state.subscribersListToShow;
  //   subscriberList.push(newSubscriber);
  //   this.setState({subscribersListToShow: subscriberList});
  //   console.log("Component Did Mount Called")
  //   console.log("State", this.state)
  // }

  render() {
    // console.log("Render Called")
    // let subscribers = [
    //   {
    //     id: 1,
    //     name: "tab",
    //     phone: "8888888888"
    //   },
    //   {
    //     id: 2,
    //     name: "deep",
    //     phone: "9999999999"
    //   }
    // ]

    return (

      <div className="component-container">
        <Header heading="Phone Directory" />
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>

          {
            this.props.subscribersList.map(sub => {
              return <div key={sub.id} className="grid-container ">
                <span className="grid-item ">{sub.name}</span>
                <span className="grid-item ">{sub.phone}</span>

                <span className="grid-item action-btn-container">
                  <button className="custom-btn delete-btn">Delete</button>
                </span>


              </div>
            })
          }

        </div>
      </div>

    );
  }
}

export default ShowSubscribers;
