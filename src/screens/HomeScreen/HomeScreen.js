import { View, Text, Button } from "react-native";
import React from "react";
import Header from "../../components/Header/Header";
import CountryDropdown from "../../components/CountryDropdown/CountryDropdown";
import { SafeAreaView } from "react-native-safe-area-context";
import useFetchData from "../../hooks/useFetchData";

export default function HomeScreen({ navigation }) {
  const { data, isLoading, error } = useFetchData(
    "https://www.gov.uk/bank-holidays.json"
  );

  return (
    <SafeAreaView>
      <Header />
      <CountryDropdown />
      <Button
        testID="button"
        title="Edit"
        onPress={() => navigation.navigate("Edit")}
      ></Button>
    </SafeAreaView>
  );
}
