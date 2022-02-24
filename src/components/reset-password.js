import React, {  useState } from "react";
import { firebase } from "../firebase";
import { Link } from "react-router-dom";

const Index = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const resetPass = (e) => {
        setError(null);
        setSuccess(null);
        e.preventDefault();
        let auth = firebase.auth();
        auth.sendPasswordResetEmail(email)
            .then(function () {
                // Email sent.
                setSuccess("Email with a link to reset your password sent successfully.");
                setTimeout(() => {
                    window.location.href="/auth/sign-in";
                }, 1500);
            })
            .catch(function (error) {
                // An error happened.
                setError(error.message);
            });
    };
    return (
        <form onSubmit={(e) => resetPass(e)} className="flex flex-col items-center justify-center h-screen">
            <div className="bg-[#27272A] max-w-[480px] rounded-[8px] p-10">
                <p className="text-base font-medium leading-none text-gray-400 mb-2">React UI</p>
                <p className="text-2xl font-bold leading-normal text-white">Reset password</p>
                <div className="mt-8">
                    <label htmlFor="email" className="text-sm font-medium leading-none text-white">
                        Email
                    </label>
                    <div className="relative mt-2">
                        <input required id="email" className="bg-[#3F3F46] focus:outline-none rounded py-3 pr-3 pl-[36px] w-full text-white" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={"Email"} />
                        <svg className="absolute inset-0 m-auto ml-3" width={14} height={12} viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.6668 0.666672H0.333496V11.3333H13.6668V0.666672ZM12.3335 3.33334L7.00016 6.66667L1.66683 3.33334V2.00001L7.00016 5.33334L12.3335 2.00001V3.33334Z" fill="#E4E4E7" />
                        </svg>
                    </div>
                </div>
                <button type="submit" className="text-sm font-semibold leading-none text-white w-full px-32 py-4 bg-[#00B3E4] rounded-lg mt-8 focus:outline-none">
                    Reset password
                </button>
                <div className="mt-4 flex justify-end">
                    <Link to="/auth/sign-in">
                        <a className="text-xs font-medium leading-none underline text-gray-200">Sign in</a>
                    </Link>
                </div>
                {error && <p className="text-xs mt-6 text-red-400">{error}</p>}
                {success && <p className="text-xs mt-6 text-green-400">{success}</p>}
            </div>
        </form>
    );
    
};
export default Index;
