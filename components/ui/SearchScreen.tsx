import { View, Text, FlatList, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";

import CartBtn from "./CartBtn";
import MenuItemCard from "./MenuItemCard";
import { MenuItem } from "@/types/types";

type Props = {
  data: MenuItem[];
};

export default function SearchScreen({ data }: Props) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.name}
      numColumns={2}
      contentContainerStyle={tw`p-4`}
      columnWrapperStyle={tw`justify-between`}
      ListHeaderComponent={
        <View style={tw`mb-5`}>
         
          <View
            style={tw`flex-row items-center bg-gray-100 shadow rounded-xl px-3 h-12`}
          >
            <Ionicons name="search" size={20} color="#666" />

            <TextInput
              placeholder="Search for food..."
              placeholderTextColor="gray"
              editable={false}
              style={tw`flex-1 ml-3 rounded-full`}
            />

          </View>

         <View style={tw`flex-row justify-between items-center mt-2 `}>
           <TouchableOpacity
            style={tw`mt-3 self-start bg-gray-200 px-4 py-2 rounded-full`}
          >
            <Text style={tw`text-base font-medium text-gray-800`}>
              Filters
            </Text>
          </TouchableOpacity>
            <CartBtn />
         </View>
         

          
          <Text style={tw`mt-5 text-2xl font-bold text-black`}>
            Search Results
          </Text>
        </View>
      }
      renderItem={({ item  , index}) => (
   
        <MenuItemCard item={item} index={index}/>
   
      )}
    />
  );
}