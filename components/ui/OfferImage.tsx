import React, { useState } from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import { Image, ImageStyle } from "expo-image";

type ImageType = "offer" | "menu";

const styles: Record<ImageType,{
    container: StyleProp<ViewStyle>;
    image: StyleProp<ImageStyle>;
    loading: StyleProp<ViewStyle>;
  }> = {
  offer: {
    container: {
      width: "50%",
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      width: 220,
      height: 220,
    },
    loading: {
      position: "absolute",
      width: 160,
      height: 160,
      borderRadius: 80,
      backgroundColor: "#f3f4f6",
    },
  },

  menu: {
    container: {
      position: "absolute",
      top: -5,
      right:-50
    },
    image: {
      width: 100,
      height: 100,
    },
    loading: {
      position: "absolute",
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: "#f3f4f6",
      elevation: 3,
    },
  },
};

type Props = {
  source: any;
  type: ImageType;
};

export default function OfferImage({ source, type }: Props) {
  const [loading, setLoading] = useState(true);

  const style = styles[type];

  return (
    <View style={style.container}>
      {loading && <View style={style.loading} />}

      <Image
        source={source}
        style={style.image}
        contentFit="contain"
        cachePolicy="memory-disk"
        transition={250}
        onLoadEnd={() => setLoading(false)}
      />
    </View>
  );
}