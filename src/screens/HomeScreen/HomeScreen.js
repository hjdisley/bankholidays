import React, { useState } from "react";
import { Text } from "react-native";
import Header from "../../components/Header/Header";
import DivisionDropdown from "../../components/DivisionDropdown/DivisionDropdown";
import { SafeAreaView } from "react-native-safe-area-context";
import useFetchData from "../../hooks/useFetchData";
import { HStack, Spinner, Heading, Center } from "native-base";
import BankHolidayCard from "../../components/BankHolidayCard/BankHolidayCard";

export default function HomeScreen({ navigation }) {
  const [selectedDivision, setSelectedDivision] = useState("England And Wales");

  const { data, isLoading, error } = useFetchData(
    "https://www.gov.uk/bank-holidays.json"
  );

  if (isLoading) {
    return (
      <HStack space={2} justifyContent="center">
        <Spinner accessibilityLabel="Loading Bank Holidays" />
        <Heading color="#583DFF" fontSize="md">
          Loading...
        </Heading>
      </HStack>
    );
  }

  if (error) {
    <HStack space={2} justifyContent="center">
      <Heading color="red" fontSize="md">
        Error
      </Heading>
    </HStack>;
  }

  return (
    <SafeAreaView>
      <Header />
      <DivisionDropdown
        testID="DivisionDropdown"
        divisions={Object.keys(data)}
        selectedDivision={selectedDivision}
        setSelectedDivision={setSelectedDivision}
      />
      <Center>
        <Text style={{ fontSize: 25, fontWeight: "bold", marginBottom: 20 }}>
          Upcoming Holidays
        </Text>
      </Center>

      {data &&
        !isLoading &&
        data[selectedDivision]?.map((holiday, i) => {
          return (
            <Center>
              <BankHolidayCard
                data={data[selectedDivision]}
                navigation={navigation}
                key={i + holiday.title + holiday.date}
                holiday={holiday}
              />
            </Center>
          );
        })}
    </SafeAreaView>
  );
}
