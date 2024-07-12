//rrd imports
import { useLoaderData } from "react-router-dom";

// Helper Functions
import { fetchData } from "../helpers"
import Intro from "../components/Intro";
import { toast } from "react-toastify";
import AddBudgetForm from "../components/AddBudgetForm";

export function dashboardLoader(){
    const userName = fetchData("userName");
    //const budgets = fetchData("budgets");
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
            {userName ? (
                <div className="dashboard"> 
                <h1> 
                Welcome back, <span className="accent">{userName}</span>
                <div className="grid-sm"> 
                <div className="grid-lg">
                    <div className="flex-lg">
                      <AddBudgetForm />   
                    </div>
                </div>
                </div>
                </h1>
                </div>
            ) : <Intro/>}
            
        </>



    )

}

export default Dashboard