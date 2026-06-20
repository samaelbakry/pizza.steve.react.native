import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "px-2",
}: ContainerProps) {
  return (
    <SafeAreaView edges={["top"]} style={tw`flex-1 py-2 bg-gray-100`}>
      <View style={tw.style("flex-1", className)}>
        {children}
      </View>
    </SafeAreaView>
  );
}