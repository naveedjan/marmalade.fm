import React from "react";
import { connect } from "react-redux";
import Counter from "./Counter";
import Stat from "./Stat";

import actions from "../store/actions";

const About = ({ mixes, currentMix, setMix }) => (
  <div className='ph3 ph4-1 pad-bottom'>
    <div className='measure center lh-copy'>
      <div>
        <button onClick={() => setMix("some future funky disco")}>
          Set the redux state
        </button>
        <h1>{currentMix}</h1>
      </div>

      <p className='mt0'>
        Marmalade.fm features the latest and greates in grooves, beats and world
        music.
      </p>
      <p className='mb4'>
        Whether you're into hip hop, trip hop, classic jazz, fusion jazz, afro
        beat or break beat... we have you covered!
      </p>

      <Stat statName='Featured...' statNumber={mixes.length} statWord='mixes' />
      <Stat
        statName='Played...'
        statNumber={mixes.reduce(
          (accum, current) => accum + current.play_count,
          0
        )}
        statWord='times'
      />
      <Stat
        statName='With...'
        statNumber={mixes.reduce(
          (accum, current) => accum + current.audio_length,
          0
        )}
        statWord='seconds'
      />
    </div>
  </div>
);

export default connect((state) => state)(About);
