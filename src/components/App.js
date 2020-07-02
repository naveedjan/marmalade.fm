/*global Mixcloud*/

import React, { Component } from "react";

import FeaturedMix from "./FeaturedMix";
import Header from "./Header";
import Home from "./Home";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Archive = () => <h1>Archive</h1>;
const About = () => <h1>About</h1>;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      currentMix: "",
    };
  }

  mountAudio = async () => {
    this.widget = Mixcloud.PlayerWidget(this.player);
    await this.widget.ready;
    // await this.widget.play();
    this.widget.events.pause.on(() =>
      this.setState({
        playing: false,
      })
    );
    this.widget.events.play.on(() =>
      this.setState({
        playing: true,
      })
    );

    console.log(this.widget);
  };

  componentDidMount() {
    this.mountAudio();
  }

  actions = {
    togglePlay: () => {
      this.widget.togglePlay();
    },

    playMix: (mixName) => {
      const { currentMix } = this.state;
      if (mixName === currentMix) {
        return this.widget.togglePlay();
      }

      this.setState({
        currentMix: mixName,
      });

      this.widget.load(mixName, true);
    },
  };

  render() {
    return (
      <Router>
        <div>
          <div className="flex-l justify-end">
            <FeaturedMix />
            <div className="w-50-l relative z-1">
              <Header />

              <Route
                exact
                path="/"
                component={() => <Home {...this.state} {...this.actions} />}
              />

              <Route path="/archive">
                <Archive />
              </Route>
              <Route path="/about">
                <About />
              </Route>
            </div>
          </div>
          <iframe
            width="100%"
            height="60"
            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2FNTSRadio%2Ffloating-points-jamie-xx-18th-august-2016%2F"
            frameBorder="0"
            className="db fixed bottom-0 z-5"
            ref={(player) => (this.player = player)}
          ></iframe>
        </div>
      </Router>
    );
  }
}

export default App;
