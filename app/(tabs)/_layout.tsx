import { Tabs } from "expo-router";
import React from "react";
import { Image, View } from "react-native";

import tw from "@/lib/tw";
import { images } from "@/constants";
import { TabBarIconProps } from "@/types/types";

const TabBarIcon = ({ focused, icon }: TabBarIconProps) => (
  <View style={tw`items-center justify-center pt-4`}>
    <View
      style={tw`size-10 items-center justify-center rounded-full shadow ${focused ? "bg-primary/10" : ""} `}
    >
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={focused ? "#FE8C00" : "#878787"}
        style={tw`size-6 `}
      />
    </View>
  </View>
);

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,

        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
        },

        tabBarStyle: {
          position: "absolute",
          left: 20,
          right: 20,
          bottom: 24,
          height: 60,
          borderRadius: 36,
          backgroundColor: "#fff8f8",
          borderTopWidth: 0,
          marginHorizontal: 6,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.08,
          shadowRadius: 20,
          elevation: 12,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon title="Home" icon={images.home} focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon title="Search" icon={images.search} focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon title="Cart" icon={images.bag} focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              title="Profile"
              icon={images.person}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}
