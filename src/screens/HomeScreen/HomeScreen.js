import { View, Text, Button } from "react-native";
import React from "react";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        testID="button"
        title="Edit"
        onPress={() => navigation.navigate("Edit")}
      ></Button>
    </View>
  );
}
