import { View, Text, FlatList, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { MenuItem } from "@/lib/seed";
import CartBtn from "./CartBtn";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  data: MenuItem[];
};

export default function SearchScreen({ data }: Props) {
  return (
    <FlatList
      data={data}
      numColumns={2}
    //   keyExtractor={(item) => item.$id}
      contentContainerStyle={{ padding: 16 }}
      columnWrapperStyle={{ justifyContent: "space-between" }}
      ListHeaderComponent={
        <View style={{ marginBottom: 20 }}>
         
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#f3f3f3",
              borderRadius: 12,
              paddingHorizontal: 12,
              height: 48,
            }}
          >
            <Ionicons name="search" size={20} color="#666" />

            <TextInput
              placeholder="Search for food..."
              placeholderTextColor={"gray"}
              editable={false} 
              style={{
                flex: 1,
                marginLeft: 10,
                borderRadius:20,
              }}
            />

            <CartBtn />
          </View>

          
          <TouchableOpacity
            style={{
              marginTop: 12,
              backgroundColor: "#eee",
              alignSelf: "flex-start",
              paddingHorizontal: 14,
              paddingVertical: 8,
              borderRadius: 20,
            }}
          >
            <Text>Filters</Text>
          </TouchableOpacity>

          
          <Text
            style={{
              fontSize: 22,
              fontWeight: "700",
              marginTop: 20,
            }}
          >
            Search Results
          </Text>
        </View>
      }
      renderItem={({ item }) => {
        return (
            <View
            style={{
                width: "48%",
                height: 180,
                backgroundColor: "#fafafa",
                borderRadius: 12,
                marginBottom: 16,
                justifyContent: "center",
                alignItems: "center",
            }}
            >
            <Text>{item.name}</Text>
          </View>
        );
      }}
    />
  );
}