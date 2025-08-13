import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { router } from "expo-router";
import React, { useEffect } from "react";
import { ActivityIndicator, Dimensions, Text, View } from "react-native";

const { height: screenHeight } = Dimensions.get("window");

export default function LoaderScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  useEffect(() => {
    // Simulate loading time and navigate to login
    const timer = setTimeout(() => {
      router.replace("/auth/login");
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <View
      className="flex-1 justify-center items-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      style={{ minHeight: screenHeight }}
    >
      {/* Gradient Background Overlay */}
      <View className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />

      <View className="items-center space-y-8 px-6">
        {/* App Logo with Gradient and Shadow */}
        <View className="relative mb-4">
          <View className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full items-center justify-center shadow-2xl">
            <Text className="text-white text-4xl font-bold tracking-wide">
              J
            </Text>
          </View>
          {/* Glowing effect */}
          <View className="absolute -inset-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full opacity-20 blur-lg" />
        </View>

        {/* App Name with Enhanced Typography */}
        <View className="items-center space-y-2">
          <Text className="text-4xl font-bold text-gray-800 dark:text-white tracking-tight">
            Jyotish
          </Text>
          <Text className="text-lg text-gray-600 dark:text-gray-300 font-medium">
            Your Cosmic Journey Awaits
          </Text>
        </View>

        {/* Loading Indicator with Enhanced Styling */}
        <View className="items-center space-y-4 mt-8">
          <View className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 dark:border-gray-700/30">
            <ActivityIndicator size="large" color={colors.tint} />
          </View>
          <Text className="text-gray-600 dark:text-gray-300 text-lg font-medium animate-pulse">
            Preparing your experience...
          </Text>
        </View>
      </View>

      {/* Floating Elements for Visual Interest */}
      <View className="absolute top-20 left-10 w-4 h-4 bg-blue-400/30 rounded-full" />
      <View className="absolute top-32 right-16 w-6 h-6 bg-purple-400/30 rounded-full" />
      <View className="absolute bottom-32 left-16 w-3 h-3 bg-indigo-400/30 rounded-full" />
      <View className="absolute bottom-20 right-10 w-5 h-5 bg-blue-300/30 rounded-full" />
    </View>
  );
}
