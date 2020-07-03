import React from "react";
import mixes from "../data/mixes";
import PlayButton from "../components/PlayButton";
import PlayMix from "../components/PlayMix";

const Archive = ({ mixes, ...props }) => (
  <ul className="list pl0 archive mv 0 pad-bottom">
    {mixes.map((mix) => (
      <li className="ph3 ph4-l">
        <PlayMix {...props} id={mix.key}>
          <div className="pv3 bb b--light-gray flex justify-between items-center">
            <h1 className="f6 mv0 black ttu biryani pr2">{mix.name}</h1>
            <PlayButton />
          </div>
        </PlayMix>
      </li>
    ))}
  </ul>
);

export default Archive;
