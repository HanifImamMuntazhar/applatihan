import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const Stack = createStackNavigator();

// Data teman
const dataTeman = [
  { id: 1, nama: "AGES GELAR PANGESTU", nim: "2230511047", noHp: "085724768850", email: "agesgelar7@gmail.com" },
  { id: 2, nama: "GIBRAN GENTA RABBANI", nim: "2230511048", noHp: "081382929054", email: "gibrangentarabbani@gmail.com" },
  { id: 3, nama: "M FAREL ABDILLAH", nim: "2230511049", noHp: "087701359915", email: "farelabdillah2016@gmail.com" },
  { id: 4, nama: "FAJAR BUDIMAN", nim: "2230511050", noHp: "085758225942", email: "fbudiman880@gmail.com" },
  { id: 5, nama: "MOH ABDI HAFIDZ FADILAH", nim: "2230511051", noHp: "085732146196", email: "abdihafidz340@gmail.com" },
  { id: 6, nama: "RIZKY MAULANA YUSUF", nim: "2230511054", noHp: "081388946480", email: "rizkymaulanayusuf1945@gmail.com" },
  { id: 7, nama: "ERI ZULFAN DIWANI", nim: "2230511055", noHp: "085795769727", email: "eizul44@gmail.com" },
  { id: 8, nama: "SILVY DENIA PUTRI", nim: "2230511056", noHp: "085694956417", email: "silvydenia402@gmail.com" },
  { id: 9, nama: "RAKA WAHYU SAGARA", nim: "2230511057", noHp: "081219852211", email: "rakaws122@gmail.com" },
  { id: 10, nama: "NUR INSAN SUBEKTI", nim: "2230511058", noHp: "081316742795", email: "nurinsan2712@gmail.com" },
  { id: 11, nama: "FAUZIA NURAFNI", nim: "2230511059", noHp: "0895809245080", email: "fauzianurafni026@gmail.com" },
  { id: 12, nama: "HANIF IMAM MUNTAZHAR", nim: "2230511060", noHp: "083894443344", email: "hanifimam2001@gmail.com" },
  { id: 13, nama: "ASRI NUR KHOLIDAH", nim: "2230511062", noHp: "085721552296", email: "asrinurkholidah@gmail.com" },
  { id: 14, nama: "RESTU GEDE PURNAMA", nim: "2230511063", noHp: "081383372981", email: "restumelenoy83@gmail.com" },
  { id: 15, nama: "MAULANA IFNU SYAFI", nim: "2230511064", noHp: "081563890525", email: "ifnusyafi@gmail.com" },
  { id: 16, nama: "NADIA PUTRI RAHMAWATI", nim: "2230511065", noHp: "081281172165", email: "nadiaputrirahman@gmail.com" },
  { id: 17, nama: "RAFDY FAUZAN ILHAM FIRDAUS", nim: "2230511066", noHp: "081296876396", email: "rafdyfauzan57@gmail.com" },
  { id: 18, nama: "MUHAMMAD FADLAN SYUHADA", nim: "2230511067", noHp: "083893026231", email: "mfadlan703@gmail.com" },
  { id: 19, nama: "ARIP", nim: "2230511068", noHp: "08980520407", email: "arifsuanto3@gmail.com" },
  { id: 20, nama: "ARYA PANGESTU", nim: "2230511069", noHp: "081317706229", email: "aryap309@gmail.com" },
  { id: 21, nama: "MOHAMMAD SAMANI KAMIL", nim: "2230511071", noHp: "085794306200", email: "samanikamil2@gmail.com" },
  { id: 22, nama: "LUTHFI FAUZAN ACHMAD", nim: "2230511073", noHp: "085862354347", email: "lfachmad28@gmail.com" },
  { id: 23, nama: "SYALWA FIDA WIFA", nim: "2230511074", noHp: "085524850478", email: "fidawifa@gmail.com" },
  { id: 24, nama: "FERI IRAWAN", nim: "2230511075", noHp: "085793902926", email: "feri186irawan@gmail.com" },
  { id: 25, nama: "M. ARIZKI", nim: "2230511076", noHp: "0895405944337", email: "muhammadarizky8215@gmail.com" }
];

// Halaman Utama
function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.judul}>Aplikasi Daftar Teman</Text>
        {dataTeman.map((teman) => (
          <TouchableOpacity
            key={teman.id}
            style={styles.temanContainer}
            onPress={() => navigation.navigate('Detail', { teman })}
          >
            <Text>{teman.id}. {teman.nama}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

// Halaman Detail
function DetailScreen({ route }) {
  const { teman } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.judul}>Detail Informasi</Text>
      <Text>Nama: {teman.nama}</Text>
      <Text>NIM: {teman.nim}</Text>
      <Text>No. HP: {teman.noHp}</Text>
      <Text>Email: {teman.email}</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Daftar Teman' }} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Detail Teman' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    padding: 20,
  },
  judul: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  temanContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
