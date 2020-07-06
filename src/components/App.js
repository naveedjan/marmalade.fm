/*global Mixcloud*/

import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import FeaturedMix from "./FeaturedMix";
import Header from "./Header";
import Home from "./Home";
import Archive from "./Archive";
import About from "./About";
import Show from "./Show";

import mixesData from "../data/mixes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      currentMix: "",
      mixIds: mixesData,
      mix: null,
      mixes: [],
    };
  }

  fetchMixes = async () => {
    const { mixIds } = this.state;

    mixIds.map(async (id) => {
      try {
        const response = await fetch(`https://api.mixcloud.com${id}`);
        const data = await response.json();
        this.setState((prevState, props) => ({
          mixes: [...prevState.mixes, data],
        }));
      } catch (error) {
        console.log(error);
      }
    });
  };

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
  };

  componentDidMount() {
    this.mountAudio();

    this.fetchMixes();
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
    const [firstMix = {}] = this.state.mixes;

    return (
      <Router>
        <div>
          <div className='flex-l justify-end'>
            <FeaturedMix
              {...this.state}
              {...this.actions}
              {...firstMix}
              id={firstMix.key}
            />
            <div className='w-50-l relative z-1'>
              <Header />

              <Route
                exact
                path='/'
                render={() => <Home {...this.state} {...this.actions} />}
              />
              <Route
                path='/archive'
                render={() => <Archive {...this.state} {...this.actions} />}
              />
              <Route path='/about' render={() => <About {...this.state} />} />

              <Route
                path='/show/:slug'
                render={(routeParams) => (
                  <Show {...routeParams} {...this.state} />
                )}
              />
            </div>
          </div>
          <iframe
            width='100%'
            height='60'
            src='https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2FNTSRadio%2Ffloating-points-jamie-xx-18th-august-2016%2F'
            frameBorder='0'
            className='db fixed bottom-0 z-5'
            ref={(player) => (this.player = player)}
          ></iframe>
        </div>
      </Router>
    );
  }
}

export default App;
