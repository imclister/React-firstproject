import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const useGetFact = () => 
{
    const { data : catFact, isLoading, error, refetch} = useQuery(["cat"] , ()=>{
        return axios.get("https://catfact.ninja/fact").then((res) =>
            res.data
        );
    } );
    const refetchData = () => {
        alert('refetch Data');
        refetch();
    };
    return {catFact, isLoading, refetchData};
};