import react, { useEffect, useState } from 'react';

const Contact =()=>{

    const [user,setUser] = useState({name:"",email:"",phone:"",message:""});

    
    useEffect(()=>{
        getUserData();
    },[])
    
    const getUserData = async()=>{
        const data = await fetch('/api/data',{
            headers:{
                "Content-Type":"application/json"
            },
            method:"GET"
        });

        const jsonData = await data.json();
        console.log(jsonData);
        if(!data.status==200){
            throw new Error('not found')
        }else{
            setUser({name:jsonData.name,email:jsonData.email,phone:jsonData.phone})
        }
    }


    const messageData =(event)=>{
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;

        setUser({...user,[name]:value});
    }

    const sendContactData = async(event)=>{
        try{
            event.preventDefault();
            const {name,email,phone,message} = user;
            const contactdata = await fetch("/api/contact",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({name,email,phone,message})
            })
    
            const jsonmessage = await contactdata.json();
            console.log(jsonmessage);
            if(contactdata.status!=200){
                window.alert(jsonmessage.error);
            }else{
                window.alert(jsonmessage.message);
                setUser({...user,messsage:""});
            }
            
        }catch(error){
            console.log(error);
        }
    }

    return(
        <>
        <div className="container-fluid contact_div">
            <div className="row mt-5">
                <div className="col-md-3 mx-auto upper_block">
                    <div className="row block_content">
                        <div className="col-1 d-flex align-items-center justify-content-center">
                        <i class="fas fa-mobile-alt logo"></i>
                        </div>
                        <div className="col-11 h-50 p_block my-auto">
                            <p>Phone</p>
                            <p>7000622876</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 mx-auto upper_block">
                <div className="row block_content">
                        <div className="col-1 d-flex align-items-center justify-content-center">
                        <i class="fas fa-envelope logo"></i>
                        </div>
                        <div className="col-11 h-50 p_block  my-auto">
                            <p>Email</p>
                            <p>shubham.sahoo456@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 mx-auto upper_block">
                <div className="row block_content">
                        <div className="col-1 d-flex align-items-center justify-content-center">
                        <i class="fas fa-map-marked-alt logo"></i>
                        </div>
                        <div className="col-11 h-50 p_block  my-auto">
                            <p>Address</p>
                            <p>Banglore,India</p>
                        </div>
                    </div>
                </div>
            </div>

           <div className="container message_div p-2 my-5">
                <div className="row form_div">
                    <div className="col-md-8 mx-auto">
                        <h4 className="my-3">Get In Touch</h4>
                    </div>
                    <div className="col-md-8 mx-auto my-3">
                        
                        <form method="POST">
                            <div className="d-flex flex-row justify-content-between">
                                <div className="form-group input_div_text">
                                    <input type="text" className="form-control" id="name" name="name" onChange={messageData} value={user.name} placeholder="Your name" />
                                </div>

                                <div className="form-group input_div_text">
                                    <input type="email" className="form-control" id="email" name="email" onChange={messageData} value={user.email} placeholder="Your email" />
                                </div>

                                <div className="form-group input_div_text">
                                    <input type="text" className="form-control" id="mobile" name="phone" onChange={messageData} value={user.phone} placeholder="Your phone" />
                                </div>
                            </div>
                        
                            <div className="form-group input_div_text">
                                <textarea className="form-control" id="message" rows="8" value={user.message}  onChange={messageData} name="message" placeholder="message"></textarea>
                            </div>

                            <button className="btn btn-primary" type="submit" onClick={sendContactData}>Send Message</button>
                        </form>

                    </div>
                </div>
           </div>
        </div>
        </>
    );
}

export default Contact; 