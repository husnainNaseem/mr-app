import React, { useEffect, useState} from "react";
import { getAuth, signOut } from "firebase/auth";
import Navbar from "../components/navbar";
import HeroSection from "../components/HeroSection";
import OurProducts from "../components/OurProducts";
import Car from "../components/Car";
import Bike from "../components/Bike";
import Jeep from "../components/Jeep";
import SUV from "../components/SUV";
import Bus from "../components/Bus";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { db, firebase } from '../firebase'
import { collection, getDocs } from "firebase/firestore";
import { data } from "autoprefixer";

const Homepage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [items, setItems] = useState([]);
    const [httpError, setHttpError] = useState(null);

    useEffect(() => {
        const getData = async () => {
          await getDocs(collection(db, "Product"))
            .then((querySnapshot) => {
              const loadedItems = [];
              querySnapshot.forEach((doc) => {
                loadedItems.push(doc.data());
                setIsLoading(false);
              });
              setItems(loadedItems);
            })
            .catch((error) => {
              setHttpError(error.message);
              console.log(error.message);
            });
        };
        getData();
      }, []);
    
    //   console.log(items[2].img)

    const carData = [
        {
            image: '/images/car1.jpg',
            title: "honda",
            price: "600",
            city: "abbottabad"
        },
        {
            image: '/images/car1.jpg',
            title: "honda",
            price: "600",
            city: "abbottabad"
        },
        {
            image: '/images/car1.jpg',
            title: "honda",
            price: "600",
            city: "abbottabad"
        },
        {
            image: '/images/car1.jpg',
            title: "honda",
            price: "600",
            city: "abbottabad"
        },
        {
            image: '/images/car1.jpg',
            title: "honda",
            price: "600",
            city: "abbottabad"
        }
    ]

    const bikeData = [
        {
            image: '/images/bike.jpg',
            title: "R3",
            price: "500",
            city: "abbottabad"
        },
        {
            image: '/images/bike.jpg',
            title: "R3",
            price: "500",
            city: "abbottabad"
        },
        {
            image: '/images/bike.jpg',
            title: "R3",
            price: "500",
            city: "abbottabad"
        },
        {
            image: '/images/bike.jpg',
            title: "R3",
            price: "500",
            city: "abbottabad"
        },
    ]

    const jeepData = [
        {
            image: '/images/jeep1.jpg',
            title: "Jeep",
            price: "800",
            city: "abbottabad"
        },
        {
            image: '/images/jeep1.jpg',
            title: "Jeep",
            price: "800",
            city: "abbottabad"
        },
        {
            image: '/images/jeep1.jpg',
            title: "Jeep",
            price: "800",
            city: "abbottabad"
        },
        {
            image: '/images/jeep1.jpg',
            title: "Jeep",
            price: "800",
            city: "abbottabad"
        },
    ]

    const suvData = [
        {
            image: '/images/SUV.jpg',
            title: "honda",
            price: "750",
            city: "abbottabad"
        },
        {
            image: '/images/SUV.jpg',
            title: "honda",
            price: "750",
            city: "abbottabad"
        },
        {
            image: '/images/SUV.jpg',
            title: "honda",
            price: "750",
            city: "abbottabad"
        },
        {
            image: '/images/SUV.jpg',
            title: "honda",
            price: "750",
            city: "abbottabad"
        },
    ]

    const busData = [
        {
            image: '/images/bus.jpg',
            title: "honda",
            price: "900",
            city: "abbottabad"
        },
        {
            image: '/images/bus.jpg',
            title: "honda",
            price: "900",
            city: "abbottabad"
        },
        {
            image: '/images/bus.jpg',
            title: "honda",
            price: "900",
            city: "abbottabad"
        },
        {
            image: '/images/bus.jpg',
            title: "honda",
            price: "900",
            city: "abbottabad"
        },
    ]


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
                        {items.slice(0, 4).map((item, index) => {
                            return (
                                <div key={index}>
                                    <Car
                                      {...item}
                                    />
                                </div>
                            )
                        })}

                    </div>
                </div>

                <div className="bg-[#F2F3F3] pb-4">
                    <div className="container mx-auto text-2xl text-darkblue font-semibold pb-4">Bikes</div>
                    <div className="container mx-auto grid grid-cols-4 gap-4 justify-center">
                        {bikeData.map((item, index) => {
                            return (
                                <div key={index}>
                                    <Bike
                                        image={item.image}
                                        title={item.title}
                                        price={item.price}
                                        city={item.city}
                                    />
                                </div>
                            )
                        })}

                    </div>
                </div>

                <div className="bg-[#F2F3F3] pb-4">
                    <div className="container mx-auto text-2xl text-darkblue font-semibold pb-4">Jeeps</div>
                    <div className="container mx-auto grid grid-cols-4 gap-4 justify-center">
                        {jeepData.map((item, index) => {
                            return (
                                <div key={index}>
                                    <Jeep
                                        image={item.image}
                                        title={item.title}
                                        price={item.price}
                                        city={item.city}
                                    />
                                </div>
                            )
                        })}

                    </div>
                </div>

                <div className="bg-[#F2F3F3] pb-4">
                    <div className="container mx-auto text-2xl text-darkblue font-semibold pb-4">SUV</div>
                    <div className="container mx-auto grid grid-cols-4 gap-4 justify-center">
                        {suvData.map((item, index) => {
                            return (
                                <div key={index}>
                                    <SUV
                                        image={item.image}
                                        title={item.title}
                                        price={item.price}
                                        city={item.city}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="bg-[#F2F3F3] pb-4">
                    <div className="container mx-auto text-2xl text-darkblue font-semibold pb-4">Buses</div>
                    <div className="container mx-auto grid grid-cols-4 gap-4 justify-center">
                        {busData.map((item, index) => {
                            return (
                                <div key={index}>
                                    <Bus
                                        image={item.image}
                                        title={item.title}
                                        price={item.price}
                                        city={item.city}
                                    />
                                </div>
                            )
                        })}
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
