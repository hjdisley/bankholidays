import React, { useState } from "react";
import { Select, FormControl, Center, Box } from "native-base";
import { Entypo } from "@expo/vector-icons";

export default function DivisionDropdown({
  divisions,
  setSelectedDivision,
  selectedDivision,
}) {
  return (
    <Center>
      <Box w="3/4" maxW="300">
        <FormControl>
          <Select
            fontSize={20}
            selectedValue={selectedDivision}
            maxWidth="300"
            onValueChange={(value) => setSelectedDivision(value)}
            accessibilityLabel="Choose Division"
            _selectedItem={{
              bg: "#583DFF",
              color: "white",
            }}
            dropdownIcon={
              <Entypo name="select-arrows" size={20} color="#583DFF" />
            }
            mt={1}
            mb={3}
          >
            {divisions.map((division, i) => (
              <Select.Item key={i} value={division} label={division} />
            ))}
          </Select>
        </FormControl>
      </Box>
    </Center>
  );
}
