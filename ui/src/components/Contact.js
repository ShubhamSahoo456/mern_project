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

            <div className="row">
                <div className="col-7 mx-auto message_div my-5">
                    
                </div>
            </div>
        </div>
        </>
    );
}

export default Contact;