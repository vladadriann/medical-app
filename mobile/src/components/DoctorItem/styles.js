import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    margin: 10,
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
  },
  image: {flex: 2, height: 150, resizeMode: 'contain'},
  rightContainer: {
    padding: 10,
    flex: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  specialty: {},
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  star: {
    margin: 2,
  },
});

export default styles;