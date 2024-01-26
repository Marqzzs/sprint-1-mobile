import { SafeAreaView, StatusBar} from 'react-native';
import Person from './scr/components/Person/Person';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />

      <Person name={'Mauricio'} age={'18'}/>
      <Person name={'Isabella'} age={'19'}/>
      <Person name={'Clara'} age={'20'}/>
      <Person name={'Julia'} age={'17'}/>

    </SafeAreaView>
  );
}
