//import * as MediaLibrary from "expo-media-library";
import {
  Dimensions
} from "react-native";

const SIZE = Dimensions.get("window").width / 3;

//type Asset = MediaLibrary.Asset;

/*export default function Gallery() {
  const router = useRouter();

  const [permission, requestPermission] =
    MediaLibrary.usePermissions();
const [assets, setAssets] = useState<any[]>([]);


  useEffect(() => {
    if (!permission) return;

    if (!permission.granted) {
      requestPermission();
      return;
    }

    loadAssets();
  }, [permission]);

  async function loadAssets() {
    const result = await MediaLibrary.getAssetsAsync({
      mediaType: ["photo"],
      first: 60,
      sortBy: [["creationTime", false]],
    });

    setAssets(result.assets);
  }

  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={assets}
        numColumns={3}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={()=>
              router.push({
                pathname: "/preview",
                params: { uri: item.uri },
              })
            }
          >
            <Image
              source={{ uri: item.uri }}
              style={styles.image}
            />
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  image: {
    width: SIZE,
    height: SIZE,
  },
});*/
export default function Gallery(){
  return null
}