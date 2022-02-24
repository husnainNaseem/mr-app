import React from "react";
import { getAuth, signOut } from "firebase/auth";

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
            <div className="container px-6 mx-auto">
                <h1 className="mt-4 text-center text-5xl">
                    Welcome to Homepage
                </h1>
            </div>
            <div className="text-center">
                    <button onClick={signOutUser} class="w-24 container bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full mt-5">
                        SignOut
                    </button>
            </div>
        </>
    );
};

export default Homepage;
