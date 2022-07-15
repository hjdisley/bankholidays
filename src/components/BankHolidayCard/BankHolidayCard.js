import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import moment from "moment";
import { AntDesign } from "@expo/vector-icons";
import { Flex } from "native-base";

export default function BankHolidayCard({ holiday, navigation, data }) {
  const { title, date } = holiday;
  const [bunting, setBunting] = useState(holiday.bunting);
  const [notes, setNotes] = useState(holiday.notes);

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Edit", {
          holiday,
          data,
          bunting,
          notes,
          setBunting,
          setNotes,
        })
      }
    >
      <View
        style={{
          width: 300,
          borderRadius: 6,
          elevation: 10,
          backgroundColor: "#fff",
          shadowOffset: { width: 1, height: 1 },
          shadowColor: "#333",
          shadowOpacity: 0.3,
          shadowRadius: 2,
          marginHorizontal: 4,
          marginVertical: 6,
        }}
      >
        <View style={{ marginHorizontal: 18, marginVertical: 10 }}>
          <Text style={{ fontSize: 20, marginBottom: 10 }}>{title}</Text>
          <Flex direction="row" justifyContent="space-between">
            <Text style={{ fontStyle: "italic", color: "grey" }}>
              {moment(date).format("dddd Do MMMM YYYY")}
            </Text>
            <AntDesign
              testID="editButton"
              name="edit"
              size={25}
              color="#583DFF"
            />
          </Flex>
          {bunting && (
            <Text style={{ fontStyle: "italic", color: "#583DFF" }}>
              Bunting
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}
