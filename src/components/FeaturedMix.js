import React from "react";
import { connect } from "react-redux";
import PlayMix from "./PlayMix";
import PlayButton from "./PlayButton";

const FeaturedMix = ({ name, pictures = {}, title, ...props }) => (
  <div
    className='w-50-l vh-100 flex items-center justify-center cover bg-center pad-bottom fixed-l left-0 mix-overlay'
    style={{ backgroundImage: `url(${pictures.extra_large})` }}
  >
    <PlayMix {...props}>
      <div className='w-100 tc pa3 relative z-2'>
        <p className='b biryani f6 white ttu'>{title}</p>
        <h1 className='mix-title mt0 mb3 anton white ttu'>{name}</h1>
        <PlayButton />
      </div>
    </PlayMix>
  </div>
);

const getMix = (state) => {
  let featuredMix;

  if (state.featuredMix) {
    [featuredMix] = state.mixes.filter((mix) => mix.id === state.featuredMix);
  } else {
    [featuredMix] = state.mixes.filter((mix) => mix.id === state.currentMix);
  }
  const [firstMix = {}] = state.mixes;
  return featuredMix || firstMix;
};

const getTitle = (state) => {
  if (state.featuredMix) {
    return "Currently viewing";
  } else if (state.currentMix && state.playing) {
    return "Currently playing";
  } else {
    return "Featured mix";
  }
};

export default connect((state) => ({
  ...getMix(state),
  title: getTitle(state),
}))(FeaturedMix);
