import React, { FC, ReactElement } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import SeasonsCard from '@components/cards/SeasonsCard';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import OccupationCard from '@components/cards/OccupationCard';

interface Props {
  data?: any;
  foodCategory?: boolean;
  header?: any;
  footer?: any;
  occupation?: boolean;
  no?: boolean;
}

const HorizontalList: FC<Props> = (props): ReactElement => {
  const renderItem = (item: any) => {
    return props.occupation ? (
      <OccupationCard item={item.item} {...props} />
    ) : (
      <SeasonsCard item={item.item} {...props} />
    );
  };
  return (
    <FlatList
      key={'v'} //'h'
      ListHeaderComponent={props.header}
      ListFooterComponent={props.footer}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
      style={styles.style}
      horizontal={true}
      keyExtractor={item => item.id}
      data={props.data}
      renderItem={renderItem}
      onEndReachedThreshold={0.02}
    />
  );
};

export default HorizontalList;
const styles = StyleSheet.create({
  style: {
    marginBottom: 10,
    marginStart: widthPercentageToDP(3),
  },
  content: {
    marginVertical: widthPercentageToDP(5),
    // paddingEnd: wp(10),
  },
});
