import { Button, StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { useRef } from 'react';

const AnimationPage = () => {
  const animation = useRef<LottieView>(null);

  return (
    <View>
      <LottieView
        ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: '#eee',
        }}
        source={require('@assets/lottie/netflix.lottie')}
      />

      <Button title="Play" onPress={() => animation?.current?.play()} />
    </View>
  );
};

export default AnimationPage;

const styles = StyleSheet.create({});
