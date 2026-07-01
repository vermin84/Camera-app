
import {
  Dimensions,
  Text
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SIZE = Dimensions.get("window").width / 3;



export default function Gallery(){
  return <SafeAreaView>
    <Text>Gallery</Text>
  </SafeAreaView>
}