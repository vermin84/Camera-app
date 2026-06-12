import { COLORS } from "@/constants/colors";
import AntDesign from "@react-native-vector-icons/ant-design";
import { Pressable, StyleSheet } from "react-native";

export default function NextButton({ onPress }: { onPress: () => void }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.buttonWrapper, pressed && styles.pressed]}
    >
      <AntDesign name="arrow-right" size={35} color={COLORS.primary} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
  buttonWrapper: {
    borderColor: COLORS.primary,
    borderRadius: 50,
    borderWidth: 2,
    alignSelf: "center",
    padding: 15,
    marginTop: 25,
  },
});
