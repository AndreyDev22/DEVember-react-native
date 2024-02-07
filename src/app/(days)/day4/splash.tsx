import { StyleSheet, Text, View } from 'react-native';
import React, { useRef } from 'react';
import LottieView from 'lottie-react-native';
import { Stack } from 'expo-router';

const SplashScreen = () => {
  const animation = useRef<LottieView>(null);

  return (
    <View
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000' }}
    >
      <Stack.Screen options={{ headerShown: false }} />
      <LottieView
        // autoPlay
        ref={animation}
        style={{
          width: '80%',
          maxWidth: 400,
          height: 200,
        }}
        source={require('@assets/lottie/netflix.lottie')}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
