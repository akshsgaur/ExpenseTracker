//rrd imports
import { useLoaderData } from "react-router-dom";

// Helper Functions
import { fetchData } from "../helpers"
import Intro from "../components/Intro";
import { toast } from "react-toastify";

export function dashboardLoader(){
    const userName = fetchData("userName");
    return {userName}
}

export async function DashboardAction({request}){
    const data = await request.formData()
    
    const formData = Object.fromEntries(data)
    try{
    localStorage.setItem("userName", JSON.stringify(formData.userName))
    return toast.success(`Welcome, ${formData.userName}`)
    }
    catch(e){
        throw new Error("There was a problem creating your account.")
    }
}

const Dashboard = () => {
    
    const {userName} = useLoaderData()
    return (
        <>
            {userName ? (<p>{userName}</p>) : <Intro/>}
            
        </>



    )

}

export default Dashboard