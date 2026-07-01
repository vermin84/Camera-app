import * as FileSystem from "expo-file-system/legacy";

export async function saveMedia(uri: string, type: "photo" | "video") {
  try {
    const dir = FileSystem.documentDirectory + "media/";

    const dirInfo = await FileSystem.getInfoAsync(dir);
    console.log(FileSystem.documentDirectory);
    if (!dirInfo.exists) {
      await FileSystem.makeDirectoryAsync(dir, {
        intermediates: true,
      });
    }

    const fileName = `${type}_${Date.now()}` + (type === "photo" ? ".jpg" : ".mp4");

    const newPath = dir + fileName;

    await FileSystem.copyAsync({
      from: uri,
      to: newPath,
    });

    return newPath;
  } catch (e) {
    console.log("saveMedia error:", e);
    return null;
  }
}
