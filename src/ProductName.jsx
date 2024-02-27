import React from 'react';

const MAX_WORDS = 3;

const ProductName = ({ name }) => {
  const shortenedName = name.split(' ').slice(0, MAX_WORDS).join(' ');
  return <p>{shortenedName}{name.split(' ').length > MAX_WORDS ? ' ...' : ''}</p>;
};

export default ProductName;
