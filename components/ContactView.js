import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Item = ({ contact, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate("Details", { contact })}
    >
      <Icon name="ios-person" size={40} color="#000" />
      <Text style={styles.title}>{contact.name}</Text>
    </TouchableOpacity>
  );
};
export default Item;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 2,
    borderColor: "",
    borderWidth: 0,
    borderRadius: 10,
    flexDirection: "row",
  },
  title: {
    marginLeft: 20,
    fontSize: 20,
  },
});