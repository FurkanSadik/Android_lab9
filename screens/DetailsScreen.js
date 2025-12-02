import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function DetailsScreen({ route, navigation }) {
  const { place, rating } = route.params;

  const message =
    rating === 5
      ? "This is a top-rated destination! ⭐"
      : "Nice place with a good rating.";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to {place}</Text>
      <Text style={styles.subtitle}>Rating: {rating} / 5</Text>
      <Text style={styles.message}>{message}</Text>

      <View style={{ height: 20 }} />

      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  message: {
    fontSize: 16,
    textAlign: "center",
  },
});
