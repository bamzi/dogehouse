import React from "react";
import { StyleSheet, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeaderBase } from "../components/header/HeaderBase";
import { TitledHeader } from "../components/header/TitledHeader";
import { MessageElement } from "../components/MessageElement";
import { colors, fontFamily } from "../constants/dogeStyle";

const messageMocks = [
  {
    ts: Date.now() / 1000,
    text: "This is a good day to die",
  },
  {
    ts: Date.now() / 1000,
    text: "Life is amazing",
  },
  {
    ts: Date.now() / 1000,
    text: "Hey, I just met you, that wonderful how far we can go together",
  },
  {
    ts: Date.now() / 1000,
    text:
      "RNCAsyncStorage, RNCMaskedView, RNGestureHandler, RNInAppBrowser, RNReanimated, RNScreens",
  },
  {
    ts: Date.now() / 1000,
    text:
      "Resolving packages...[2/4] 🚚  Fetching packages...[3/4] 🔗  Linking dependencies...",
  },
  {
    ts: Date.now() / 1000,
    text:
      "Pod installation complete! There are 58 dependencies from the Podfile and 49 total pods installed.",
  },
];

const userMocks = {
  username: "DrMadTurkey",
  avatar: require("../assets/images/100.png"),
  isOnline: true,
};

export const MessagesPage: React.FC = () => {
  return (
    <>
      <TitledHeader title={"Messages"} showBackButton={true} />
      <ScrollView style={styles.scrollView}>
        <MessageElement user={userMocks} msg={messageMocks[0]} />
        <MessageElement user={userMocks} msg={messageMocks[1]} />
        <MessageElement user={userMocks} msg={messageMocks[2]} />
        <MessageElement user={userMocks} msg={messageMocks[3]} />
        <MessageElement user={userMocks} msg={messageMocks[4]} />
        <MessageElement user={userMocks} msg={messageMocks[5]} />
        <MessageElement user={userMocks} msg={messageMocks[0]} />
        <MessageElement user={userMocks} msg={messageMocks[1]} />
        <MessageElement user={userMocks} msg={messageMocks[2]} />
        <MessageElement user={userMocks} msg={messageMocks[3]} />
        <MessageElement user={userMocks} msg={messageMocks[4]} />
        <MessageElement user={userMocks} msg={messageMocks[5]} />
        <MessageElement user={userMocks} msg={messageMocks[0]} />
        <MessageElement user={userMocks} msg={messageMocks[1]} />
        <MessageElement user={userMocks} msg={messageMocks[2]} />
        <MessageElement user={userMocks} msg={messageMocks[3]} />
        <MessageElement user={userMocks} msg={messageMocks[4]} />
        <MessageElement user={userMocks} msg={messageMocks[5]} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: colors.primary900,
    paddingHorizontal: 25,
    paddingTop: 10,
  },
});
