import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.content}>
          {/* Greeting */}
          <ThemedView style={styles.header}>
            <ThemedText type="title">Good evening!</ThemedText>

            <Pressable
              style={styles.settingsButton}
              onPress={() => router.push('/settings')}>
              <ThemedText style={styles.settingsIcon}>⚙️</ThemedText>
            </Pressable>
          </ThemedView>

          {/* Attention count */}
          <ThemedView style={styles.attentionCard}>
            <ThemedText type="subtitle">
              ⚠️ 3 items need attention
            </ThemedText>
          </ThemedView>

          {/* Use Soon */}
          <ThemedView style={styles.section}>
            <ThemedText type="subtitle">USE SOON</ThemedText>

            <ThemedView style={styles.foodItem}>
              <ThemedText style={styles.foodEmoji}>🥬</ThemedText>
              <ThemedView style={styles.foodInfo}>
                <ThemedText type="defaultSemiBold">Spinach</ThemedText>
                <ThemedText type="small">Use within 1 day</ThemedText>
              </ThemedView>
            </ThemedView>

            <ThemedView style={styles.foodItem}>
              <ThemedText style={styles.foodEmoji}>🥩</ThemedText>
              <ThemedView style={styles.foodInfo}>
                <ThemedText type="defaultSemiBold">Ground Beef</ThemedText>
                <ThemedText type="small">Use within 2 days</ThemedText>
              </ThemedView>
            </ThemedView>

            <ThemedView style={styles.foodItem}>
              <ThemedText style={styles.foodEmoji}>🥛</ThemedText>
              <ThemedView style={styles.foodInfo}>
                <ThemedText type="defaultSemiBold">Milk</ThemedText>
                <ThemedText type="small">Use within 3 days</ThemedText>
              </ThemedView>
            </ThemedView>
          </ThemedView>

          {/* Meal suggestion */}
          <ThemedView style={styles.section}>
            <ThemedText type="subtitle">WHAT SHOULD I MAKE?</ThemedText>

            <ThemedView style={styles.mealCard}>
              <ThemedText style={styles.mealEmoji}>🍝</ThemedText>

              <ThemedView style={styles.mealInfo}>
                <ThemedText type="defaultSemiBold">
                  Beef & Spinach Pasta
                </ThemedText>
                <ThemedText type="small">Uses 4 ingredients</ThemedText>
              </ThemedView>
            </ThemedView>
          </ThemedView>

          {/* Add Food */}
          <Pressable style={styles.addButton}>
            <ThemedText style={styles.addButtonText}>
              + Add Food
            </ThemedText>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  safeArea: {
    flex: 1,
  },

  content: {
    padding: 20,
    gap: 20,
  },

  attentionCard: {
    padding: 18,
    borderRadius: 16,
    backgroundColor: '#FFF3CD',
  },

  section: {
    gap: 12,
  },

  foodItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 14,
    backgroundColor: '#F2F2F2',
  },

  foodEmoji: {
    fontSize: 30,
    marginRight: 14,
  },

  foodInfo: {
    gap: 4,
  },

  mealCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
    borderRadius: 16,
    backgroundColor: '#F2F2F2',
  },

  mealEmoji: {
    fontSize: 36,
    marginRight: 14,
  },

  mealInfo: {
    flex: 1,
    gap: 4,
  },

  addButton: {
    padding: 18,
    borderRadius: 16,
    backgroundColor: '#333333',
    alignItems: 'center',
  },

  addButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  settingsButton: {
    padding: 8,
  },

  settingsIcon: {
    fontSize: 24,
  },
});