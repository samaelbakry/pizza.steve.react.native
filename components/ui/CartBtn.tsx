import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import tw from "@/lib/tw";
import { images } from "@/constants";

export default function CartBtn() {
  const totalNoItems = 10;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={tw`
       size-12
        rounded-full
        bg-zinc-400
        items-center
        justify-center
        shadow-sm
        border border-gray-300
      `}
    >
      <Image source={images.bag} resizeMode="contain" style={tw`size-6`} />

      {totalNoItems > 0 && (
        <View
          style={tw`
            absolute
            -top-1
            -right-1
            min-w-5
            h-5
            px-1
            rounded-full
            bg-primary
            items-center
            justify-center
          `}
        >
          <Text
            style={[
              tw`text-white text-[11px]`,
              { fontFamily: "Quicksand-Bold" },
            ]}
          >
            {totalNoItems > 99 ? "99+" : totalNoItems}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
}
