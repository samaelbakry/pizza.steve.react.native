import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import tw from "@/lib/tw";
import { Link } from "expo-router";

interface AuthFormProps {
  type: "signin" | "signup";
}

export default function AuthForm({ type }: AuthFormProps) {
  const isSignIn = type === "signin";

  return (
    <View
      style={tw`bg-white border border-zinc-200 rounded-3xl px-5 py-6 shadow`}
    >
   
      <Text style={tw`text-2xl text-primary font-quicksand-bold`}>
        {isSignIn ? "Welcome Back 👋" : "Create Account 🚀"}
      </Text>

      <Text
        style={tw`text-gray-100 font-quicksand mt-2 mb-8`}
      >
        {isSignIn
          ? "Sign in to continue ordering your favorite meals."
          : "Create your account and start ordering today."}
      </Text>

      {!isSignIn && (
        <View style={tw`mb-4`}>
          <Text style={tw`mb-2 font-quicksand-semibold text-dark-100`}>
            Full Name
          </Text>

          <TextInput
            placeholder="Enter your name"
            style={tw`border border-zinc-200 rounded-xl px-4 py-3 font-quicksand`}
            placeholderTextColor="#878787"
          />
        </View>
      )}

     
      <View style={tw`mb-4`}>
        <Text style={tw`mb-2 font-quicksand-semibold text-dark-100`}>
          Email
        </Text>

        <TextInput
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
          style={tw`border border-zinc-200 rounded-xl px-4 py-3 font-quicksand`}
          placeholderTextColor="#878787"
        />
      </View>

     
      <View style={tw`mb-6`}>
        <Text style={tw`mb-2 font-quicksand-semibold text-dark-100`}>
          Password
        </Text>

        <TextInput
          placeholder="Enter your password"
          secureTextEntry
          style={tw`border border-zinc-200 rounded-xl px-4 py-3 font-quicksand`}
          placeholderTextColor="#878787"
        />
      </View>

      <TouchableOpacity
        style={tw`bg-orange-500 rounded-2xl py-4 items-center`}
      >
        <Text style={tw`text-white font-quicksand-bold text-base`}>
          {isSignIn ? "Sign In" : "Create Account"}
        </Text>
      </TouchableOpacity>

      <View style={tw`flex-row justify-center mt-5`}>
        <Text style={tw`font-quicksand text-gray-100`}>
          {isSignIn
            ? "Don't have an account?"
            : "Already have an account?"}
        </Text>

        <Link href={isSignIn ? "/(auth)/SignUp" : "/(auth)/SignIn"}
          style={tw`ml-1 text-primary font-quicksand-bold`}
        >
          <Text>{isSignIn ? "Sign Up" : "Sign In"}</Text>
        </Link>
      </View>
    </View>
  );
}