import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import * as Contacts from "expo-contacts";
import ContactsArr from "./components/ContactsArr";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Detail from "./components/Detail";

const Stack = createNativeStackNavigator();
export default function App(props) {
  const [contacts, setContacts] = useState();
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });
        if (data.length > 0) {
          setContacts(data);
        }
      }
    })();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Contacts"
          options={{
            headerStyle: {
              backgroundColor: "#475569",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontSize: 24,
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
          }}
        >
          {(props) => <ContactsArr {...props} contacts={contacts} />}
        </Stack.Screen>
        <Stack.Screen
          name="Details"
          component={Detail}
          options={{
            headerStyle: {
              backgroundColor: "#475569",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontSize: 24,
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}