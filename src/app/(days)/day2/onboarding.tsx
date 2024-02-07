import { Stack, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Directions, Gesture, GestureDetector } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';

const onBoardingSteps = [
  {
    icon: 'snowflake',
    title: 'Welcome #DEVember',
    description: 'Daily React Native tutorials during December',
  },
  {
    icon: 'people-arrows',
    title: 'Learn and grow together',
    description: 'Learn by building 24 projects wuth React Native and Expo',
  },
  {
    icon: 'people-arrows',
    title: 'Education for Children',
    description:
      'Contribute to the fundraiser "Education for Children" to help Save the Children in their effort of provoding education to every child',
  },
];

const OnboardingScreen = () => {
  const [screenIndex, setScreenIndex] = useState(0);

  const data = onBoardingSteps[screenIndex];

  const onContinue = () => {
    const lastScreen = screenIndex === onBoardingSteps.length - 1;

    if (lastScreen) {
      endOnboarding();
    } else setScreenIndex((prev) => prev + 1);
  };

  const onBack = () => {
    const isFirstScreen = screenIndex === 0;

    if (isFirstScreen) {
      endOnboarding();
    } else setScreenIndex((prev) => prev - 1);
  };

  const endOnboarding = () => {
    setScreenIndex(0);
    router.back();
  };

  const swipes = Gesture.Simultaneous(
    Gesture.Fling()
      .direction(Directions.LEFT)
      .onEnd((e) => {
        onContinue();
      }),
    Gesture.Fling()
      .direction(Directions.RIGHT)
      .onEnd((e) => {
        onBack();
      }),
  );

  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="light" />

      <View style={styles.stepIndicatorContainer}>
        {onBoardingSteps.map((step, i) => (
          <View
            style={[
              styles.stepIndicator,
              { backgroundColor: i === screenIndex ? 'white' : 'gray' },
            ]}
            key={i}
          ></View>
        ))}
      </View>

      <GestureDetector gesture={swipes}>
        <View style={styles.pageContent}>
          <FontAwesome5 name={data.icon} size={100} color="#cef202" style={styles.image} />
          <View style={styles.footer}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.description}>{data.description}</Text>

            <View style={styles.buttons}>
              <Text style={styles.buttonText} onPress={endOnboarding}>
                Skip
              </Text>
              <TouchableOpacity style={styles.button} onPress={onContinue}>
                <Text style={styles.buttonText}>Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </GestureDetector>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#15141a',
  },
  pageContent: {
    padding: 20,
    flex: 1,
  },
  image: {
    alignSelf: 'center',
    margin: 20,
    marginTop: 70,
  },
  title: {
    color: '#fdfdfd',
    fontSize: 50,
    fontFamily: 'Inter900',
    letterSpacing: 1.3,
    marginVertical: 20,
  },
  description: {
    color: 'grey',
    fontSize: 20,
    fontFamily: 'InterRegular',
    lineHeight: 28,
  },
  footer: {
    marginTop: 'auto',
  },
  buttons: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
  },
  button: {
    backgroundColor: '#302e38',
    borderRadius: 20,
    alignItems: 'center',
    flex: 1,
  },
  buttonText: {
    color: '#fdfdfd',
    fontFamily: 'Inter600',
    fontSize: 16,
    padding: 15,
    paddingHorizontal: 25,
  },
  stepIndicatorContainer: {
    flexDirection: 'row',
    gap: 8,
    marginHorizontal: 15,
    paddingVertical: 15,
  },
  stepIndicator: {
    flex: 1,
    height: 3,
    backgroundColor: 'gray',
    borderRadius: 10,
  },
});
