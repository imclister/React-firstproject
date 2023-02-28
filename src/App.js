import { useToggle } from "./useToggle";
import { Cat } from "./Cat";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {

    const client = new QueryClient({
        defaultOptions : {
            queries: {
                refetchOnWindowFocus : true, //IF SET TO TRUE, IT WILL REFECT DATA FROM API EVERY TIME YOU SWITCH TAB
            },
        },
    });

    const [isVisible,setIsVisible] = useToggle(false);

    return (
        <div className="App">


             <div className="container text-center">
                {isVisible && <h1>HIDDEN TEXT</h1> }
                <button className="btn btn-primary text-white" onClick={setIsVisible}>
                    {isVisible? 'Hide' : 'Show'}
                </button>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <QueryClientProvider client={client}>
                <div className="container text-center">
                    <Cat/>
                </div>           
            </QueryClientProvider> 
        </div>
       
    );
};
export default App; 