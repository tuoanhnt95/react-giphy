import React from 'react';
import Gif from './Gif';

const GifList = (props) => {
  const { gifIds, changeSelectedId } = props;
  return (
    <div className="gif-list">
      { gifIds.map(
        (gifId) => <Gif gifId={gifId} key={gifId} changeSelectedId={changeSelectedId} />
      )}
    </div>
  );
};

export default GifList;
