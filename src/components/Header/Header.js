import { View, Text } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
        marginTop: 20,
      }}
    >
      <Text style={{ fontSize: 40, fontWeight: "bold" }}>Bank Holidays</Text>
    </View>
  );
}
