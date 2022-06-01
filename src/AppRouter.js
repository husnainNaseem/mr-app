import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { AuthProvider } from "./auth";
import SignIn from "./components/signin";
import Signup from "./components/signup";
import ResetPass from "./components/reset-password";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/about-page";
import ContactPage from "./pages/contact-page";
import PostAd from "./pages/post-ad";
import ProductPage from "./pages/product-detail";


const AppRouter = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            setLoading(false);
        });
    });
    const RemoveTrailingSlash = ({ ...rest }) => {
        const location = useLocation();

        // If the last character of the url is '/'
        if (location.pathname.match("/.*/$")) {
            return (
                <Navigate
                    replace
                    {...rest}
                    to={{
                        pathname: location.pathname.replace(/\/+$/, ""),
                        search: location.search,
                    }}
                />
            );
        } else return null;
    };
    const Loading = () => {
        return (
            <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-black text-white">
                Loading...
            </div>
        );
    };
    return loading ? (
        <Loading />
    ) : (
        <React.Fragment>
            <RemoveTrailingSlash />
            <AuthProvider>
                <Routes>
                    <Route path="/" exact element={<Homepage />} />
                    <Route path="/about-page" element={<AboutPage />} />
                    <Route path="/post-ad" element={<PostAd />} />
                    <Route path="/product-detail/:id" element={<ProductPage />} />
                    <Route path="/contact-page" element={<ContactPage />} />
                    <Route path="/auth/sign-in" element={<SignIn />} />
                    <Route path="/auth/signup" element={<Signup />} />
                    <Route path="/auth/reset-password" element={<ResetPass />} />
                </Routes>
            </AuthProvider>
        </React.Fragment>
    );
};

export default AppRouter;
