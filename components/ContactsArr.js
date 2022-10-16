import { FlatList, View } from "react-native";
import Item from "./ContactView";
import { SearchBar } from "react-native-elements";
import { useEffect, useState } from "react";

export default function ContactsArr({ contacts, navigation }) {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(contacts || []);
  const renderItem = ({ item }) => (
    <Item contact={item} navigation={navigation} />
  );
  useEffect(() => {
    setData(contacts);
  }, [contacts]);
  const updateSearch = (search) => {
    setSearch(search);
    if (search === "") {
      setData(contacts);
      return;
    }
    const filter = contacts.filter((d) => {
      const name = search.toUpperCase();
      return d.name.toUpperCase().indexOf(name) > -1;
    });
    setData(filter);
  };
  return (
    <View>
      <SearchBar
        placeholder="Search Contacts"
        onChangeText={updateSearch}
        value={search}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}