import React, { useState, memo } from 'react';
import { Image } from 'react-bootstrap';

const DEFAULT_PROFILE_IMAGE_URL = 'https://via.placeholder.com/500';

const ImageWithFallback = memo(({ src, ...rest }) => {
  const [srcImg, setSrcImg] = useState(null);

  const onError = () => {
    setSrcImg(DEFAULT_PROFILE_IMAGE_URL);
  };

  if (srcImg) {
    return <Image src={srcImg} {...rest} />;
  }
  return <Image src={src} onError={onError} {...rest} />;
});

export default ImageWithFallback;
