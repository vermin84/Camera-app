import { useReducer } from "react";
import { cameraReducer, initialState } from "../store/cameraReducer";
export function useCameraController() {
  const [state, dispatch] = useReducer(cameraReducer, initialState);

  const actions = {
    setPhoto() {
      dispatch({
        type: "SET_MODE",
        payload: "photo",
      });
    },

    setVideo() {
      dispatch({
        type: "SET_MODE",
        payload: "video",
      });
    },

    flip() {
      dispatch({
        type: "TOGGLE_FACING",
      });
    },

    toggleFlash() {
      dispatch({
        type: "TOGGLE_FLASH",
      });
    },

    startRecording() {
      dispatch({
        type: "START_RECORDING",
      });
    },

    stopRecording() {
      dispatch({
        type: "STOP_RECORDING",
      });
    },
  };

  return {
    state,
    actions,
  };
}
