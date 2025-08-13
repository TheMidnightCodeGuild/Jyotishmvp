import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function ChartScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <ScrollView className="flex-1 bg-white dark:bg-gray-900">
      <View className="px-6 py-8">
        <View className="mb-8">
          <Text className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
            Astrological Charts
          </Text>
          <Text className="text-gray-600 dark:text-gray-300">
            Generate and analyze your birth chart
          </Text>
        </View>

        <View className="mb-8">
          <Text className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Chart Types
          </Text>
          <View className="space-y-4">
            <TouchableOpacity className="bg-indigo-500 p-4 rounded-lg">
              <Text className="text-white font-semibold text-lg">
                Birth Chart (Natal)
              </Text>
              <Text className="text-indigo-100 text-sm">
                Your personal astrological blueprint
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-pink-500 p-4 rounded-lg">
              <Text className="text-white font-semibold text-lg">
                Synastry Chart
              </Text>
              <Text className="text-pink-100 text-sm">
                Relationship compatibility analysis
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-teal-500 p-4 rounded-lg">
              <Text className="text-white font-semibold text-lg">
                Transit Chart
              </Text>
              <Text className="text-teal-100 text-sm">
                Current planetary influences
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="mb-8">
          <Text className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Your Chart
          </Text>
          <View className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg items-center">
            <View className="w-48 h-48 border-4 border-blue-500 rounded-full items-center justify-center mb-4">
              <Text className="text-gray-500 dark:text-gray-400 text-center">
                Chart will be displayed here
              </Text>
            </View>
            <TouchableOpacity className="bg-blue-500 px-6 py-3 rounded-lg">
              <Text className="text-white font-semibold">Generate Chart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
