import React, {PropsWithChildren} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const Container = ({
  children,
  isScrollable,
}: PropsWithChildren<{isScrollable?: boolean}>) => {
  return isScrollable ? (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <SafeAreaView style={styles.containerPadded}>{children}</SafeAreaView>
    </ScrollView>
  ) : (
    <SafeAreaView style={styles.containerPadded}>{children}</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  containerPadded: {
    flex: 1,
    backgroundColor:'white'

  },
});
