import CameraButton from "@/components/cameraScreen/CameraButton";
import ShootButton from "@/components/cameraScreen/ShootButton";
import { COLORS } from "@/constants/colors";
import { useCameraController } from "@/hooks/useCameraControlles";
import { saveMedia } from "@/utils/saveMedia";
import { CameraView } from "expo-camera";
import { useRouter } from "expo-router";
import { useRef } from "react";
import { StyleSheet, View } from "react-native";

export default function CameraScreen() {
  const { state, actions } = useCameraController();
  const router = useRouter();
  const cameraRef = useRef<CameraView>(null);

  const recordingRef = useRef(false);
const recordingPromiseRef = useRef<any>(null);

const takePhoto = async () => {
  if (!cameraRef.current) return;

  try {
    // 📸 PHOTO
    if (state.mode === "photo") {
      const photo = await cameraRef.current.takePictureAsync();
        const savedUri = await saveMedia(photo.uri, "photo");

  console.log("SAVED PHOTO:", savedUri);
      
      return;
    }

    // 🎥 VIDEO START
    if (state.mode === "video" && !recordingRef.current) {
      recordingRef.current = true;

      // важно: не await!
      recordingPromiseRef.current = cameraRef.current.recordAsync();
      
      recordingPromiseRef.current
        .then(async (video: any) => {
          const savedUri = await saveMedia(video.uri, "video");
        console.log("SAVED VIDEO:", savedUri);
          
        })
        .catch((e: any) => {
          console.log("VIDEO ERROR:", e);
        })
        .finally(() => {
          recordingRef.current = false;
          recordingPromiseRef.current = null;
        });

      return;
    }

    // ⛔ STOP VIDEO
    if (state.mode === "video" && recordingRef.current) {
      cameraRef.current.stopRecording();
      return;
    }
  } catch (e) {
    console.log("Camera error:", e);
    recordingRef.current = false;
    recordingPromiseRef.current = null;
  }
};

  return (
    <View style={styles.cameraScreenWrapper}>
      <View style={styles.cameraWrapper}>
        <CameraView
        mode={state.mode === "video" ? "video" : "picture"}
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