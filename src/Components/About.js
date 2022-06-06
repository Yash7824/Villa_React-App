import React from "react";

export default function About() {
    return (
        <div>
            <div className="cont2">
                <h4>WELCOME TO BODHI FARM VILLA</h4>
                <h1>ENJOY YOUR STAY</h1>
                <h1>IN BALI-STYLE HOME.</h1>

                <p>
                    Discover exclusive savings and distinct offerings at iconic
                    destinations spanning coast to coast.
                </p>
            </div>

            <section className="main3">
                <div id="head">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
                        maxime quisquam omnis quidem blanditiis dolorum esse sunt non
                        adipisci asperiores. Error delectus iusto placeat nam deleniti eum
                        inventore quia modi.
                    </p>
                </div>

                <div id="content">
                    <p>
                        All the rooms open onto the gorgeous sky deck. The seating in the
                        lounge is perfect for the entire group to chill together, chatting
                        or playing board games. There is a separate living room, a dining
                        area. All indoor spaces are air-conditioned. Although the entire
                        house is absolutely lovely, the sunset on the deck is the most
                        magical experience this stay offers. Luxurious, romantic and
                        memorable - these are some of the most frequently used words by
                        guests to describe it. You do not want to miss hanging out in the
                        pool, or lazing on the swing and lounge chairs around as the
                        afternoon light turns into a soft golden shade. Enjoy your morning
                        cup of tea or drinks in the evening as you savour the stunning
                        sunset here. Besides, there's a ample parking,horse stable, cow
                        shed, book shelf. You can relax yourself in a blue and clear
                        swimming pool. Also you can enjoy bonfire along with barbeque and
                        free Wi-Fi. The best part is the Gazebo, by that you can have the
                        wide view of the surrounding area. Adventure lovers have many super
                        exciting trekking points and you can also enjoy the star gazing at
                        different points. Kids are having the separate playground area.
                        Conquer your hunger with an extraordinary dishes made in our kitchen
                        by in-house chefs. You will also get free Sula Vine tour passes.
                        Nature lovers would also be delighted by the lovely garden, If you
                        like the idea of being in the lap of nature while enjoying every
                        modern luxury, Bodhi Village Farm is the perfect place for you!
                    </p>
                </div>

                <div id="aside">
                    <iframe
                        width="420"
                        height="315"
                        src="https://www.youtube.com/embed/pioBEekIOGc"
                        frameborder="0"
                        allowfullscreen
                    ></iframe>
                </div>
            </section>

            <div id="container">
                <div id="slider-container">
                    <span onclick="slideRight()" className="btn"></span>
                    <div id="slider">
                        <div className="slide">
                            <img
                                src="https://www.bodhivilla.in/wp-content/uploads/elementor/thumbs/bodhi-farm-villa-02-pgm8wxaxfc10m4h6nrgyvvseozq1zhn9n3375qt8s8.jpg"
                                alt=""
                            />
                        </div>
                        <div className="slide">
                            <img
                                src="https://www.bodhivilla.in/wp-content/uploads/elementor/thumbs/bodhi-farm-villa-03-pgm8x204di7g86acwbi3qclpnx2w1z5xbqcmk4m9x4.jpg"
                                alt=""
                            />
                        </div>
                        <div className="slide">
                            <img
                                src="https://www.bodhivilla.in/wp-content/uploads/elementor/thumbs/bodhi-farm-villa-04-pgm8xg3p80qr2bpvlzli9r1mkp5e9fpwdo4wra1dbs.jpg"
                                alt=""
                            />
                        </div>
                        <div className="slide">
                            <img
                                src="https://www.bodhivilla.in/wp-content/uploads/elementor/thumbs/bodhi-farm-villa-05-pgm8xlqqd0ygzzhop219opme50dljmcaeg1tmxt0ag.jpg"
                                alt=""
                            />
                        </div>
                        <div className="slide">
                            <img
                                src="https://www.bodhivilla.in/wp-content/uploads/elementor/thumbs/bodhi-farm-villa-06-pgm8xqfxb74wm1auxm2ej6fp3xqfm3uy33b91bm1fc.jpg"
                                alt=""
                            />
                        </div>
                        <div className="slide">
                            <img
                                src="https://www.bodhivilla.in/wp-content/uploads/elementor/thumbs/bodhi-farm-villa-07-pgm8xu7a2ja1wh5ebnowt5hjhh7wgw9vflx6yfggqg.jpg"
                                alt=""
                            />
                        </div>
                        <div className="slide">
                            <img
                                src="https://www.bodhivilla.in/wp-content/uploads/elementor/thumbs/bodhi-farm-villa-08-pgm8xxymtvf76wzxppbf34jdv0pdbooss4j4vjaw1k.jpg"
                                alt=""
                            />
                        </div>
                        <div className="slide">
                            <img
                                src="https://www.bodhivilla.in/wp-content/uploads/elementor/thumbs/bodhi-farm-villa-10-pgm8y6f6jdqs3enncaz27kej7hjo8ymdtaei70ychk.jpg"
                                alt=""
                            />
                        </div>
                        <div className="slide">
                            <img
                                src="https://www.bodhivilla.in/wp-content/uploads/elementor/thumbs/bodhi-farm-villa-12-pgm8yevq8w2czwbcywmpc09ojydz68jyug9viilsxk.jpg"
                                alt=""
                            />
                        </div>
                        <div className="slide">
                            <img
                                src="https://www.bodhivilla.in/wp-content/uploads/elementor/thumbs/bodhi-farm-villa-23-pgm8zqthxfvzg0dq6zcod666ultp2sua11jmzmmq48.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                    <span onclick="slideLeft()" className="btn"></span>
                </div>
            </div>

            
        </div>
    );
}

