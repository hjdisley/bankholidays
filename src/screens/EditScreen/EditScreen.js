import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, Image } from "react-native";
import {
  HStack,
  AspectRatio,
  Box,
  Center,
  Stack,
  Heading,
  Checkbox,
  TextArea,
  Button,
  Flex,
} from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import moment from "moment";
import { bankHolidaImageRef } from "../../static/static";

export default function EditScreen({ route: { params } }) {
  const [localBunting, setLocalBunting] = useState(params.holiday.bunting);
  const [localNotes, setLocalNotes] = useState(params.holiday.notes);

  const { goBack } = useNavigation();

  const handleSave = () => {
    const holidayToChange = params.data.find(
      (item) => item.title === params.holiday.title
    );

    holidayToChange.bunting = localBunting;
    holidayToChange.notes = localNotes;
    params.setBunting(localBunting);
    params.setNotes(localNotes);

    goBack();

    return { ...params.holidayToChange, holidayToChange };
  };

  return (
    <Center style={{ marginTop: "25%" }}>
      <Box alignItems="center">
        <Box
          maxW="80"
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700",
          }}
          _light={{
            backgroundColor: "gray.50",
          }}
        >
          <Box>
            <AspectRatio w="100%" ratio={16 / 9}>
              <Image
                source={{
                  uri: bankHolidaImageRef[params.holiday.title],
                }}
                alt="image"
              />
            </AspectRatio>
          </Box>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1">
                {params.holiday.title}
              </Heading>
              <HStack alignItems="center">
                <Text
                  style={{
                    fontStyle: "italic",
                    color: "grey",
                    marginBottom: 5,
                  }}
                >
                  {moment(params.holiday.date).format("dddd Do MMMM YYYY")}
                </Text>
              </HStack>
              <Flex direction="row">
                <Checkbox
                  defaultIsChecked={localBunting}
                  value={localBunting}
                  onChange={() => setLocalBunting(!localBunting)}
                  accessibilityLabel="Bunting Checkbox"
                />
                <Text style={{ paddingLeft: 10 }}>Bunting</Text>
              </Flex>
            </Stack>
            <Box alignItems="center" w="100%">
              <TextArea
                testID="textArea"
                h={150}
                placeholder={"Notes..."}
                value={localNotes}
                onChangeText={(text) => setLocalNotes(text)}
                w="90%"
                maxW="300"
              />
            </Box>
            <HStack
              alignItems="center"
              space={4}
              justifyContent="space-between"
            ></HStack>
            <Button
              testID="saveButton"
              onPress={handleSave}
              colorScheme={"purple"}
              leftIcon={<FontAwesome name="save" size={24} color="white" />}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>Save</Text>
            </Button>
          </Stack>
        </Box>
      </Box>
    </Center>
  );
}
