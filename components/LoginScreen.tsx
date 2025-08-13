import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const { height: screenHeight } = Dimensions.get("window");

export default function LoginScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!mobileNumber.trim() || !password.trim()) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    if (mobileNumber.length < 10) {
      Alert.alert("Error", "Please enter a valid mobile number");
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      router.replace("/auth/onboarding");
    }, 2000);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1"
      style={{ minHeight: screenHeight }}
    >
      {/* Gradient Background */}
      <View className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          minHeight: screenHeight,
          paddingVertical: Platform.OS === "android" ? 20 : 0,
        }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View className="flex-1 justify-center px-6 sm:px-8 md:px-10">
          {/* Header */}
          <View className="items-center mb-10 sm:mb-12 md:mb-16">
            {/* Logo with gradient */}
            <View className="relative mb-6">
              <View className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full items-center justify-center shadow-2xl">
                <Text className="text-white text-2xl sm:text-3xl font-bold">
                  J
                </Text>
              </View>
              <View className="absolute -inset-1 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full opacity-30 blur-sm" />
            </View>

            <Text className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-3 text-center tracking-tight">
              Welcome Back
            </Text>
            <Text className="text-gray-600 dark:text-gray-300 text-center text-base sm:text-lg px-4 leading-relaxed">
              Sign in to continue your cosmic journey
            </Text>
          </View>

          {/* Login Form Container */}
          <View className="w-full max-w-md mx-auto">
            <View className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/20 dark:border-gray-700/30">
              <View className="space-y-6">
                {/* Mobile Number Input */}
                <View>
                  <Text className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 ml-1">
                    Mobile Number
                  </Text>
                  <View className="relative">
                    <TextInput
                      className="w-full h-14 px-4 pl-12 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-base focus:border-blue-500 dark:focus:border-blue-400"
                      placeholder="Enter your mobile number"
                      placeholderTextColor={
                        colorScheme === "dark" ? "#9CA3AF" : "#6B7280"
                      }
                      value={mobileNumber}
                      onChangeText={setMobileNumber}
                      keyboardType="phone-pad"
                      maxLength={10}
                      style={{
                        elevation: Platform.OS === "android" ? 4 : 0,
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.1,
                        shadowRadius: 8,
                      }}
                    />
                    <View className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      <Text className="text-gray-400 dark:text-gray-500 text-lg">
                        📱
                      </Text>
                    </View>
                  </View>
                </View>

                {/* Password Input */}
                <View>
                  <Text className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 ml-1">
                    Password
                  </Text>
                  <View className="relative">
                    <TextInput
                      className="w-full h-14 px-4 pl-12 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-base focus:border-blue-500 dark:focus:border-blue-400"
                      placeholder="Enter your password"
                      placeholderTextColor={
                        colorScheme === "dark" ? "#9CA3AF" : "#6B7280"
                      }
                      value={password}
                      onChangeText={setPassword}
                      secureTextEntry
                      style={{
                        elevation: Platform.OS === "android" ? 4 : 0,
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.1,
                        shadowRadius: 8,
                      }}
                    />
                    <View className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      <Text className="text-gray-400 dark:text-gray-500 text-lg">
                        🔒
                      </Text>
                    </View>
                  </View>
                </View>

                {/* Submit Button */}
                <TouchableOpacity
                  className={`w-full h-14 rounded-xl items-center justify-center mt-8 ${
                    isLoading
                      ? "bg-gray-300 dark:bg-gray-600"
                      : "bg-gradient-to-r from-blue-600 to-purple-600"
                  }`}
                  onPress={handleLogin}
                  disabled={isLoading}
                  style={{
                    elevation: Platform.OS === "android" ? 6 : 0,
                    shadowColor: isLoading ? "#000" : "#3B82F6",
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: isLoading ? 0.1 : 0.3,
                    shadowRadius: 12,
                  }}
                >
                  <Text className="text-white bg-black p-4 rounded-2xl font-bold text-lg tracking-wide">
                    {isLoading ? "Signing In..." : "Sign In"}
                  </Text>
                </TouchableOpacity>

                {/* Forgot Password Link */}
                <TouchableOpacity className="items-center mt-6">
                  <Text className="text-blue-600 dark:text-blue-400 text-base font-medium">
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Footer */}
          <View className="mt-8 items-center">
            <Text className="text-gray-500 dark:text-gray-400 text-sm">
              Don&apos;t have an account?{" "}
              <Text className="text-blue-600 dark:text-blue-400 font-medium">
                Sign Up
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
