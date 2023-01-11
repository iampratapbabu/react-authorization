import react, { Fragment,useEffect,useContext,useState } from 'react';
import { useNavigate } from "react-router-dom";
import AuthContext from '../context/auth/AuthContext';
import Alert from '../components/Alert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () =>{
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);
    const {login,logout,userdata,msg,user,isLoggedIn,loadUser,alertMsg,showAlert,setAlert} = authContext;

    const [auth,setAuth] = useState('false')

    useEffect(()=>{
        if(!(localStorage.getItem('token'))){
            navigate('/login')
        }
        else{
            console.log("user is registered and logged in");
            loadUser();
            
        }
        
    },[])

    const Mylogout = () =>{
        localStorage.removeItem('token');
        logout();
        navigate('/login');
        toast.success("Logged Out Successfully");
    }

    



    return(
        <Fragment>
            
           
            {showAlert && <Alert msg={["success","LoggedIn Successully"]}/>}
             <h1>Dashboard</h1>
             <p>{alertMsg}</p>
             <p>{user?._id}</p>
             <p>{user?.email}</p>
             <button className='btn btn-primary mr-2' onClick={Mylogout}>Logout</button>
             <button className='btn btn-success' onClick={()=>{navigate('/profile')}}>Profile</button>

             

        </Fragment>
       
    )
}

export default Dashboard;