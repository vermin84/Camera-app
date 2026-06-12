import CameraButton from "@/components/cameraScreen/CameraButton";
import { COLORS } from "@/constants/colors";
import { CameraView } from "expo-camera";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function CameraScreen(){
    const [cameraMode, setCameraMode]= useState('front')
    return <View style={styles.cameraScreenWrapper}>
        <View style={styles.cameraWrapper}>
            <CameraView style={styles.camera}/>
        </View>
        <View style={styles.controlsWrapper}>
            <View style={styles.cameraButtons}>
                <CameraButton onPress={()=>{}} name="picture"/>
                <CameraButton onPress={()=>{}} name="arrowright"/>
                <CameraButton onPress={()=>{}} name="InteractionOutlined"/>
                <CameraButton onPress={()=>{}} name="camera"/>
                <CameraButton onPress={()=>{}} name="camera"/>
            </View>
        </View>
    
    </View>
}



const styles = StyleSheet.create({
    cameraScreenWrapper: {
        flex: 1,
        backgroundColor: COLORS.background
    },
    cameraWrapper: {
        flex: 0.7,
        
    },
    camera: {
        flex:1
    },
    controlsWrapper: {
        flex: 0.3,
        

    },
    cameraButtons:{
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 5,
        gap: 5,
        alignItems: 'center',
        justifyContent: 'space-between'
    }

})