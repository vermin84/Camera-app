type CameraFacing = "front" | "back";
type CameraMode = "photo" | "video";

type CameraState = {
  mode: CameraMode;
  facing: CameraFacing;
  flash: boolean;
  recording: boolean;
};
export const initialState: CameraState = {
  mode: "photo",
  facing: "back",
  flash: false,
  recording: false,
};

type Action =
  | { type: "SET_MODE"; payload: CameraMode }
  | { type: "TOGGLE_FACING" }
  | { type: "TOGGLE_FLASH" }
  | { type: "START_RECORDING" }
  | { type: "STOP_RECORDING" };
export function cameraReducer(state: CameraState, action: Action): CameraState {
  switch (action.type) {
    case "SET_MODE":
      return { ...state, mode: action.payload };

    case "TOGGLE_FACING":
      return {
        ...state,
        facing: state.facing === "front" ? "back" : "front",
      };

    case "TOGGLE_FLASH":
      return {
        ...state,
        flash: !state.flash,
      };

    case "START_RECORDING":
      return {
        ...state,
        recording: true,
        mode: "video",
      };

    case "STOP_RECORDING":
      return {
        ...state,
        recording: false,
      };

    default:
      return state;
  }
}
