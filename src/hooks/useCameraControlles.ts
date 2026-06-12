import { useReducer } from "react";
import { cameraReducer, initialState } from "../store/cameraReducer";
export function useCameraController() {
  const [state, dispatch] = useReducer(cameraReducer, initialState);

  return {
    state,
    dispatch,
  };
}
