import React from "react";
import { getAuth, signOut } from "firebase/auth";
import Navbar from "../components/navbar";
import HeroSection from "../components/HeroSection";
import OurProducts from "../components/OurProducts";
import Car from "../components/Car";
import Bike from "../components/Bike";
import Jeep from "../components/Jeep";
import SUV from "../components/SUV";
import Bus from "../components/Bus";

const Homepage = () => {
    const signOutUser = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            })
            .catch((error) => {
                // An error happened.
            });
    };

    return (
        <>
            <div>
                <Navbar />
                <HeroSection />
                <OurProducts />
                <div className="bg-[#F2F3F3] pb-4">
                    <div className="container mx-auto text-2xl text-darkblue font-semibold pb-4">Cars</div>
                    <div className="container mx-auto grid grid-cols-4 gap-4 justify-center">
                        <Car
                            image='/images/car1.jpg'
                            title="honda"
                            price="600"
                            city="abbottabad"
                        />
                        <Car
                            image='/images/car1.jpg'
                            title="honda"
                            price="600"
                            city="abbottabad"
                        />
                        <Car
                            image='/images/car1.jpg'
                            title="honda"
                            price="600"
                            city="abbottabad"
                        />
                        <Car
                            image='/images/car1.jpg'
                            title="honda"
                            price="600"
                            city="abbottabad"
                        />
                    </div>
                </div>

                <div className="bg-[#F2F3F3] pb-4">
                    <div className="container mx-auto text-2xl text-darkblue font-semibold pb-4">Bikes</div>
                    <div className="container mx-auto grid grid-cols-4 gap-4 justify-center">
                        <Bike
                            image='/images/bike.jpg'
                            title="honda"
                            price="600"
                            city="abbottabad"
                        />
                        <Bike
                            image='/images/bike.jpg'
                            title="honda"
                            price="600"
                            city="abbottabad"
                        />
                        <Bike
                            image='/images/bike.jpg'
                            title="honda"
                            price="600"
                            city="abbottabad"
                        />
                        <Bike
                            image='/images/bike.jpg'
                            title="honda"
                            price="600"
                            city="abbottabad"
                        />
                    </div>
                </div>

                <div className="bg-[#F2F3F3] pb-4">
                    <div className="container mx-auto text-2xl text-darkblue font-semibold pb-4">Jeeps</div>
                    <div className="container mx-auto grid grid-cols-4 gap-4 justify-center">
                        <Jeep
                            image='/images/jeep1.jpg'
                            title="honda"
                            price="600"
                            city="abbottabad"
                        />
                        <Jeep
                            image='/images/jeep1.jpg'
                            title="honda"
                            price="600"
                            city="abbottabad"
                        />
                        <Jeep
                            image='/images/jeep1.jpg'
                            title="honda"
                            price="600"
                            city="abbottabad"
                        />
                        <Jeep
                            image='/images/jeep1.jpg'
                            title="honda"
                            price="600"
                            city="abbottabad"
                        />
                    </div>
                </div>

                <div className="bg-[#F2F3F3] pb-4">
                    <div className="container mx-auto text-2xl text-darkblue font-semibold pb-4">SUV</div>
                    <div className="container mx-auto grid grid-cols-4 gap-4 justify-center">
                        <SUV
                            image='/images/SUV.jpg'
                            title="honda"
                            price="600"
                            city="abbottabad"
                        />
                        <SUV
                            image='/images/SUV.jpg'
                            title="honda"
                            price="600"
                            city="abbottabad"
                        />
                        <SUV
                            image='/images/SUV.jpg'
                            title="honda"
                            price="600"
                            city="abbottabad"
                        />
                        <SUV
                            image='/images/SUV.jpg'
                            title="honda"
                            price="600"
                            city="abbottabad"
                        />
                    </div>
                </div>

                <div className="bg-[#F2F3F3] pb-4">
                    <div className="container mx-auto text-2xl text-darkblue font-semibold pb-4">Buses</div>
                    <div className="container mx-auto grid grid-cols-4 gap-4 justify-center">
                        <Bus
                            image='/images/bus.jpg'
                            title="honda"
                            price="600"
                            city="abbottabad"
                        />
                        <Bus
                            image='/images/bus.jpg'
                            title="honda"
                            price="600"
                            city="abbottabad"
                        />
                        <Bus
                            image='/images/bus.jpg'
                            title="honda"
                            price="600"
                            city="abbottabad"
                        />
                        <Bus
                            image='/images/bus.jpg'
                            title="honda"
                            price="600"
                            city="abbottabad"
                        />
                    </div>
                </div>

            </div>


            <div className="text-center">
                <button onClick={signOutUser} class="bg-darkblue text-white hover:bg-darkblue font-bold py-2 px-4 rounded-full mt-4 mb-4">
                    SignOut
                </button>
            </div>

        </>
    );
};

export default Homepage;
