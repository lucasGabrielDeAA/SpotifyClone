import { StyleSheet } from 'react-native';
import { colors, metrics, } from 'styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  headerRight: {
    marginRight: metrics.basePadding,
  },
});
