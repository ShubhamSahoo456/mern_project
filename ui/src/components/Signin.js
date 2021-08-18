import react, { useContext, useState } from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import Img from '../images/sign_in.svg';
import { UserContext } from '../App';

const Signin = ()=>{

    const {state,dispatch} = useContext(UserContext);

    const history = useHistory();
    const[user,setUser] = useState({
        email:"",
        password:""
    });

    let name,value;

    const validateUser = (event)=>{
        name = event.target.name;
        value = event.target.value;

        setUser({...user,[name]:value});
    }

    const sendData = async(event)=>{
        event.preventDefault();
        const{email,password} = user;
        const data = await fetch('/signin',{
            headers:{
                "Content-Type":"application/json"
            },
            method:"POST",
            body:JSON.stringify({email,password})
        })

        const jsondata = await data.json();
        console.log(jsondata);
        if(jsondata.status==false){
            window.alert(jsondata.message);
        }else{
           dispatch({type:"USER",payload:true})
            history.push('/');
            window.alert(jsondata.message);
        }
    }


    return(
        <>
             <div className="container mt-5">
            <div className="d-flex justify-content-center align-items-center sign_div">
            <div className="w-50 img_div mx-5">
                <img src={Img} alt="" />
                <NavLink exact to="/signup">Create an account</NavLink>
            </div>
            <form className="w-50 mx-4 my-4">
            <h4  className="text-center mb-3 text_">Sign In</h4>
                
                <div className="form-group input_div">
                    <label for="email"><i className="fas fa-envelope mt-3"></i></label>
                    <input type="email" className="form-control" name="email" id="email" value={user.email} onChange={validateUser} placeholder="Your Email" />
                </div>
               
                <div className="form-group input_div">
                    <label for="password"><i className="fas fa-lock mt-3"></i></label>
                    <input type="password" className="form-control" name="password" id="password" value={user.password} onChange={validateUser} aria-describedby="emailHelp" placeholder="Your Password" />
                </div>
               
                <button type="submit" onClick={sendData} className="btn btn-primary input_div">Submit</button>
                </form>
               
            </div>
        </div>
        </>
    )
}

export default Signin;