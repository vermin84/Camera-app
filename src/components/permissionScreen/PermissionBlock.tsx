import { COLORS } from "@/constants/colors";
import { StyleSheet, Switch, Text, View } from "react-native";

type PermissionBlock = {
  title: string;
  value: boolean | undefined;
  onClick: () => void;
};
export default function PermissionBlock({ title, value, onClick }: PermissionBlock) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>

      <Switch
        thumbColor={value ? COLORS.primary : COLORS.muted}
        trackColor={{
          false: COLORS.muted,
          true: COLORS.glow,
        }}
        value={value === value}
        onValueChange={onClick}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    padding: 12,

    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    color: COLORS.text,
  },
});
