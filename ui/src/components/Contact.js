import react from 'react';

const Contact =()=>{

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
                        
                        <form>
                            <div className="d-flex flex-row justify-content-between">
                                <div className="form-group input_div_text">
                                    <input type="text" className="form-control" id="name" placeholder="Your name" />
                                </div>

                                <div className="form-group input_div_text">
                                    <input type="email" className="form-control" id="email" placeholder="Your email" />
                                </div>

                                <div className="form-group input_div_text">
                                    <input type="text" className="form-control" id="mobile" placeholder="Your phone" />
                                </div>
                            </div>
                        
                            <div className="form-group input_div_text">
                                <textarea className="form-control" id="message" rows="8" placeholder="message"></textarea>
                            </div>
                        </form>

                    </div>
                </div>
           </div>
        </div>
        </>
    );
}

export default Contact; 