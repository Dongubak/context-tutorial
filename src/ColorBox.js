import { useContext } from "react";
import ColorContext from "./color";
function ColorBox() {
    const { state } = useContext(ColorContext);
    return(
        <>
            <div style={{ width: '100px', height: '100px', background: state.color }}></div>
            <div style={{ width: '100px', height: '100px', background: state.subcolor }}></div>
        </>
    )
}
export default ColorBox;