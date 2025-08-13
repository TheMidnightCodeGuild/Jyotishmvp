import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function MoreScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <ScrollView className="flex-1 bg-white dark:bg-gray-900">
      <View className="px-6 py-8">
        <View className="mb-8">
          <Text className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
            More Options
          </Text>
          <Text className="text-gray-600 dark:text-gray-300">
            Additional features and settings
          </Text>
        </View>

        <View className="mb-8">
          <Text className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Tools & Services
          </Text>
          <View className="space-y-4">
            <TouchableOpacity className="bg-blue-500 p-4 rounded-lg">
              <Text className="text-white font-semibold text-lg">
                Gemstone Recommendations
              </Text>
              <Text className="text-blue-100 text-sm">
                Find your lucky stones
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-purple-500 p-4 rounded-lg">
              <Text className="text-white font-semibold text-lg">
                Muhurat Calculator
              </Text>
              <Text className="text-purple-100 text-sm">
                Find auspicious timings
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-green-500 p-4 rounded-lg">
              <Text className="text-white font-semibold text-lg">
                Vastu Shastra
              </Text>
              <Text className="text-green-100 text-sm">
                Home and office guidance
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-orange-500 p-4 rounded-lg">
              <Text className="text-white font-semibold text-lg">Remedies</Text>
              <Text className="text-orange-100 text-sm">
                Astrological solutions
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="mb-8">
          <Text className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Settings
          </Text>
          <View className="space-y-3">
            <TouchableOpacity className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <Text className="text-gray-800 dark:text-white font-medium">
                Profile Settings
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <Text className="text-gray-800 dark:text-white font-medium">
                Notifications
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <Text className="text-gray-800 dark:text-white font-medium">
                Privacy
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <Text className="text-gray-800 dark:text-white font-medium">
                Language
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="mb-8">
          <Text className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Support
          </Text>
          <View className="space-y-3">
            <TouchableOpacity className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <Text className="text-gray-800 dark:text-white font-medium">
                Help & FAQ
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <Text className="text-gray-800 dark:text-white font-medium">
                Contact Us
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <Text className="text-gray-800 dark:text-white font-medium">
                Rate App
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <Text className="text-gray-800 dark:text-white font-medium">
                About
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <TouchableOpacity className="bg-red-500 p-4 rounded-lg">
            <Text className="text-white font-semibold text-center">Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
