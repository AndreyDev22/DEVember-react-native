import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';

const DetailPageDay4 = () => {
  return (
    <View>
      <Stack.Screen options={{ title: 'Day 4: Splash screen' }} />
      <Text>Day4Page</Text>

      <Link href="/day4/animation" asChild>
        <Button title="Go to animation" />
      </Link>

      <Link href="/day4/splash" asChild>
        <Button title="Splash screen animation" />
      </Link>
    </View>
  );
};

export default DetailPageDay4;

const styles = StyleSheet.create({});
