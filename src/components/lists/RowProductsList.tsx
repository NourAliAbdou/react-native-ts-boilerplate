import * as React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import HomeCard from '@components/cards/HomeCard';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { thumbnailsScroll } from '.';

interface Props {
  data?: any;
  header?: any;
  footer?: any;
}

const RowProductsList: React.FC<Props> = props => {
  const renderItem = (item: any) => {
    return <HomeCard item={item?.item} />;
  };
  return (
    <FlatList
      ref={ref => {
        thumbnailsScroll.current = ref;
      }}
      ListHeaderComponent={props.header}
      ListFooterComponent={props.footer}
      key={'h'} //'v'
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
      style={styles.style}
      horizontal={false}
      numColumns={1}
      keyExtractor={({ index }) => index?.toString()}
      data={props.data}
      renderItem={renderItem}
      onEndReachedThreshold={0.02}
      {...props}
    />
  );
};

export default RowProductsList;
const styles = StyleSheet.create({
  style: {
    marginHorizontal: widthPercentageToDP(5),
    paddingBottom: 10,
    paddingHorizontal: 0,
  },
  content: {
    marginBottom: 10,
  },
});
