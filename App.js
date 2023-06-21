import LoadingScreen from './app/pages/loadingScreen';
import {StyleSheet} from 'react-native';

export default function App() {
  return (
    <LoadingScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', 
  },
});
