import { Button, StyleSheet, View } from "react-native";

import { useCameraPermissions, useMicrophonePermissions } from "expo-camera";
//import * as MediaLibrary from "expo-media-library";
import { COLORS } from "@/constants/colors";
import { useRouter } from "expo-router";
import { useEffect } from "react";
export default function HomeScreen() {
  const router = useRouter();
  const [permissions] = useCameraPermissions();
  const [micPermission] = useMicrophonePermissions();
  //const [status]= MediaLibrary.usePermissions()

  useEffect(() => {
    if (!permissions || !micPermission) return;
    if (!permissions?.granted || !micPermission.granted) {
      router.replace("/permissionsScreen");
    }
    if(permissions?.granted || micPermission.granted){
      router.replace("/CameraScreen");
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
    backgroundColor: COLORS.background
  },
  devButton: {
    alignSelf: "center",
  },
});
