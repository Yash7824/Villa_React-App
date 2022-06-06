import React from 'react';
import '../CSS/Home.css';

export default function Home() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img className="d-block w-100 img1 img-fluid"
                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/01/04/c9/manduna-resort.jpg?w=900&h=-1&s=1"
                    alt="First slide" />
                <div className="carousel-caption d-none d-md-block upside">
                    <h2>Spend Quality Holidays with Us</h2>
                    <h4 className="l">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta voluptates molestias
                        commodi maiores voluptas veniam fuga voluptatibus at sunt repudiandae deserunt dolores similique
                        eos quidem consequuntur eveniet perferendis, sequi labore! Maxime ut debitis repudiandae est
                        enim nihil vel ipsam expedita.</h4>

                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">RESERVE NOW</button>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">KNOW MORE</button>
                </div>

            </div>
            <div className="carousel-item slide">
                <img className="d-block w-100 img1"
                    src="https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_650,q_auto,w_576/v1/filestore/c2rz3vzfzj9oa2o8z9ztc2ja9qdy_1589807667_Leonia-Holistic-Destination-Areal-View.jpg"
                    alt="Second slide" />
                <div className="carousel-caption d-none d-md-block upside">
                    <h2>lorem ipsum</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id beatae architecto voluptatem!</p>
                </div>
            </div>
            <div className="carousel-item">
                <img className="d-block w-100 img1"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMWylgFXq9OSGxvFKU_fNlXXdEnZ8iA8mOLg&usqp=CAU"
                    alt="Third slide" />
                <div className="carousel-caption d-none d-md-block upside">
                    <h2>lorem</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat dolorum tenetur molestiae
                        ullam atque rerum?</p>
                </div>
            </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>

        <a href="https://api.whatsapp.com/send?phone=51955081075&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202."
            className="float" target="_blank">
            <i className="fa fa-whatsapp my-float"></i>
        </a>


    </div>
  )
}
