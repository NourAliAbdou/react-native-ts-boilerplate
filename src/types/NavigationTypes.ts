import { StackNavigationProp } from '@react-navigation/stack';

type StackParamList = {
  default: undefined;
  HomeScreen: undefined;
  DetailsScreen: undefined;
};

export type DefaultNavigationProps<T extends keyof StackParamList> =
  StackNavigationProp<StackParamList, T>;
