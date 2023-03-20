import React, { useEffect, useState } from 'react'
import { db, firebase } from '../firebase'
import { collection, getDocs } from "firebase/firestore";

function HeroSection({ searchItem, setSearchItem }) {
    // const [items, setItems] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    // const [httpError, setHttpError] = useState(null);



    // useEffect(() => {
    //     const getData = async () => {
    //         await getDocs(collection(db, "Product"))
    //             .then((querySnapshot) => {
    //                 const loadedItems = [];
    //                 querySnapshot.forEach((doc) => {
    //                     loadedItems.push(doc.data());
    //                     setIsLoading(false);
    //                 });
    //                 setItems(loadedItems);
    //             })
    //             .catch((error) => {
    //                 setHttpError(error.message);
    //                 console.log(error.message);
    //             });
    //     };
    //     getData();
    // }, []);

    return (
        <div className='bg-darkblue h-screen flex-col text-center'>
            <div className='pt-[200px]'>
                <div>
                    <span className='text-white text-[50px]'> Find Used Cars in Pakistan</span>
                </div>
                <div>
                    <span className='text-white text-[22px]'>With thousands of cars, we have just the right one for you</span>
                </div>
                <div className='ml-[280px] mt-7 w-[800px]'>

                    <form>
                        <label for="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Your Email</label>
                        <div class="relative">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input value={searchItem} onChange={(e) => { setSearchItem(e.target.value) }} type="search" id="search" className="block p-4 pl-10 lg:w-[60%] xl:w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required="" />
                            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-darkblue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-darkblue font-medium rounded-lg text-sm px-4 py-2 dark:bg-darkblue dark:hover:bg-darkblue dark:focus:ring-darkblue">Search</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default HeroSection