import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Detail = ({ route }) => {
  const { contact } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <View style={styles.firstAlphaBox}>
          <Text style={styles.firstAlpha}>{contact.name[0]}</Text>
        </View>
        <Text style={styles.name}>{contact.name}</Text>
        <Text style={styles.number}>{contact.phoneNumbers[0].number}</Text>
      </View>
    </View>
  );
};

export default Detail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: "#e2e8f0",
  },
  text: {
    marginHorizontal: 10,
    backgroundColor: "#d4d4d8",
    padding: 10,
    borderRadius: 50,
    flexDirection: "column",
    alignItems: "center",
  },
  name: {
    fontSize: 30,
  },
  number: {
    fontSize: 20,
  },
  firstAlphaBox: {
    height: 120,
    width: 120,

    backgroundColor: "#D89822",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  firstAlpha: {
    textTransform: "uppercase",
    fontSize: 50,
  },
});