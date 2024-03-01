import React from 'react';
import Image from 'next/image';

type Props = {
  width: string;
  height: string;
  imgSrc: string;
  alt: string;
  priority: boolean;
};

const ImageNext = ({
  width, height, imgSrc = '', alt, priority = false,
}: Props) => (
  <Image
    width={0}
    height={0}
    sizes="100vw"
    style={{ width, height }}
    alt={alt}
    src={imgSrc}
    priority={priority}
  />
);
export default ImageNext;
