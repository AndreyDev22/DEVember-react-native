import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

interface DayListItemProps {
  day: any;
}

const DayListItem: React.FC<DayListItemProps> = ({ day }) => {
  return (
    <Link href={`/day${day}`} asChild>
      <Pressable style={styles.box}>
        <Text style={styles.text}>{day}</Text>
      </Pressable>
    </Link>
  );
};

export default DayListItem;

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#f9ede3',
    flex: 1,
    aspectRatio: 1, // соотношение сторон

    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#9b4521',
    borderRadius: 20,
  },
  text: {
    color: '#9b4521',
    fontSize: 75,
    fontFamily: 'AmaticBold',
  },
});
