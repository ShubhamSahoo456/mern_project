import react,{useContext, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../App';

const Logout = ()=>{

    const {state , dispatch} = useContext(UserContext);
    const history = useHistory();

    const logoutUser =async ()=>{
        try{
            const data = await fetch("/api/logout",{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include"
            });
    
            const jsondata= await data.json();
            if(data.status==200){
                dispatch({type:"USER",payload:false});
                history.push("/");
                window.alert(jsondata.message);
            }else{
                throw new Error('logout cannot be done');
            }

        }catch(error){
            console.log(error);
        }
        
    }

    useEffect(()=>{
        logoutUser();
    },[])

    return(
        <>
        
        </>
    )
}

export default Logout;