import NextButton from "@/components/permissionScreen/NextButton";
import PermissionBlock from "@/components/permissionScreen/PermissionBlock";
import { COLORS } from "@/constants/colors";
import { AntDesign } from "@react-native-vector-icons/ant-design";
import { useCameraPermissions, useMicrophonePermissions } from "expo-camera";
import { useRouter } from "expo-router";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const ICON_SIZE = 24;
export default function PermissionScreen() {
  // const [cameraPermissions, setCameraPermissions] = useState<PermissionStatus>(PermissionStatus.UNDETERMINED)
  //const [micPermissions, setMicPermissions] = useState<PermissionStatus>(PermissionStatus.UNDETERMINED)
  /*async function requestCameraPermission(){
  const permission = await Camera.requestCameraPermissionsAsync()
  setCameraPermissions(permission.status)
}

async function requestMicPermissions(){
  const micPermissions = await Camera.requestMicrophonePermissionsAsync()
  setMicPermissions(micPermissions.status)
}
console.log(micPermissions, cameraPermissions)*/
  const [permissions, requestCameraPermissionsAsync] = useCameraPermissions();
  const [micPermission, requestMicrophonePermissionsAsync] = useMicrophonePermissions();

  const router = useRouter();
  const isEnable = permissions?.granted === true && micPermission?.granted === true ;
  console.log(permissions, micPermission);
  function nextScreen() {
    if (!isEnable) {
      Alert.alert(
        "Permissions required",
        "You need to enable all permissions before continuing"
      );
      return;
    }
    router.replace("/");
  }
  return (
    <SafeAreaView style={styles.screenWrapper}>
      <ScrollView style={styles.content}>
        <Text style={styles.permissionsTitle}>Need permissions</Text>
        <Text style={styles.permissionSubtitle}>
          App need next permissions for full fuctionality
        </Text>
        <View style={styles.permissionWrapper}>
          <AntDesign
            size={ICON_SIZE}
            color={permissions?.granted ? COLORS.primary : COLORS.muted}
            name="camera"
          />
          <PermissionBlock
            title="Camera"
            value={permissions?.granted}
            onClick={requestCameraPermissionsAsync}
          />
        </View>
        <View style={styles.permissionWrapper}>
          <AntDesign
            size={ICON_SIZE}
            color={micPermission?.granted ? COLORS.primary : COLORS.muted}
            name="audio"
          />
          <PermissionBlock
            title="Microphone"
            value={micPermission?.granted}
            onClick={requestMicrophonePermissionsAsync}
          />
        </View>
        
        <NextButton onPress={nextScreen} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: 20,
    gap: 10,
    flex: 1,
  },
  screenWrapper: {
    backgroundColor: COLORS.background,
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 15,
  },
  permissionWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    padding: 10,
    borderRadius: 15,
    alignItems: "center",
    backgroundColor: COLORS.surface2,
    marginTop: 15,
    borderColor: COLORS.darkGreen,
    shadowColor: COLORS.primary,
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 4,
  },
  permissionsTitle: {
    fontSize: 25,
    color: COLORS.text,
  },
  permissionSubtitle: {
    color: COLORS.secondary,
    fontSize: 15,
    marginTop: 10,
  },
});
