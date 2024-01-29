import { FlatList, SafeAreaView, StatusBar} from 'react-native';
import Person from './scr/components/Person/Person';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';

export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const peopleList = [
    {id: '1', name: 'Mauricio', age: '18'},
    {id: '2', name: 'Isabella', age: '19'},
    {id: '3', name: 'Clara', age: '20'},
    {id: '4', name: 'Julia', age: '16'},
    {id: '5', name: 'Vitoria', age: '16'},
  ]
  return (
    <SafeAreaView>
      <StatusBar />
    {/* usando flatList */}
    <FlatList 
    data={peopleList}
    keyExtractor={(item) => item.id}

    renderItem={({item}) => (
      //exigir cada item da lista
      <Person name={item.name} age={item.age} />
    )}
    />

    </SafeAreaView>
  );
}
