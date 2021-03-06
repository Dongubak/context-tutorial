import { createContext,useState } from 'react';

const ColorContext = createContext({
    state: { color: 'black', subcolor: 'red' },
    action: {
        setColor() {

        },
        setSubcolor() {

        }
    }
});

function ColorProvider({ children }) {
    const [color, setColor] = useState('black');
    const [subcolor, setSubcolor] = useState('red');

    const value = {
        state: { color, subcolor },
        action: { setColor, setSubcolor }
    };

    return(
        <ColorContext.Provider value={ value }>{ children }</ColorContext.Provider>
    );
}

export { ColorProvider };
export default ColorContext;