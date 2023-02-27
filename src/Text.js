import { useState , useEffect} from "react";

export const Text = () =>
{

    useEffect (
        () => {
            console.log("COMPONENT CREATED");

            //THIS SPECIFIC FUNCTION WILL BE TRIGGERED ONCE THE COMPONENT IS UNMOUNTED
            return () => {
                console.log("COMPONENT DELETED");
            }
        },[] //
    );
    const [typeText , setTypeText] = useState("")


    return(
        <div className="container mt-2">
             <input type="text" className="form-control" 
                onChange={ (event) => setTypeText( event.target.value )} />
            <p>{typeText}</p>
        </div>
    ) ;
}

