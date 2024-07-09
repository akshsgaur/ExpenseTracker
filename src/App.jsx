import{
  createBrowserRouter, 
  RouterProvider,
} from "react-router-dom";
import Dashboard, { DashboardAction, dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Errors";

//Actions: 
import { logoutAction } from "./assets/actions/logout";

//Layouts
import Main, {mainLoader} from "./layouts/Main";


//Library import
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//Routes
const router = createBrowserRouter(
  [
    {

      path: "/", 
      element: <Main/>, 
      loader: mainLoader,
      
      children: [
        {

          index: true, 
          element: <Dashboard/>, 
          
          loader: dashboardLoader,
          action: DashboardAction,
        
          //errorElement: <Error/>
          
    
        },
        {

          path: "logout", 
          element: <p>Logged out!</p>,
          action: logoutAction,
        }
      ]
      

    },
    
    {

      path: "/about", 
      element: <h1>About</h1>, 
      

    },
  ],
);



function App() {
  

  return <div className="App">
    <RouterProvider router={router} />
    <ToastContainer/>


  </div>
}

export default App
