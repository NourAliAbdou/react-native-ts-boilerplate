/**
 * @format
 * @flow
 */
import React, { FC, ReactElement, useState } from 'react';
import { Image } from 'react-native';

export interface Props {
  source: any;
  defaultSource: any;
  style: any;
  errorImage: any;
}
const CustomImage: FC<Props> = (props): ReactElement => {
  const { source, defaultSource, style, errorImage } = props;
  const [image, setImage] = useState({ uri: `${source.uri}` });

  const onError = () => {
    setImage(errorImage || null);
  };

  return (
    <Image
      source={image}
      defaultSource={defaultSource || null}
      style={style}
      onError={onError}
    />
  );
};
export default CustomImage;
