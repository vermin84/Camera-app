import { COLORS } from "@/constants/colors";
import { Pressable, StyleSheet, View } from "react-native";

type VideoButtonProps = {
  recording?: boolean;
  onPress: () => void;
};

export default function ShootButton({
  recording = false,
  onPress,
}: VideoButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.wrapper,
        pressed && styles.pressed,
      ]}
    >
      <View
        style={[
          styles.outer,
          recording && styles.outerRecording,
        ]}
      >
        <View
          style={[
            styles.inner,
            recording && styles.innerRecording,
          ]}
        />
      </View>
    </Pressable>
  );
}

const SIZE = 90;
const INNER = 60;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
  },

  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.96 }],
  },

  outer: {
    width: SIZE,
    height: SIZE,

    borderRadius: SIZE / 2,

    borderWidth: 3,
    borderColor: COLORS.primary,

    alignItems: "center",
    justifyContent: "center",

    backgroundColor: COLORS.surface2,

    shadowColor: COLORS.glow,
    shadowOpacity: 0.9,
    shadowRadius: 25,

    elevation: 15,
  },

  outerRecording: {
    borderColor: "#77FF77",
  },

  inner: {
    width: INNER,
    height: INNER,

    borderRadius: INNER / 2,

    backgroundColor: COLORS.primary,

    shadowColor: COLORS.primary,
    shadowOpacity: 1,
    shadowRadius: 15,
  },

  innerRecording: {
    width: 34,
    height: 34,

    borderRadius: 10,

    backgroundColor: "#44FF88",
  },
});