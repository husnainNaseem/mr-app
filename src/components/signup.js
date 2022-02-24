import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { firebase } from "../firebase";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithPopup,
    GithubAuthProvider,
    GoogleAuthProvider,
    onAuthStateChanged,
    updateProfile
} from "firebase/auth";
const auth = getAuth();
const Signup = (_props) => {
    const [fullName, setFullName] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    const [Country, setCountry] = useState("");
    const [City, setCity] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [rePass, setRePass] = useState("");
    const [inviteSuccess, setInviteSuccess] = useState(false);
    const [isPassMisMatch, setIsPassMisMatch] = useState(false);
    const [revealPass, setRevealPass] = useState("password");
    const [revealRePass, setRevealRePass] = useState("password");
    const [isManualSignup, setIsManualSignup] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [manualErrorMessage, setManualErrorMessage] = useState(null);

    const loginWithGoogle = () => {
        setErrorMessage(null);
        signInWithPopup(auth, new GoogleAuthProvider())
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                // This gives you a Google Access Token. You can use it to access the Google API.
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                updateProfile(auth.currentUser, {
                    displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
                  })
                    .then(function() {
                        // Update successful.
                        window.location.href = "/";
                    })
                    .catch(function(error) {
                        // An error happened.
                    });

                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorMessage);
                // The email of the user's account used.
                const email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    };

    const loginWithGithub = () => {
        setErrorMessage(null);
        signInWithPopup(auth, new GithubAuthProvider())
            .then((result) => {
                const user = result.user;
                user.updateProfile({
                    displayName: user.displayName,
                })
                    .then(function() {
                        window.location.href = "/";
                    })
                    .catch(function(error) {
                        setErrorMessage(error.message);
                    });
                window.location.href="/HomeP"
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    };

    const sendInvite = async (e) => {
        e.preventDefault();
        setManualErrorMessage(null);
        if (pass !== rePass) {
            setIsPassMisMatch(true);
            return;
        }
        setIsPassMisMatch(false);
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, pass)
            .then((res) => {
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                        // user.updateProfile({
                        //     displayName: fullName,
                        //     // photoURL: "https://example.com/jane-q-user/profile.jpg",
                        // })
                        //     .then(function() {
                        //         window.location.href = "/auth/login";
                        //     })
                        //     .catch(function(error) {});
                        // user.sendEmailVerification();
                        // setInviteSuccess(true);
                        // ...
                        window.location.href = "/auth/sign-in";
                    } else {
                        // User is signed out
                        // ...
                    }
                });
            })
            .catch((err) => {
                console.log(
                    "%c Test value is",
                    "background: #222; padding:2px 5px; color: #bada55",
                    err
                );
                setManualErrorMessage(err.message);
            });
    };

    return (
        <div className="flex justify-center items-center min-h-screen py-12 absolute inset-0 w-full mt-[290px]">
            <div className="flex items-stretch">
                <form
                    onSubmit={(e) => sendInvite(e)}
                    className="max-w-[480px] rounded-[8px] w-full bg-[#27272A] p-10"
                >
                    <p className="text-2xl font-bold leading-normal text-white">
                        Registration Form
                    </p>
                    <div className="mt-8">
                        <button
                            onClick={loginWithGithub}
                            type="button"
                            className="relative pl-[52px] font-medium leading-none text-white w-full py-4 bg-[#464646] rounded-lg focus:outline-none text-left"
                        >
                            Sign up with GitHub
                            <svg
                                className="ml-4 absolute inset-0 m-auto"
                                width={21}
                                height={20}
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.1543 0C4.6293 0 0.154298 4.475 0.154298 10C0.153164 12.0993 0.813112 14.1456 2.04051 15.8487C3.26792 17.5517 5.00044 18.8251 6.9923 19.488C7.4923 19.575 7.6793 19.275 7.6793 19.012C7.6793 18.775 7.6663 17.988 7.6663 17.15C5.1543 17.613 4.5043 16.538 4.3043 15.975C4.1913 15.687 3.7043 14.8 3.2793 14.562C2.9293 14.375 2.4293 13.912 3.2663 13.9C4.0543 13.887 4.6163 14.625 4.8043 14.925C5.7043 16.437 7.1423 16.012 7.7163 15.75C7.8043 15.1 8.0663 14.663 8.3543 14.413C6.1293 14.163 3.8043 13.3 3.8043 9.475C3.8043 8.387 4.1913 7.488 4.8293 6.787C4.7293 6.537 4.3793 5.512 4.9293 4.137C4.9293 4.137 5.7663 3.875 7.6793 5.163C8.49336 4.93706 9.33447 4.82334 10.1793 4.825C11.0293 4.825 11.8793 4.937 12.6793 5.162C14.5913 3.862 15.4293 4.138 15.4293 4.138C15.9793 5.513 15.6293 6.538 15.5293 6.788C16.1663 7.488 16.5543 8.375 16.5543 9.475C16.5543 13.313 14.2173 14.163 11.9923 14.413C12.3543 14.725 12.6673 15.325 12.6673 16.263C12.6673 17.6 12.6543 18.675 12.6543 19.013C12.6543 19.275 12.8423 19.587 13.3423 19.487C15.3273 18.8168 17.0522 17.541 18.2742 15.8392C19.4962 14.1373 20.1537 12.0951 20.1543 10C20.1543 4.475 15.6793 0 10.1543 0Z"
                                    fill="white"
                                />
                            </svg>
                        </button>
                        <button
                            onClick={loginWithGoogle}
                            type="button"
                            className="relative pl-[52px] my-6 w-full py-4 bg-[#FFFFFF] rounded-lg focus:outline-none text-base font-medium leading-none text-black text-opacity-50 text-left"
                        >
                            Sign up with Google
                            <svg
                                className="ml-4 absolute inset-0 m-auto"
                                width={25}
                                height={24}
                                viewBox="0 0 25 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0)">
                                    <path
                                        d="M21.9892 12.1871C21.9892 11.3677 21.9246 10.7697 21.7847 10.1497H12.6885V13.848H18.0277C17.9201 14.767 17.3388 16.1512 16.047 17.0812L16.0289 17.205L18.905 19.4969L19.1042 19.5173C20.9342 17.7789 21.9892 15.221 21.9892 12.1871Z"
                                        fill="#4285F4"
                                    />
                                    <path
                                        d="M12.6886 21.9314C15.3044 21.9314 17.5004 21.0455 19.1044 19.5174L16.0472 17.0813C15.2291 17.6682 14.1311 18.0779 12.6886 18.0779C10.1266 18.0779 7.95214 16.3395 7.177 13.9366L7.06338 13.9465L4.0728 16.3273L4.03369 16.4391C5.62687 19.6946 8.89937 21.9314 12.6886 21.9314Z"
                                        fill="#34A853"
                                    />
                                    <path
                                        d="M7.17667 13.9366C6.97215 13.3165 6.85378 12.6521 6.85378 11.9656C6.85378 11.2791 6.97215 10.6147 7.16591 9.99463L7.1605 9.86257L4.13246 7.44363L4.03339 7.49211C3.37677 8.84302 3 10.36 3 11.9656C3 13.5712 3.37677 15.0881 4.03339 16.4391L7.17667 13.9366Z"
                                        fill="#FBBC05"
                                    />
                                    <path
                                        d="M12.6886 5.85336C14.5078 5.85336 15.7349 6.66168 16.4347 7.33718L19.1689 4.59107C17.4896 2.9855 15.3044 2 12.6886 2C8.89934 2 5.62686 4.23672 4.03369 7.49214L7.16622 9.99466C7.95211 7.59183 10.1266 5.85336 12.6886 5.85336Z"
                                        fill="#EB4335"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect
                                            width={24}
                                            height={24}
                                            fill="white"
                                            transform="translate(0.154297)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                        {errorMessage && (
                            <p className="my-4 text-sm text-red-400">{errorMessage}</p>
                        )}
                    </div>
                    <svg
                        className="my-6"
                        width={400}
                        height={16}
                        viewBox="0 0 400 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M199.386 8.18182C199.386 4.46023 197.159 2.20455 194.148 2.20455C191.125 2.20455 188.903 4.46023 188.903 8.18182C188.903 11.8977 191.125 14.1591 194.148 14.1591C197.159 14.1591 199.386 11.9034 199.386 8.18182ZM197.648 8.18182C197.648 11.017 196.148 12.5568 194.148 12.5568C192.142 12.5568 190.648 11.017 190.648 8.18182C190.648 5.34659 192.142 3.80682 194.148 3.80682C196.148 3.80682 197.648 5.34659 197.648 8.18182ZM201.575 14H203.331V9.59659H205.717C205.757 9.59659 205.791 9.59659 205.831 9.59659L208.195 14H210.195L207.615 9.28977C209.041 8.76136 209.751 7.57386 209.751 6.01136C209.751 3.86932 208.422 2.36364 205.723 2.36364H201.575V14ZM203.331 8.08523V3.86932H205.536C207.268 3.86932 207.984 4.69318 207.984 6.01136C207.984 7.32386 207.268 8.08523 205.558 8.08523H203.331Z"
                            fill="#71717A"
                        />
                        <line x1={221} y1="7.5" x2={400} y2="7.5" stroke="#3F3F46" />
                        <line y1="7.5" x2={179} y2="7.5" stroke="#3F3F46" />
                    </svg>
                    {!isManualSignup && (
                        <button
                            onClick={() => {
                                setErrorMessage(null);
                                setIsManualSignup(true);
                            }}
                            type="button"
                            className="text-sm font-semibold leading-none text-gray-800 w-full px-32 py-4 bg-[#fff] rounded-lg focus:outline-none"
                        >
                            Sign up manually
                        </button>
                    )}
                    <div className={isManualSignup ? "slidedown" : "slideup"}>
                        <div>
                            <label
                                htmlFor="name"
                                className="text-sm font-medium leading-none text-white"
                            >
                                Full Name
                            </label>
                            <div className="relative mt-2">
                                <input
                                    required
                                    id="name"
                                    className="bg-[#3F3F46] focus:outline-none rounded py-3 pr-3 pl-[36px] w-full text-white"
                                    type="text"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    placeholder={"Full name"}
                                />
                                <svg
                                    className="absolute inset-0 m-auto ml-3"
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7.00016 13.6667C3.31816 13.6667 0.333496 10.682 0.333496 7.00001C0.333496 3.31801 3.31816 0.333344 7.00016 0.333344C10.6822 0.333344 13.6668 3.31801 13.6668 7.00001C13.6668 10.682 10.6822 13.6667 7.00016 13.6667ZM3.66683 7.00001C3.66683 7.88407 4.01802 8.73191 4.64314 9.35703C5.26826 9.98215 6.11611 10.3333 7.00016 10.3333C7.88422 10.3333 8.73206 9.98215 9.35719 9.35703C9.98231 8.73191 10.3335 7.88407 10.3335 7.00001H9.00016C9.00016 7.53044 8.78945 8.03915 8.41438 8.41422C8.0393 8.7893 7.5306 9.00001 7.00016 9.00001C6.46973 9.00001 5.96102 8.7893 5.58595 8.41422C5.21088 8.03915 5.00016 7.53044 5.00016 7.00001H3.66683Z"
                                        fill="#E4E4E7"
                                    />
                                </svg>
                            </div>
                        </div>

                        <div className="mt-6">
                        <label
                            htmlFor="name"
                            className="text-sm font-medium leading-none text-white"
                        >
                            PhoneNumber
                        </label>
                        <div className="relative mt-2">
                            <input
                                required
                                id="name"
                                className="bg-[#3F3F46] focus:outline-none rounded py-3 pr-3 pl-[36px] w-full text-white"
                                type="text"
                                value={PhoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                placeholder={"Phone number"}
                            />
                            <svg
                                className="absolute inset-0 m-auto ml-3"
                                width={14}
                                height={14}
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7.00016 13.6667C3.31816 13.6667 0.333496 10.682 0.333496 7.00001C0.333496 3.31801 3.31816 0.333344 7.00016 0.333344C10.6822 0.333344 13.6668 3.31801 13.6668 7.00001C13.6668 10.682 10.6822 13.6667 7.00016 13.6667ZM3.66683 7.00001C3.66683 7.88407 4.01802 8.73191 4.64314 9.35703C5.26826 9.98215 6.11611 10.3333 7.00016 10.3333C7.88422 10.3333 8.73206 9.98215 9.35719 9.35703C9.98231 8.73191 10.3335 7.88407 10.3335 7.00001H9.00016C9.00016 7.53044 8.78945 8.03915 8.41438 8.41422C8.0393 8.7893 7.5306 9.00001 7.00016 9.00001C6.46973 9.00001 5.96102 8.7893 5.58595 8.41422C5.21088 8.03915 5.00016 7.53044 5.00016 7.00001H3.66683Z"
                                    fill="#E4E4E7"
                                />
                            </svg>
                        </div>
                    </div>

                    <div className="mt-6">
                        <label
                            htmlFor="name"
                            className="text-sm font-medium leading-none text-white"
                        >
                            Country
                        </label>
                        <div className="relative mt-2">
                            <input
                                required
                                id="name"
                                className="bg-[#3F3F46] focus:outline-none rounded py-3 pr-3 pl-[36px] w-full text-white"
                                type="text"
                                value={Country}
                                onChange={(e) => setCountry(e.target.value)}
                                placeholder={"Country"}
                            />
                            <svg
                                className="absolute inset-0 m-auto ml-3"
                                width={14}
                                height={14}
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7.00016 13.6667C3.31816 13.6667 0.333496 10.682 0.333496 7.00001C0.333496 3.31801 3.31816 0.333344 7.00016 0.333344C10.6822 0.333344 13.6668 3.31801 13.6668 7.00001C13.6668 10.682 10.6822 13.6667 7.00016 13.6667ZM3.66683 7.00001C3.66683 7.88407 4.01802 8.73191 4.64314 9.35703C5.26826 9.98215 6.11611 10.3333 7.00016 10.3333C7.88422 10.3333 8.73206 9.98215 9.35719 9.35703C9.98231 8.73191 10.3335 7.88407 10.3335 7.00001H9.00016C9.00016 7.53044 8.78945 8.03915 8.41438 8.41422C8.0393 8.7893 7.5306 9.00001 7.00016 9.00001C6.46973 9.00001 5.96102 8.7893 5.58595 8.41422C5.21088 8.03915 5.00016 7.53044 5.00016 7.00001H3.66683Z"
                                    fill="#E4E4E7"
                                />
                            </svg>
                        </div>
                    </div>

                    <div className="mt-6">
                        <label
                            htmlFor="name"
                            className="text-sm font-medium leading-none text-white"
                        >
                            City
                        </label>
                        <div className="relative mt-2">
                            <input
                                required
                                id="name"
                                className="bg-[#3F3F46] focus:outline-none rounded py-3 pr-3 pl-[36px] w-full text-white"
                                type="text"
                                value={City}
                                onChange={(e) => setCity(e.target.value)}
                                placeholder={"City"}
                            />
                            <svg
                                className="absolute inset-0 m-auto ml-3"
                                width={14}
                                height={14}
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7.00016 13.6667C3.31816 13.6667 0.333496 10.682 0.333496 7.00001C0.333496 3.31801 3.31816 0.333344 7.00016 0.333344C10.6822 0.333344 13.6668 3.31801 13.6668 7.00001C13.6668 10.682 10.6822 13.6667 7.00016 13.6667ZM3.66683 7.00001C3.66683 7.88407 4.01802 8.73191 4.64314 9.35703C5.26826 9.98215 6.11611 10.3333 7.00016 10.3333C7.88422 10.3333 8.73206 9.98215 9.35719 9.35703C9.98231 8.73191 10.3335 7.88407 10.3335 7.00001H9.00016C9.00016 7.53044 8.78945 8.03915 8.41438 8.41422C8.0393 8.7893 7.5306 9.00001 7.00016 9.00001C6.46973 9.00001 5.96102 8.7893 5.58595 8.41422C5.21088 8.03915 5.00016 7.53044 5.00016 7.00001H3.66683Z"
                                    fill="#E4E4E7"
                                />
                            </svg>
                        </div>
                    </div>

                        <div className="mt-6">
                            <label
                                htmlFor="email"
                                className="text-sm font-medium leading-none text-white"
                            >
                                Email
                            </label>
                            <div className="relative mt-2">
                                <input
                                    required
                                    id="email"
                                    className="bg-[#3F3F46] focus:outline-none rounded py-3 pr-3 pl-[36px] w-full text-white"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder={"Email"}
                                />
                                <svg
                                    className="absolute inset-0 m-auto ml-3"
                                    width={14}
                                    height={12}
                                    viewBox="0 0 14 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M13.6668 0.666672H0.333496V11.3333H13.6668V0.666672ZM12.3335 3.33334L7.00016 6.66667L1.66683 3.33334V2.00001L7.00016 5.33334L12.3335 2.00001V3.33334Z"
                                        fill="#E4E4E7"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="mt-6">
                            <label
                                htmlFor="pass"
                                className="text-sm font-medium leading-none text-white"
                            >
                                Password
                            </label>
                            <div className="relative mt-2">
                                <input
                                    required
                                    id="pass"
                                    className="bg-[#3F3F46] focus:outline-none rounded py-3 pr-3 pl-[36px] w-full text-white"
                                    type={revealPass}
                                    value={pass}
                                    onChange={(e) => setPass(e.target.value)}
                                    placeholder={"Password"}
                                />
                                <svg
                                    className="absolute inset-0 m-auto ml-3"
                                    width={12}
                                    height={15}
                                    viewBox="0 0 12 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M11.3332 5.3333H9.33317V4.13997C9.33317 2.39997 8.05984 0.846638 6.3265 0.679971C4.33984 0.493304 2.6665 2.0533 2.6665 3.99997V5.3333H0.666504V14.6666H11.3332V5.3333ZM5.99984 11.3333C5.2665 11.3333 4.6665 10.7333 4.6665 9.99997C4.6665 9.26664 5.2665 8.66664 5.99984 8.66664C6.73317 8.66664 7.33317 9.26664 7.33317 9.99997C7.33317 10.7333 6.73317 11.3333 5.99984 11.3333ZM3.99984 5.3333V3.99997C3.99984 2.8933 4.89317 1.99997 5.99984 1.99997C7.1065 1.99997 7.99984 2.8933 7.99984 3.99997V5.3333H3.99984Z"
                                        fill="#E4E4E7"
                                    />
                                </svg>
                                {revealPass !== "password" ? (
                                    <svg
                                        onClick={() => setRevealPass("password")}
                                        className="cursor-pointer absolute inset-0 m-auto mr-3"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11.9211 12.8647C10.7486 13.6084 9.38826 14.0022 7.99978 14C4.40511 14 1.41444 11.4133 0.787109 8C1.0738 6.44714 1.85486 5.0286 3.01378 3.956L0.927776 1.872L1.87111 0.928665L15.0704 14.1287L14.1271 15.0713L11.9204 12.8647H11.9211ZM3.95644 4.9C3.05045 5.72372 2.41932 6.80585 2.14844 8C2.35664 8.91097 2.77462 9.76076 3.36911 10.4817C3.9636 11.2027 4.71819 11.7749 5.57281 12.1529C6.42743 12.5308 7.35847 12.704 8.29184 12.6587C9.2252 12.6135 10.1351 12.3509 10.9491 11.892L9.59711 10.54C9.02157 10.9025 8.33991 11.0587 7.66393 10.983C6.98796 10.9072 6.3578 10.6039 5.87682 10.123C5.39584 9.64197 5.09259 9.01181 5.01682 8.33584C4.94104 7.65986 5.09723 6.9782 5.45978 6.40267L3.95644 4.9ZM8.60911 9.552L6.44778 7.39067C6.32915 7.69262 6.30123 8.02263 6.36745 8.34023C6.43366 8.65782 6.59112 8.94919 6.82052 9.17859C7.04992 9.40799 7.34129 9.56545 7.65888 9.63166C7.97647 9.69787 8.30649 9.66995 8.60844 9.55133L8.60911 9.552ZM13.8711 11.0613L12.9171 10.108C13.3628 9.47287 13.68 8.75679 13.8511 8C13.6699 7.20648 13.3293 6.4581 12.8499 5.80033C12.3705 5.14256 11.7623 4.58915 11.0624 4.17373C10.3624 3.75832 9.5853 3.48958 8.77826 3.38384C7.97122 3.27811 7.15111 3.33758 6.36778 3.55866L5.31578 2.50667C6.14711 2.18 7.05311 2 7.99978 2C11.5944 2 14.5851 4.58667 15.2124 8C15.0082 9.11046 14.549 10.1584 13.8711 11.0613ZM7.81511 5.00533C8.23945 4.97911 8.66452 5.04338 9.06214 5.19388C9.45976 5.34438 9.82085 5.57767 10.1215 5.8783C10.4221 6.17892 10.6554 6.54002 10.8059 6.93764C10.9564 7.33526 11.0207 7.76032 10.9944 8.18467L7.81444 5.00533H7.81511Z"
                                            fill="#A1A1AA"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        onClick={() => setRevealPass("text")}
                                        className="cursor-pointer absolute inset-0 m-auto mr-3"
                                        width={16}
                                        height={12}
                                        viewBox="0 0 16 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7.99978 0C11.5944 0 14.5851 2.58667 15.2124 6C14.5858 9.41333 11.5944 12 7.99978 12C4.40511 12 1.41444 9.41333 0.787109 6C1.41378 2.58667 4.40511 0 7.99978 0ZM7.99978 10.6667C9.35942 10.6664 10.6787 10.2045 11.7417 9.35678C12.8047 8.50901 13.5484 7.32552 13.8511 6C13.5473 4.67554 12.8031 3.49334 11.7402 2.64668C10.6773 1.80003 9.35864 1.33902 7.99978 1.33902C6.64091 1.33902 5.32224 1.80003 4.25936 2.64668C3.19648 3.49334 2.45229 4.67554 2.14844 6C2.45117 7.32552 3.19489 8.50901 4.25787 9.35678C5.32085 10.2045 6.64013 10.6664 7.99978 10.6667ZM7.99978 9C7.20413 9 6.44106 8.68393 5.87846 8.12132C5.31585 7.55871 4.99978 6.79565 4.99978 6C4.99978 5.20435 5.31585 4.44129 5.87846 3.87868C6.44106 3.31607 7.20413 3 7.99978 3C8.79543 3 9.55849 3.31607 10.1211 3.87868C10.6837 4.44129 10.9998 5.20435 10.9998 6C10.9998 6.79565 10.6837 7.55871 10.1211 8.12132C9.55849 8.68393 8.79543 9 7.99978 9ZM7.99978 7.66667C8.4418 7.66667 8.86573 7.49107 9.17829 7.17851C9.49085 6.86595 9.66644 6.44203 9.66644 6C9.66644 5.55797 9.49085 5.13405 9.17829 4.82149C8.86573 4.50893 8.4418 4.33333 7.99978 4.33333C7.55775 4.33333 7.13383 4.50893 6.82126 4.82149C6.5087 5.13405 6.33311 5.55797 6.33311 6C6.33311 6.44203 6.5087 6.86595 6.82126 7.17851C7.13383 7.49107 7.55775 7.66667 7.99978 7.66667Z"
                                            fill="#A1A1AA"
                                        />
                                    </svg>
                                )}
                            </div>
                        </div>
                        <div className="mt-6">
                            <label
                                htmlFor="rePass"
                                className="text-sm font-medium leading-none text-white"
                            >
                                Confirm Password
                            </label>
                            <div className="relative mt-2">
                                <input
                                    required
                                    id="rePass"
                                    className="bg-[#3F3F46] focus:outline-none rounded py-3 pr-3 pl-[36px] w-full text-white"
                                    type={revealRePass}
                                    value={rePass}
                                    onChange={(e) => setRePass(e.target.value)}
                                    placeholder={"Password"}
                                />
                                <svg
                                    className="absolute inset-0 m-auto ml-3"
                                    width={12}
                                    height={15}
                                    viewBox="0 0 12 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M11.3332 5.3333H9.33317V4.13997C9.33317 2.39997 8.05984 0.846638 6.3265 0.679971C4.33984 0.493304 2.6665 2.0533 2.6665 3.99997V5.3333H0.666504V14.6666H11.3332V5.3333ZM5.99984 11.3333C5.2665 11.3333 4.6665 10.7333 4.6665 9.99997C4.6665 9.26664 5.2665 8.66664 5.99984 8.66664C6.73317 8.66664 7.33317 9.26664 7.33317 9.99997C7.33317 10.7333 6.73317 11.3333 5.99984 11.3333ZM3.99984 5.3333V3.99997C3.99984 2.8933 4.89317 1.99997 5.99984 1.99997C7.1065 1.99997 7.99984 2.8933 7.99984 3.99997V5.3333H3.99984Z"
                                        fill="#E4E4E7"
                                    />
                                </svg>
                                {revealRePass !== "password" ? (
                                    <svg
                                        onClick={() => setRevealRePass("password")}
                                        className="cursor-pointer absolute inset-0 m-auto mr-3"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11.9211 12.8647C10.7486 13.6084 9.38826 14.0022 7.99978 14C4.40511 14 1.41444 11.4133 0.787109 8C1.0738 6.44714 1.85486 5.0286 3.01378 3.956L0.927776 1.872L1.87111 0.928665L15.0704 14.1287L14.1271 15.0713L11.9204 12.8647H11.9211ZM3.95644 4.9C3.05045 5.72372 2.41932 6.80585 2.14844 8C2.35664 8.91097 2.77462 9.76076 3.36911 10.4817C3.9636 11.2027 4.71819 11.7749 5.57281 12.1529C6.42743 12.5308 7.35847 12.704 8.29184 12.6587C9.2252 12.6135 10.1351 12.3509 10.9491 11.892L9.59711 10.54C9.02157 10.9025 8.33991 11.0587 7.66393 10.983C6.98796 10.9072 6.3578 10.6039 5.87682 10.123C5.39584 9.64197 5.09259 9.01181 5.01682 8.33584C4.94104 7.65986 5.09723 6.9782 5.45978 6.40267L3.95644 4.9ZM8.60911 9.552L6.44778 7.39067C6.32915 7.69262 6.30123 8.02263 6.36745 8.34023C6.43366 8.65782 6.59112 8.94919 6.82052 9.17859C7.04992 9.40799 7.34129 9.56545 7.65888 9.63166C7.97647 9.69787 8.30649 9.66995 8.60844 9.55133L8.60911 9.552ZM13.8711 11.0613L12.9171 10.108C13.3628 9.47287 13.68 8.75679 13.8511 8C13.6699 7.20648 13.3293 6.4581 12.8499 5.80033C12.3705 5.14256 11.7623 4.58915 11.0624 4.17373C10.3624 3.75832 9.5853 3.48958 8.77826 3.38384C7.97122 3.27811 7.15111 3.33758 6.36778 3.55866L5.31578 2.50667C6.14711 2.18 7.05311 2 7.99978 2C11.5944 2 14.5851 4.58667 15.2124 8C15.0082 9.11046 14.549 10.1584 13.8711 11.0613ZM7.81511 5.00533C8.23945 4.97911 8.66452 5.04338 9.06214 5.19388C9.45976 5.34438 9.82085 5.57767 10.1215 5.8783C10.4221 6.17892 10.6554 6.54002 10.8059 6.93764C10.9564 7.33526 11.0207 7.76032 10.9944 8.18467L7.81444 5.00533H7.81511Z"
                                            fill="#A1A1AA"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        onClick={() => setRevealRePass("text")}
                                        className="cursor-pointer absolute inset-0 m-auto mr-3"
                                        width={16}
                                        height={12}
                                        viewBox="0 0 16 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7.99978 0C11.5944 0 14.5851 2.58667 15.2124 6C14.5858 9.41333 11.5944 12 7.99978 12C4.40511 12 1.41444 9.41333 0.787109 6C1.41378 2.58667 4.40511 0 7.99978 0ZM7.99978 10.6667C9.35942 10.6664 10.6787 10.2045 11.7417 9.35678C12.8047 8.50901 13.5484 7.32552 13.8511 6C13.5473 4.67554 12.8031 3.49334 11.7402 2.64668C10.6773 1.80003 9.35864 1.33902 7.99978 1.33902C6.64091 1.33902 5.32224 1.80003 4.25936 2.64668C3.19648 3.49334 2.45229 4.67554 2.14844 6C2.45117 7.32552 3.19489 8.50901 4.25787 9.35678C5.32085 10.2045 6.64013 10.6664 7.99978 10.6667ZM7.99978 9C7.20413 9 6.44106 8.68393 5.87846 8.12132C5.31585 7.55871 4.99978 6.79565 4.99978 6C4.99978 5.20435 5.31585 4.44129 5.87846 3.87868C6.44106 3.31607 7.20413 3 7.99978 3C8.79543 3 9.55849 3.31607 10.1211 3.87868C10.6837 4.44129 10.9998 5.20435 10.9998 6C10.9998 6.79565 10.6837 7.55871 10.1211 8.12132C9.55849 8.68393 8.79543 9 7.99978 9ZM7.99978 7.66667C8.4418 7.66667 8.86573 7.49107 9.17829 7.17851C9.49085 6.86595 9.66644 6.44203 9.66644 6C9.66644 5.55797 9.49085 5.13405 9.17829 4.82149C8.86573 4.50893 8.4418 4.33333 7.99978 4.33333C7.55775 4.33333 7.13383 4.50893 6.82126 4.82149C6.5087 5.13405 6.33311 5.55797 6.33311 6C6.33311 6.44203 6.5087 6.86595 6.82126 7.17851C7.13383 7.49107 7.55775 7.66667 7.99978 7.66667Z"
                                            fill="#A1A1AA"
                                        />
                                    </svg>
                                )}
                            </div>

                            {isPassMisMatch && (
                                <p className="text-sm text-red-400">Passwords do not match</p>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="text-sm font-semibold leading-none text-white w-full px-40 py-4 bg-[#00B3E4] rounded-lg mt-8 focus:outline-none"
                        >
                            Sign me up!
                        </button>
                        {manualErrorMessage && (
                            <p className="my-4 text-sm text-red-400">{manualErrorMessage}</p>
                        )}
                        <div className="mt-4 inline-flex space-x-2 items-center justify-start">
                            <p className="text-xs font-medium leading-none text-gray-400">
                                Already have an account?
                            </p>
                            <Link to="/auth/sign-in">
                                <a className="text-xs font-medium leading-none underline text-gray-200">
                                    Sign in here
                                </a>
                            </Link>
                        </div>

                        {inviteSuccess && (
                            <div className="flex items-center mt-4">
                                Confirm your account and continue to&nbsp;
                                <Link to="/auth/sign-in">
                                    <a className="text-[#00B3E4]">Login</a>
                                </Link>
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
