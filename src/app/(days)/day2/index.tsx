import { Link, Stack } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

const Day2Page = () => {
  return (
    <View>
      <Stack.Screen options={{ title: 'Day 2: Onboarding' }} />
      <Text>Day2Page</Text>

      <Link href="/day2/onboarding" asChild>
        <Button title="Go to onboarding" />
      </Link>
    </View>
  );
};

export default Day2Page;

const styles = StyleSheet.create({});
