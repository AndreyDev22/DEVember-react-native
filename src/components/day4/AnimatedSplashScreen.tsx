import { View } from 'react-native';
import React, { useRef } from 'react';
import LottieView from 'lottie-react-native';

const AnimatedSplashScreen = ({
  onAnimationFinish = (isCancelled) => {},
}: {
  onAnimationFinish?: (isCancelled: boolean) => void;
}) => {
  const animation = useRef<LottieView>(null);

  return (
    <View
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000' }}
    >
      <LottieView
        autoPlay
        ref={animation}
        onAnimationFinish={onAnimationFinish}
        loop={false}
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

export default AnimatedSplashScreen;
