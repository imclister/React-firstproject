import { useGetFact } from "./useGetCatFact";

export const Cat = () => {
    const {catFact, isLoading, refetchData} = useGetFact();

    if(isLoading) return ( <h1>Fetching Data...</h1>)
    return (
        <div>
            <p>{isLoading}</p>
            {catFact?.fact}
            <br></br>
            <button className="btn btn-danger text-white" onClick={refetchData} >Another Fact</button>
        </div>
    );
   
};