import { Slot } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from "react-native";
import tw from "@/lib/tw";
import { images } from "@/constants";

export default function AuthLayout() {
  return (
    <KeyboardAvoidingView
      style={tw`flex-1`}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={tw`flex-grow`}
        keyboardShouldPersistTaps="handled"
      >
        <View
          style={{
            height: Dimensions.get("window").height / 2.8,
            position: "relative",
          }}
        >
          <View style={tw`w-full h-full rounded-2xl overflow-hidden`}>
            <ImageBackground
              source={images.loginGraphic}
              resizeMode="cover"
              style={tw`flex-1`}
            />
          </View>
          <Image
            source={images.logo}
            style={tw`size-30 bg-orange-200 rounded-full self-center absolute -bottom-6`}
            resizeMode="contain"
          />
        </View>

        <View style={tw`flex-1 pt-6 px-2`}>
          <Slot />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
