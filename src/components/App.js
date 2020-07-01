import React from "react";
import FeaturedMix from "./FeaturedMix";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <div>
        <FeaturedMix />
        <div>
          <Header />
          {/* routed */}
        </div>
      </div>
      <iframe
        width="100%"
        height="60"
        src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2FNTSRadio%2Ffloating-points-jamie-xx-18th-august-2016%2F"
        frameBorder="0"
      ></iframe>
    </div>
  );
}

export default App;