// var container = document.getElementById('container')
// var slider = document.getElementById('slider');
// var slides = document.getElementsByClassName('slide').length;
// var buttons = document.getElementsByClassName('btn');


// var currentPosition = 0;
// var currentMargin = 0;
// var slidesPerPage = 0;
// var slidesCount = slides - slidesPerPage;
// var containerWidth = container.offsetWidth;
// var prevKeyActive = false;
// var nextKeyActive = true;

// window.addEventListener("resize", checkWidth);

// function checkWidth() {
//     containerWidth = container.offsetWidth;
//     setParams(containerWidth);
// }

// function setParams(w) {
//     if (w < 551) {
//         slidesPerPage = 1;
//     } else {
//         if (w < 901) {
//             slidesPerPage = 2;
//         } else {
//             if (w < 1101) {
//                 slidesPerPage = 3;
//             } else {
//                 slidesPerPage = 4;
//             }
//         }
//     }
//     slidesCount = slides - slidesPerPage;
//     if (currentPosition > slidesCount) {
//         currentPosition -= slidesPerPage;
//     };
//     currentMargin = - currentPosition * (100 / slidesPerPage);
//     slider.style.marginLeft = currentMargin + '%';
//     if (currentPosition > 0) {
//         buttons[0].classList.remove('inactive');
//     }
//     if (currentPosition < slidesCount) {
//         buttons[1].classList.remove('inactive');
//     }
//     if (currentPosition >= slidesCount) {
//         buttons[1].classList.add('inactive');
//     }
// }

// setParams();

// function slideRight() {
//     if (currentPosition != 0) {
//         slider.style.marginLeft = currentMargin + (100 / slidesPerPage) + '%';
//         currentMargin += (100 / slidesPerPage);
//         currentPosition--;
//     };
//     if (currentPosition === 0) {
//         buttons[0].classList.add('inactive');
//     }
//     if (currentPosition < slidesCount) {
//         buttons[1].classList.remove('inactive');
//     }
// };

// function slideLeft() {
//     if (currentPosition != slidesCount) {
//         slider.style.marginLeft = currentMargin - (100 / slidesPerPage) + '%';
//         currentMargin -= (100 / slidesPerPage);
//         currentPosition++;
//     };
//     if (currentPosition == slidesCount) {
//         buttons[1].classList.add('inactive');
//     }
//     if (currentPosition > 0) {
//         buttons[0].classList.remove('inactive');
//     }
// };
