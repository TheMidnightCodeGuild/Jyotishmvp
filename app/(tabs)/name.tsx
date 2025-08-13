import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import React from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function NameScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <ScrollView className="flex-1 bg-white dark:bg-gray-900">
      <View className="px-6 py-8">
        <View className="mb-8">
          <Text className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
            Name Analysis
          </Text>
          <Text className="text-gray-600 dark:text-gray-300">
            Discover the hidden meaning of names
          </Text>
        </View>

        <View className="mb-8">
          <Text className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Enter Name
          </Text>
          <TextInput
            className="w-full h-12 px-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white mb-4"
            placeholder="Enter full name"
            placeholderTextColor={
              colorScheme === "dark" ? "#9CA3AF" : "#6B7280"
            }
          />
          <TouchableOpacity className="bg-blue-500 p-4 rounded-lg">
            <Text className="text-white font-semibold text-center">
              Analyze Name
            </Text>
          </TouchableOpacity>
        </View>

        <View className="mb-8">
          <Text className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Name Analysis Types
          </Text>
          <View className="space-y-4">
            <TouchableOpacity className="bg-purple-500 p-4 rounded-lg">
              <Text className="text-white font-semibold text-lg">
                Numerology
              </Text>
              <Text className="text-purple-100 text-sm">
                Numerical value and meaning
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-green-500 p-4 rounded-lg">
              <Text className="text-white font-semibold text-lg">
                Astrological
              </Text>
              <Text className="text-green-100 text-sm">
                Name based on birth chart
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-orange-500 p-4 rounded-lg">
              <Text className="text-white font-semibold text-lg">
                Personality
              </Text>
              <Text className="text-orange-100 text-sm">
                Character traits analysis
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="mb-8">
          <Text className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Recent Analysis
          </Text>
          <View className="space-y-3">
            <View className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <Text className="text-gray-800 dark:text-white font-medium">
                John Doe
              </Text>
              <Text className="text-gray-600 dark:text-gray-300 text-sm">
                Numerology: 7 - Spiritual
              </Text>
            </View>
            <View className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <Text className="text-gray-800 dark:text-white font-medium">
                Jane Smith
              </Text>
              <Text className="text-gray-600 dark:text-gray-300 text-sm">
                Numerology: 3 - Creative
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
