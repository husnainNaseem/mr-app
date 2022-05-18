import React from "react";
import { getAuth, signOut } from "firebase/auth";
import Navbar from "../components/navbar";
import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";

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
                <AboutUs />
            </div>
            <div className="text-center">
                <button onClick={signOutUser} class="bg-darkblue text-white hover:bg-darkblue font-bold py-2 px-4 rounded-full mt-4 mb-4">
                    SignOut
                </button>
            </div>

            {/*
            <button onClick={signOutUser} class="w-24 container bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full mt-5">
                SignOut
            </button>
        */}

        </>
    );
};

export default Homepage;
