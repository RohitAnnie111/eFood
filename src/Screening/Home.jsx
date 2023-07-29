
import Navbar from "../Components/Navbar";
import Crd from "../Components/Card";
import UncontrolledExample from "./Carosol";

export default function Home(){
    
    return(
        <>
            <div>                    
            
                <div><Navbar/></div>
                <div><UncontrolledExample/></div>

                <div className="container-fluid">
                <div><Crd/></div><div><Crd/></div><div><Crd/></div><div><Crd/></div><div><Crd/></div>
                </div>                   
                
            </div>
        </>
    )
}