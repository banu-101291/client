import react from 'react';
import Layout from '../components/Layout/Layout.js';
import { useAuth } from '../context/auth.js';


const Homepage = () =>{
    const[Auth,setAuth]= useAuth()
    return(
        <Layout>
        
        <h1>Homepage</h1>
        <pre>{JSON.stringify(Auth,null,4)}</pre>


            </Layout>


      
    )
}



export default Homepage;