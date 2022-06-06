import React from 'react'
import '../CSS/Contact.css'


export default function Contact() {

   
  return (
    <div>
        <section id="main4">
        <div className="logos">
            <div>
                <i className="fa fa-phone" style= {{fontSize:"48px", color:"red"}}></i>
                <p>PHONE</p>
                <p>+91 7770008888</p>
            </div>

            <div>
                <i className="fa fa-map-marker" style= {{fontSize:"48px", color:"red"}}></i>
                <p>ADDRESS</p>
                <p>Sulewadi Road, Near Alandi Canal Road, Makhmalabad, Nashik, Maharashtra</p>
            </div>

            <div>
                <i className="material-icons" style= {{fontSize:"48px", color:"red"}}>email</i>
                <p>EMAIL</p>
                <p>bodhifarmvilla@gmail.com</p>
            </div>
        </div>

        <div className="middle">
            <h3>CONTACT US FOR FURTHER CLARIFICATIONS</h3>
            <h1>DROP A LINE.</h1>
        </div>

        <div className="contactForm">
            <form className="needs-validation" novalidate>
                <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <input type="text" className="form-control" id="validationCustom01" placeholder="First name"
                             required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
        
                        <input type="text" className="form-control" id="validationCustom02" placeholder="Last name"
                             required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 email">
    
                        <div className="input-group flex-row">
                            
                            <input type="text" className="form-control" id="validationCustomUsername" placeholder="Email"
                                aria-describedby="inputGroupPrepend" required />
                            <div className="invalid-feedback">
                                Please choose a username.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-group message">
        
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Write your Message"></textarea>
                  </div>
                
                <button className="btn btn-primary buttonnn" type="submit">Send Message</button>
            </form>

            <script>
                
                function fun() {
                    
                    window.addEventListener('load', function () {
                        // Fetch all the forms we want to apply custom Bootstrap validation styles to
                        var forms = document.getElementsByClassName('needs-validation');
                        // Loop over them and prevent submission
                        var validation = Array.prototype.filter.call(forms, function (form) {
                            form.addEventListener('submit', function (event) {
                                if (form.checkValidity() === false) {
                                    event.preventDefault();
                                    event.stopPropagation();
                                }
                                form.classList.add('was-validated');
                            }, false);
                        });
                    }, false)
                }
            </script>
        </div>

        <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.1773614869844!2d73.46059881482091!3d19.01190468712472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7f79481e0651b%3A0xe4b1dbef2bd774fd!2sBodhi%20Villa%2C%20Karjat!5e0!3m2!1sen!2sin!4v1653485733481!5m2!1sen!2sin"  style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>
    </div>
  )
}
