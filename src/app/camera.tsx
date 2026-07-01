import CameraButton from "@/components/cameraScreen/CameraButton";
import ShootButton from "@/components/cameraScreen/ShootButton";
import { COLORS } from "@/constants/colors";
import { useCameraController } from "@/hooks/useCameraControlles";
import { CameraView } from "expo-camera";
import { useRouter } from "expo-router";
import { useRef } from "react";
import { StyleSheet, View } from "react-native";

export default function CameraScreen() {
  const { state, actions } = useCameraController();
  const router = useRouter();
  const cameraRef = useRef<CameraView>(null);

  const isRecordingRef = useRef(false);
  const videoPromiseRef = useRef<Promise<any> | null>(null);

  const takePhoto = async () => {
    if (!cameraRef.current) return;

    try {
      // 📸 PHOTO MODE
      if (state.mode === "photo") {
        const photo = await cameraRef.current.takePictureAsync();
        console.log("PHOTO:", photo);
        return;
      }

      // 🎥 VIDEO MODE
      if (state.mode === "video") {
        // START RECORDING
        if (!isRecordingRef.current) {
          isRecordingRef.current = true;

          videoPromiseRef.current =
            cameraRef.current.recordAsync();

          return;
        }

        // STOP RECORDING
        cameraRef.current.stopRecording();
        isRecordingRef.current = false;

        const video = await videoPromiseRef.current;
        console.log("VIDEO:", video);

        return;
      }
    } catch (e) {
      console.log("Camera error:", e);
      isRecordingRef.current = false;
    }
  };

  return (
    <View style={styles.cameraScreenWrapper}>
      <View style={styles.cameraWrapper}>
        <CameraView
          ref={cameraRef}
          style={styles.camera}
          facing={state.facing}
          flash={state.flash ? "on" : "off"}
          videoQuality="1080p"
        />
      </View>

      <View style={styles.controlsWrapper}>
        <View style={styles.cameraButtons}>
          <CameraButton
            onPress={() => router.push("/gallery")}
            name="images-outline"
          />

          <CameraButton
            onPress={actions.setPhoto}
            name={state.mode === "photo" ? "camera" : "camera-outline"}
          />

          <CameraButton
            onPress={actions.toggleFlash}
            name={state.flash ? "flash" : "flash-outline"}
          />

          <CameraButton
            onPress={actions.setVideo}
            name={state.mode === "video" ? "videocam" : "videocam-outline"}
          />

          <CameraButton
            onPress={actions.flip}
            name="camera-reverse-outline"
          />
        </View>

        <View style={styles.shootButtonWrapper}>
          <ShootButton onPress={takePhoto} />
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
  shootButtonWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});