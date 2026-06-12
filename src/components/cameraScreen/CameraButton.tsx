import { COLORS } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";
type CameraButtonType = {
  name: React.ComponentProps<typeof Ionicons>["name"];
  onPress: () => void;
};

export default function CameraButton({ name, onPress }: CameraButtonType) {
  return (
    <Pressable
      style={({ pressed }) => [styles.buttonWrapper, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Ionicons name={name} size={32} color={COLORS.primary} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonWrapper: {
    padding: 10,
    borderRadius: "50%",
    borderWidth: 1,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.surface2,
    /*shadowColor: COLORS.primary,
        shadowOpacity: 0.4,
        shadowRadius: 8,
        elevation: 4*/
  },
  pressed: {
    opacity: 0.5,
  },
});
