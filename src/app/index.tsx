import { COLORS } from "@/constants/colors";
import { useCameraPermissions, useMicrophonePermissions } from "expo-camera";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Button, StyleSheet, View } from "react-native";
export default function HomeScreen() {
  const router = useRouter();
  const [permissions] = useCameraPermissions();
  const [micPermission] = useMicrophonePermissions();
  
  
  useEffect(() => {
    if (!permissions || !micPermission) return;
    if (!permissions?.granted || !micPermission.granted) {
      router.replace("/permissionsScreen");
    }
    if (permissions?.granted && micPermission.granted) {
      router.replace("/camera");
    }
  }, [router, permissions, micPermission]);
  return (
    <View style={styles.wrapper}>
      <Button
        title="Reset permissions (dev)"
        onPress={() => {
          router.replace("/permissionsScreen");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.background,
  },
  devButton: {
    alignSelf: "center",
  },
});
