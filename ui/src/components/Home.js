import react, { useEffect, useState } from 'react';


const Home =()=>{

    const[name,setName] = useState("");
    const[show,setShow] = useState(false);

    const showUserName = async()=>{
        const data = await fetch('api/data',{
            method :"GET",
            headers :{
                "Content-Type":"application/json"
            }
        });

        const jsonData = await data.json();
        setShow(true);
        setName(jsonData.name);

    }

    useEffect(()=>{
        showUserName();
    },[])


    return(
        <>
        <div className="home_div">
            <div className="center_div">
                    <p className="text-center">Welcome</p>
                    <h1>{name}</h1>
                    <h5 className="text-center">{show?"Happy to see you back":"we are Mern developer"}</h5>
            </div>
        </div>
        
        </>
    );
}

export default Home;