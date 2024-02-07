import { Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

const DayDetailsScreen = () => {
  return (
    <View>
      <Stack.Screen options={{ title: 'Day 1' }} />
      <Text style={{ fontFamily: 'AmaticBold', fontSize: 100 }}>Day Details Screen</Text>
    </View>
  );
};

export default DayDetailsScreen;

const styles = StyleSheet.create({});
