import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore Destinations</Text>

      <Button
        title="Go to Paris"
        onPress={() =>
          navigation.navigate("Details", { place: "Paris", rating: 5 })
        }
      />

      <View style={styles.spacer} />

      <Button
        title="Go to London"
        onPress={() =>
          navigation.navigate("Details", { place: "London", rating: 4 })
        }
      />

      <View style={styles.spacer} />

      <Button
        title="Go to Tokyo"
        onPress={() =>
          navigation.navigate("Details", { place: "Tokyo", rating: 5 })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
  spacer: {
    height: 12,
  },
});
