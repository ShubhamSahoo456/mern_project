import react, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../about.css';
import Profile from '../images/03.jpg'

const About = ()=>{

    useEffect(()=>{
        validateUser();
    },[])

    const history = useHistory();
    const [user,setUser] = useState("");

    const validateUser =async()=>{
        try{
            const res = await fetch("/api/about",{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include"
            })

            const data = await res.json();
            if(!res.status==200){
                const error = new Error(res.error);
                throw error;
            }
            console.log(data);
            setUser(data);

        }catch(error){
            history.push('/signin');
        }
    }




    return(
        <>
            <div className="container emp-profile">
                        <form method="GET">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="profile-img">
                                        <img src={Profile} alt=""/>
                                        <div className="file btn btn-lg btn-primary">
                                            Change Photo
                                            <input type="file" name="file"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="profile-head">
                                                <h5>
                                                    {user.name}
                                                </h5>
                                                <h6>
                                                    {user.work}
                                                </h6>
                                                <p className="proile-rating">RANKINGS : <span>1/10</span></p>
                                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="profile-work">
                                        <p>WORK LINK</p>
                                        <a href="">Website Link</a><br/>
                                        <a href="">Bootsnipp Profile</a><br/>
                                        <a href="">Bootply Profile</a>
                                        <p>SKILLS</p>
                                        <a href="">Web Designer</a><br/>
                                        <a href="">Web Developer</a><br/>
                                        <a href="">WordPress</a><br/>
                                        <a href="">WooCommerce</a><br/>
                                        <a href="">PHP, .Net</a><br/>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="tab-content profile-tab" id="myTabContent">
                                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>User Id</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>ShubhamSahoo456</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>Name</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>{user.name}</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>Email</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>{user.email}</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>Mobile</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>{user.phone}</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>Profession</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>{user.work}</p>
                                                        </div>
                                                    </div>
                                        </div>
                                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>Experience</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>Expert</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>Hourly Rate</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>10$/hr</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>Total Projects</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>23</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>English Level</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>Expert</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>Availability</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>6 months</p>
                                                        </div>
                                                    </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <label>Your Bio</label><br/>
                                                    <p>Your detail description</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>           
                    </div>
        </>
    )
}

export default About;