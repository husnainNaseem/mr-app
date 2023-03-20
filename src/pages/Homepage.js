import React, { useEffect, useState } from "react";
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
import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";

const Homepage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [items, setItems] = useState([]);
    const [httpError, setHttpError] = useState(null);
    const [maxNum, setMaxNum] = useState(4);
    const [searchItem, setSearchItem] = useState('');

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
    console.log('search ==>', searchItem);


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
                <HeroSection searchItem={searchItem} setSearchItem={setSearchItem} />
                <OurProducts />
                <div className="bg-[#F2F3F3] pb-4">
                    <div className="container mx-auto text-2xl text-darkblue font-semibold pb-4">Cars</div>
                    <div className="container mx-auto grid grid-cols-4 gap-4 justify-center">
                        {searchItem ? items?.filter((car) => car.cat === 'Car')?.slice(0, maxNum).filter((item) => item?.carInfo.includes(searchItem)).map((item, index) => {
                            return (
                                <div key={index}>
                                    <Car
                                        {...item}
                                    />
                                </div>
                            )
                        }) :
                            items?.filter((car) => car.cat === 'Car')?.slice(0, maxNum).map((item, index) => {
                                return (
                                    <div key={index}>
                                        <Car
                                            {...item}
                                        />
                                    </div>
                                )
                            })}

                    </div>
                    <div className="flex justify-center mt-6">
                        {maxNum ?
                            <button onClick={() => setMaxNum()} type="button" class="text-white bg-darkblue hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 ">Load More
                            </button>
                            :
                            <button onClick={() => setMaxNum(4)} type="button" class="text-white bg-darkblue hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 ">Load less
                            </button>
                        }
                    </div>
                </div>

                <div className="bg-[#F2F3F3] pb-4">
                    <div className="container mx-auto text-2xl text-darkblue font-semibold pb-4">Bikes</div>
                    <div className="container mx-auto grid grid-cols-4 gap-4 justify-center">
                        {searchItem ? items?.filter((bike) => bike.cat === 'Bike')?.slice(0, maxNum).filter((item) => item?.carInfo.includes(searchItem)).map((item, index) => {
                            return (
                                <div key={index}>
                                    <Bike
                                        {...item}
                                    />
                                </div>
                            )
                        }) :
                            items?.filter((bike) => bike.cat === 'Bike')?.slice(0, maxNum).map((item, index) => {
                                return (
                                    <div key={index}>
                                        <Bike
                                            {...item}
                                        />
                                    </div>
                                )
                            })}
                    </div>
                    <div className="flex justify-center mt-6">
                        {maxNum ?
                            <button onClick={() => setMaxNum()} type="button" class="text-white bg-darkblue hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 ">Load More
                            </button>
                            :
                            <button onClick={() => setMaxNum(4)} type="button" class="text-white bg-darkblue hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 ">Load less
                            </button>
                        }
                    </div>
                </div>

                <div className="bg-[#F2F3F3] pb-4">
                    <div className="container mx-auto text-2xl text-darkblue font-semibold pb-4">Jeeps</div>
                    <div className="container mx-auto grid grid-cols-4 gap-4 justify-center">
                        {searchItem ? items?.filter((jeep) => jeep.cat === 'Jeep')?.slice(0, maxNum).filter((item) => item?.carInfo.includes(searchItem)).map((item, index) => {
                            return (
                                <div key={index}>
                                    <Jeep
                                        {...item}
                                    />
                                </div>
                            )
                        }) :
                            items?.filter((Jeep) => Jeep.cat === 'Jeep')?.slice(0, maxNum).map((item, index) => {
                                return (
                                    <div key={index}>
                                        <Jeep
                                            {...item}
                                        />
                                    </div>
                                )
                            })}

                    </div>
                    <div className="flex justify-center mt-6">
                        {maxNum ?
                            <button onClick={() => setMaxNum()} type="button" class="text-white bg-darkblue hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 ">Load More
                            </button>
                            :
                            <button onClick={() => setMaxNum(4)} type="button" class="text-white bg-darkblue hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 ">Load less
                            </button>
                        }
                    </div>
                </div>

                <div className="bg-[#F2F3F3] pb-4">
                    <div className="container mx-auto text-2xl text-darkblue font-semibold pb-4">SUV</div>
                    <div className="container mx-auto grid grid-cols-4 gap-4 justify-center">
                        {searchItem ? items?.filter((suv) => suv.cat === 'Suv')?.slice(0, maxNum).filter((item) => item?.carInfo.includes(searchItem)).map((item, index) => {
                            return (
                                <div key={index}>
                                    <SUV
                                        {...item}
                                    />
                                </div>
                            )
                        }) :
                            items?.filter((Jeep) => Jeep.cat === 'Jeep')?.slice(0, maxNum).map((item, index) => {
                                return (
                                    <div key={index}>
                                        <SUV
                                            {...item}
                                        />
                                    </div>
                                )
                            })}

                    </div>
                    <div className="flex justify-center mt-6">
                        {maxNum ?
                            <button onClick={() => setMaxNum()} type="button" class="text-white bg-darkblue hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 ">Load More
                            </button>
                            :
                            <button onClick={() => setMaxNum(4)} type="button" class="text-white bg-darkblue hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 ">Load less
                            </button>
                        }
                    </div>
                </div>

                <div className="bg-[#F2F3F3] pb-4">
                    <div className="container mx-auto text-2xl text-darkblue font-semibold pb-4">Buses</div>
                    <div className="container mx-auto grid grid-cols-4 gap-4 justify-center">
                        {searchItem ? items?.filter((car) => car.cat === 'Bus')?.slice(0, maxNum).filter((item) => item?.carInfo.includes(searchItem)).map((item, index) => {
                            return (
                                <div key={index}>
                                    <Bus
                                        {...item}
                                    />
                                </div>
                            )
                        }) :
                            items?.filter((car) => car.cat === 'Bus')?.slice(0, maxNum).map((item, index) => {
                                return (
                                    <div key={index}>
                                        <Bus
                                            {...item}
                                        />
                                    </div>
                                )
                            })}
                    </div>
                    <div className="flex justify-center mt-6">
                        {maxNum ?
                            <button onClick={() => setMaxNum()} type="button" class="text-white bg-darkblue hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 ">Load More
                            </button>
                            :
                            <button onClick={() => setMaxNum(4)} type="button" class="text-white bg-darkblue hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 ">Load less
                            </button>
                        }
                    </div>
                </div>

            </div>


            <div className="text-center bg-[#F2F3F3]">
                <button onClick={signOutUser} class="bg-darkblue text-white hover:bg-darkblue font-bold py-2 px-4 rounded-full mt-4 mb-4">
                    SignOut
                </button>
            </div>

            <div>
                <Footer />

            </div>

        </>
    );
};

export default Homepage;
