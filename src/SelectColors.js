import { useContext } from "react";
import ColorContext from "./color";

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

function SelectColors() {
    const { action } = useContext(ColorContext);
    return(
        <div>
            <h2>색상을 선택하세요</h2>
                <div style={ { display: 'flex' } }>
                    {
                        colors.map( color => {
                            return (
                                <div key={color} style={ { background: color, width: '24px', height: '24px', cursor: 'pointer' } } onClick={
                                    () => {
                                        action.setColor(color)  
                                    }
                                } onContextMenu={
                                    (e) => {
                                        e.preventDefault();
                                        action.setSubcolor(color);
                                    }
                                }>
                                </div>
                            )
                        } )
                    }
                </div>
        </div>
    )
}

export default SelectColors;