import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {useFonts}from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useEffect } from "react";

export default function RootLayout() {

  const [loaded , error] = useFonts({
    "Quicksand-Bold":require("@/assets/fonts/Quicksand-Bold.ttf"),
    "Quicksand-Medium":require("@/assets/fonts/Quicksand-Medium.ttf"),
    "Quicksand-SemiBold":require("@/assets/fonts/Quicksand-SemiBold.ttf"),
    "Quicksand-Light":require("@/assets/fonts/Quicksand-Light.ttf"),
    "Quicksand-Regular":require("@/assets/fonts/Quicksand-Regular.ttf"),
  })

  useEffect(() => {
    if(error) throw error
    if(loaded) SplashScreen.hideAsync()
  }, [loaded , error])
  
  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }} />
      <StatusBar style="dark" />
    </SafeAreaProvider>
  );
}
