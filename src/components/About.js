import React from "react";
import Counter from "./Counter";

const Stat = ({ statName, statNumber, statWord }) => (
  <div className='mb4' style={{ marginRight: -2 }}>
    <div className='f5 black mb0 b'>{statName}</div>
    <Counter end={statNumber} duration={3} />
    <div className='f4 lh-1'>{statWord}</div>
  </div>
);

const About = ({ mixes }) => (
  <div className='measure center'>
    <div className='lh-copy mb4'>
      <p className='mt0'>
        Marmalade.fm features the latest and greates in grooves, beats and world
        music.
      </p>
      <p>
        Whether you're into hip hop, trip hop, classic jazz, fusion jazz, afro
        beat or break beat... we have you covered!
      </p>
    </div>

    <div className=''>
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

export default About;
