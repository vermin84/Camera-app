import CameraButton from "@/components/cameraScreen/CameraButton";
import { COLORS } from "@/constants/colors";
import { useCameraController } from "@/hooks/useCameraControlles";
import { CameraView } from "expo-camera";
import { StyleSheet, View } from "react-native";

export default function CameraScreen() {
  const { state, dispatch } = useCameraController();

  return (
    <View style={styles.cameraScreenWrapper}>
      <View style={styles.cameraWrapper}>
        <CameraView style={styles.camera} facing={state.facing} />
      </View>
      <View style={styles.controlsWrapper}>
        <View style={styles.cameraButtons}>
          <CameraButton onPress={() => {}} name="images-outline" />
          <CameraButton
            onPress={() => dispatch({ type: "SET_MODE", payload: "photo" })}
            name={state.mode === "photo" ? "camera" : "camera-outline"}
          />
          <CameraButton
            onPress={() => dispatch({ type: "TOGGLE_FLASH" })}
            name={state.flash ? "flash" : "flash-outline"}
          />
          <CameraButton
            onPress={() => dispatch({ type: "SET_MODE", payload: "video" })}
            name={state.mode === "video" ? "videocam" : "videocam-outline"}
          />
          <CameraButton
            onPress={() => dispatch({ type: "TOGGLE_FACING" })}
            name="camera-reverse-outline"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cameraScreenWrapper: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  cameraWrapper: {
    flex: 0.7,
  },
  camera: {
    flex: 1,
  },
  controlsWrapper: {
    flex: 0.3,
  },
  cameraButtons: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 5,
    gap: 5,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
