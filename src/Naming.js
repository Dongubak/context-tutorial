import { useContext } from "react";
import DataContext from "./Data";
function Naming() {
    const { state } = useContext(DataContext);
    return(
        <div>
            { state.name }
        </div>
    )
}

export default Naming;