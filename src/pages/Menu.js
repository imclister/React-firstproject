import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export  const Menu = () => {

    const {data : catFact ,isLoading , refetch} = useQuery(["cat"] , () => {
        return Axios.get("https://catfact.ninja/fact").then((res) =>
            res.data
        );
    });

    if(isLoading)
    {
        return <h1>Loading...</h1>
    }
    return (
        <div>
            <h1>THIS IS THE MENU PAGE</h1>
            <p>{catFact.fact}</p>
            <button className="btn btn-primary text-white" onClick={refetch}>Another</button>
        </div>
    );
};