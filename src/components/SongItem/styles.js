import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

export default StyleSheet.create({
  container: {
    marginTop: metrics.basePadding,
    marginHorizontal: metrics.basePadding,
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    color: colors.white,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 14,
    color: colors.dark,
    marginTop: 3,
  },
  play: {
    color: colors.regular,
  },
});
