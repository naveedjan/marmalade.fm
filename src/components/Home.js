import React from "react";
import Mix from "./Mix";

const Home = (props) => (
  <div className="flex flex-wrap justify-between mixes ph3 ph4-l">
    <div className="mix mb4">
      <Mix
        name="This Is The Blues"
        id="/adamkvasnica3/this-is-the-blues/"
        {...props}
      />
    </div>
    <div className="mix mb4">
      <Mix
        name="Ambient Treasures"
        id="/salvatore-muscat/ambient-treasures-vol1-towards-the-dream/"
        {...props}
      />
    </div>
    <div className="mix mb4">
      <Mix
        name="Wavy Wednesdays"
        id="/djmattrichards/wavywednesdays-mix-017-quavo-djmattrichards/"
        {...props}
      />
    </div>
  </div>
);

export default Home;
