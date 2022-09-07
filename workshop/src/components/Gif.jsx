import React from 'react';

const Gif = (props) => {
  const { gifId, changeSelectedId } = props;
  const url = `https://media.giphy.com/media/${gifId}/giphy.gif`;
  const handleClick = () => {
    changeSelectedId(gifId);
  };
  return (
    <img src={url} alt="gif" className="gif" onClick={handleClick} />
  );
};

export default Gif;
