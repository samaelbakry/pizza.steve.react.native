import { images, offers } from "@/constants";
import React, { Fragment } from "react";
import { Image } from "expo-image";
import {
  FlatList,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "@/lib/tw";
import CartBtn from "./CartBtn";
import OfferImage from "./OfferImage";

export default function MenuCards() {
  return (
    <>
      <FlatList
        data={offers}
        ListHeaderComponent={() => (
          <View style={tw`flex-row items-center justify-between px-4 py-2`}>
            <View>
              <Text style={tw`text-primary text-lg font-quicksand-bold`}>
                Deliver to
              </Text>

              <TouchableOpacity style={tw`flex-row items-center mt-1`}>
                <Text style={tw`text-dark-100 font-quicksand-medium`}>
                  Cairo
                </Text>

                <Image
                  source={images.arrowDown}
                  resizeMode="contain"
                  style={tw`w-3 h-3 ml-1`}
                />
              </TouchableOpacity>
            </View>

            <CartBtn />
          </View>
        )}
        keyExtractor={(item) => item.title}
        renderItem={({ item, index }) => {
          let isEven = index % 2 === 0;
          return (
            <View style={tw`my-2`}>
              <Pressable
                style={[
                  tw` rounded-3xl overflow-hidden ${isEven ? " flex-row-reverse" : "flex-row"} items-center px-4 h-40`,
                  { backgroundColor: item.color },
                ]}
              >
                {({ pressed }) => (
                  <Fragment>
                    <View style={tw`w-1/2 items-center justify-center gap-3`}>
                      <OfferImage source={item.image} type="offer" />
                    </View>

                    <View style={tw`flex-1 justify-center mx-3`}>
                      <Text
                      
                        style={[
                          tw`text-white text-xl`,
                          { fontFamily: "Quicksand-Bold" },
                          
                        ]}
                      >
                        {item.title}
                      </Text>
                      <Text
                        style={[
                          tw`text-white/80 mt-1 text-sm`,
                          { fontFamily: "Quicksand-Medium" },
                        ]}
                      >
                        Explore now
                      </Text>
                      <Image
                        source={images.arrowRight}
                        tintColor={"#ffffff"}
                        style={tw`size-10`}
                        resizeMode="contain"
                      />
                    </View>
                  </Fragment>
                )}
              </Pressable>
            </View>
          );
        }}
      />
    </>
  );
}
