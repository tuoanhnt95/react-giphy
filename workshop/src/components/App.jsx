// rsc + tab -> react function component
import React, { useState } from 'react';

import SearchBar from './SearchBar';
import GifList from './GifList';
import Gif from './Gif';

const giphy = require('giphy-api')({
  apiKey: 'KsltJNEs1v3QDDVlinP6EFo2GqjFxgRR',
  https: true
});

const App = () => {
  // const gifIds = ["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"];
  // const selectedId = "kHrKpJiCb0mkWD4xT9";
  const [selectedId, setSelectedId] = useState("WuGSL4LFUMQU");
  const [gifIds, setGifIds] = useState(["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"]);
  const fetchGiphy = (keyword) => {
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      const gifIdArray = res.data.map((gif) => gif.id);
      setGifIds(gifIdArray);
    });
  };
  const changeSelectedId = (newSelectedId) => {
    setSelectedId(newSelectedId);
  };

  return (
    <div>
      <div className="left-scene">
        <SearchBar fetchGiphy={fetchGiphy} />
        <div className="selected-gif">
          <Gif gifId={selectedId} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifIds={gifIds} changeSelectedId={changeSelectedId} />
      </div>
    </div>
  );
};

export default App;
