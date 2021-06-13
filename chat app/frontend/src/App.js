import React, { Component } from "react";
import "./App.css";
import { connect, sendMsg } from "./";
import Header from "./components/Header/Header";
import ChatHistory from "./components/ChatHistory/ChatHistory";
import ChatInput from "./components/ChatInput/ChatInput";
import image from "./image/1.png";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMe: false,
      chatHistory: [],
    };
  }
  componentDidMount() {
    connect((msg) => {
      console.log("New Message");
      this.setState((prevState) => ({
        chatHistory: [...this.state.chatHistory, msg],
      }));
      console.log(this.state);
    });
  }
  send(event) {
    if (event.keyCode === 13) {
      sendMsg(event.target.value);
      event.target.value = "";
    }
  }
  operation() {
    this.setState({
      showMe: true,
    });
  }
  render() {
    return (
      <div className="App">
        {this.state.showMe ? (
          <div>
            {" "}
            <Header />
            <ChatHistory chatHistory={this.state.chatHistory} />
            <ChatInput send={this.send} />
          </div>
        ) : (
          <button onClick={() => this.operation()}>
            {" "}
            <img
              src={image}
              alt="Logo"
              width="60px"
              height="60px"
              style={{ backgroundColor: "white" }}
            />
          </button>
        )}
      </div>
    );
  }
}

export default App;
