import { COLORS } from "@/constants/colors";
import { useLocalSearchParams } from "expo-router";
import { Image, StyleSheet, View } from "react-native";

export default function PreviewScreen() {
  const { uri } = useLocalSearchParams<{ uri: string }>();

  return (
    <View style={styles.screen}>
      <Image source={{ uri }} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  image: {
    flex: 1,
    resizeMode: "contain",
  },
});