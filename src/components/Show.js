import React, { Component } from "react";
import differenceInDays from "date-fns/differenceInDays";
import Stat from "./Stat";

const Tag = ({ name, url }) => (
  <div className='mr2 mb2 o-70'>
    <a
      className='block f6 link blue b ba bw1 b--blue br2 pv1 ph2 lh-title'
      href={url}
      target='_blank'
    >
      {name}
    </a>
  </div>
);

const Tags = ({ tags = [] }) => (
  <div className='tags flex flex-wrap'>
    {tags.map((tag) => (
      <Tag {...tag} />
    ))}
  </div>
);

class Show extends Component {
  render() {
    const { match, mixes } = this.props;

    const [mix = {}] = mixes.filter((mix) => mix.slug === match.params.slug);

    return (
      <div className='ph3 ph4-1 pad-bottom'>
        <div className='measure center lh-copy'>
          <Tags tags={mix.tags} />

          <p>{mix.description}</p>

          <Stat
            statName='Plays'
            statNumber={mix.play_count || 0}
            statWord='times'
          />

          <Stat
            statName='Uploaded'
            statNumber={differenceInDays(new Date(), mix.created_time) || 0}
            statWord='days ago'
          />

          <Stat
            statName='Lasting for'
            statNumber={mix.audio_length / 60 || 0}
            statWord='minutes'
          />
        </div>
      </div>
    );
  }
}

export default Show;
