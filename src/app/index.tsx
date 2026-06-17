import { COLORS } from "@/constants/colors";
import { useCameraPermissions, useMicrophonePermissions } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Button, StyleSheet, View } from "react-native";
export default function HomeScreen() {
  const router = useRouter();
  const [permissions] = useCameraPermissions();
  const [micPermission] = useMicrophonePermissions();
 const [status]= MediaLibrary.usePermissions()
  console.log(status)
  useEffect(() => {
    if (!permissions || !micPermission || !status) return;
    if (!permissions?.granted || !micPermission.granted || !status?.granted) {
      router.replace("/permissionsScreen");
    }
    if (permissions?.granted && micPermission.granted && status?.granted) {
      router.replace("/camera");
    }
  }, [router, permissions, micPermission, status]);
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
