import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function OnboardingScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleContinue = async () => {
    if (!name.trim() || !gender || !dateOfBirth.trim()) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    if (name.trim().length < 2) {
      Alert.alert("Error", "Please enter a valid name (at least 2 characters)");
      return;
    }

    setIsLoading(true);

    // Simulate API call to save onboarding data
    setTimeout(() => {
      setIsLoading(false);
      Alert.alert("Success", "Profile created successfully!", [
        {
          text: "OK",
          onPress: () => router.replace("/(tabs)"),
        },
      ]);
    }, 2000);
  };

  const selectGender = (selectedGender: string) => {
    setGender(selectedGender);
  };

  return (
    <ScrollView className="flex-1 bg-white dark:bg-gray-900">
      <View className="flex-1 px-6 py-8">
        {/* Header */}
        <View className="items-center mb-8">
          <View className="w-16 h-16 bg-blue-500 rounded-full items-center justify-center mb-4">
            <Text className="text-white text-lg font-bold">J</Text>
          </View>
          <Text className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
            Complete Your Profile
          </Text>
          <Text className="text-gray-600 dark:text-gray-300 text-center">
            Help us personalize your experience
          </Text>
        </View>

        {/* Form */}
        <View className="space-y-6">
          {/* Name Input */}
          <View>
            <Text className="text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
              Full Name
            </Text>
            <TextInput
              className="w-full h-12 px-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              placeholder="Enter your full name"
              placeholderTextColor={
                colorScheme === "dark" ? "#9CA3AF" : "#6B7280"
              }
              value={name}
              onChangeText={setName}
              autoCapitalize="words"
            />
          </View>

          {/* Gender Selection */}
          <View>
            <Text className="text-gray-700 dark:text-gray-300 text-sm font-medium mb-3">
              Gender
            </Text>
            <View className="flex-row space-x-3">
              <TouchableOpacity
                className={`flex-1 h-12 rounded-lg border-2 items-center justify-center ${
                  gender === "male"
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                    : "border-gray-300 dark:border-gray-600"
                }`}
                onPress={() => selectGender("male")}
              >
                <Text
                  className={`font-medium ${
                    gender === "male"
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Male
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className={`flex-1 h-12 rounded-lg border-2 items-center justify-center ${
                  gender === "female"
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                    : "border-gray-300 dark:border-gray-600"
                }`}
                onPress={() => selectGender("female")}
              >
                <Text
                  className={`font-medium ${
                    gender === "female"
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Female
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className={`flex-1 h-12 rounded-lg border-2 items-center justify-center ${
                  gender === "other"
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                    : "border-gray-300 dark:border-gray-600"
                }`}
                onPress={() => selectGender("other")}
              >
                <Text
                  className={`font-medium ${
                    gender === "other"
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Other
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Date of Birth Input */}
          <View>
            <Text className="text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
              Date of Birth
            </Text>
            <TextInput
              className="w-full h-12 px-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              placeholder="DD/MM/YYYY"
              placeholderTextColor={
                colorScheme === "dark" ? "#9CA3AF" : "#6B7280"
              }
              value={dateOfBirth}
              onChangeText={setDateOfBirth}
              keyboardType={
                Platform.OS === "ios" ? "numbers-and-punctuation" : "numeric"
              }
              maxLength={10}
            />
            <Text className="text-gray-500 dark:text-gray-400 text-xs mt-1">
              Format: DD/MM/YYYY (e.g., 15/03/1990)
            </Text>
          </View>

          {/* Continue Button */}
          <TouchableOpacity
            className={`w-full h-12 rounded-lg items-center justify-center mt-8 ${
              isLoading ? "bg-gray-400" : "bg-blue-500"
            }`}
            onPress={handleContinue}
            disabled={isLoading}
          >
            <Text className="text-white font-semibold text-base">
              {isLoading ? "Creating Profile..." : "Continue"}
            </Text>
          </TouchableOpacity>

          {/* Skip Option */}
          <TouchableOpacity
            className="items-center mt-4"
            onPress={() => router.replace("/(tabs)")}
          >
            <Text className="text-gray-500 dark:text-gray-400 text-sm">
              Skip for now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
