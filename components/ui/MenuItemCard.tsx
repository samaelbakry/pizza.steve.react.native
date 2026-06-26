import tw from "@/lib/tw";
import { MenuItem } from "@/types/types";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import OfferImage from "./OfferImage";

export default function MenuItemCard({
  item: { image_url, name, price },
  index,
}: {
  item: MenuItem;
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <TouchableOpacity
      style={tw`size-40 p-1 bg-gray-50 rounded-xl mb-4 items-center justify-center ${isEven ? "mt-10" : "mt-0"} mb-5`}
    >
      <View style={tw`absolute -top-12`}>
        <OfferImage source={image_url} type="menu" />
      </View>
      <View style={tw`items-center mt-7 px-2`}>
        <Text
          style={tw`text-base font-quicksand-bold text-dark-100 text-center`}
          numberOfLines={1}
        >
          {name}
        </Text>

        <Text style={tw`text-lg font-quicksand-bold text-primary`}>
          {price} <Text style={tw`text-sm text-gray-500`}>EGP</Text>
        </Text>

        <TouchableOpacity
          activeOpacity={0.8}
          style={tw`mt-3 bg-primary rounded-full px-4 py-2`}
        >
          <Text style={tw`text-white text-sm font-quicksand-bold`}>
            + Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
