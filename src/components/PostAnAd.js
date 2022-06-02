import React, { useState } from 'react'
import { storage, db } from '../firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { doc, setDoc } from "firebase/firestore";

import { v4 as uuidv4 } from 'uuid';
import { async } from '@firebase/util';

function PostAnAd() {
    const [city, setCity] = useState("");
    const [cat, setCat] = useState();
    const [carInfo, setCarInfo] = useState("");
    const [registeredIn, setRegisteredIn] = useState("");
    const [engine, setEngine] = useState("");
    const [mileage, setMileage] = useState("");
    const [price, setPrice] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [description, setDescription] = useState("");
    const [productImg, setProductImg] = useState("");
    const [gear, setGear] = useState("");

    const types = ['image/png', 'image/jpeg']; // image types

    const productImgHandler = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile && types.includes(selectedFile.type)) {
            setProductImg(selectedFile);
        }
        else {
            setProductImg(null);
        }
    }

    const UploadPost = () => {
        if (productImg == null) return;
        const imageRef = ref(storage, `images / ${productImg.name + uuidv4()}`);
        uploadBytes(imageRef, productImg).then(() => {
            getDownloadURL(ref(imageRef))
                .then((url) => {
                    const setColl = async () => {
                        await setDoc(doc(db, "Product", uuidv4()), {
                            city: city,
                            carInfo: carInfo,
                            registeredIn: registeredIn,
                            engine: engine,
                            mileage: mileage,
                            price: price,
                            mobileNumber: mobileNumber,
                            description: description,
                            cat: cat,
                            gear: gear,
                            img: url,
                            id: uuidv4()
                        })
                            .then(() => {
                                alert("Post submitted");
                                setCity('');
                                setCarInfo('')
                                setEngine('')
                                setRegisteredIn('');
                                setGear('')
                                setMileage('');
                                setPrice('');
                                setCat('');
                                setMobileNumber('');
                                setDescription('');
                                setProductImg('')
                            })
                            .catch(() => {
                                alert("Error");
                            });
                    };
                    return setColl();
                });
        })
    }

    return (
        <div className='container mx-auto'>
            <div className='mx-auto max-w-sm mb-4'>
                <label for="email" class="mt-3 block mb-2 text-md font-medium text-darkblue dark:text-gray-300">Brand</label>
                <input value={carInfo} onChange={(e) => { setCarInfo(e.target.value) }} type="email" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-darkblue focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Car Information" />

                <label for="email" className="block mb-2 mt-2 text-md font-medium text-darkblue dark:text-gray-300">City</label>
                <input value={city} onChange={(e) => { setCity(e.target.value) }} type="email" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-darkblue text-gray-900 text-sm rounded-lg focus:ring-darkblue focus:border-darkblue block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="City" />

                <label className="block mb-2 text-md font-medium text-darkblue dark:text-gray-300 mt-2">Categories</label>
                <select
                    className="w-full rounded-lg text-sm font-medium focus:outline-none leading-none text-gray-900 p-3 border border-gray-200 focus:ring-[2px] bg-gray-300 focus:ring-darkblue"
                    type="text"
                    value={cat}
                    onChange={(e) => { setCat(e.target.value) }}
                >
                    <option className="font-medium border border-darkblue text-gray-900 text-sm rounded-lg">Select One</option>
                    <option className="font-medium text-base">Car</option>
                    <option className="font-medium text-base">Jeep</option>
                    <option className="font-medium text-base">Bike</option>
                    <option className="font-medium text-base">Suv</option>
                    <option className="font-medium text-base">Bus</option>
                </select>

                <label for="email" class="mt-3 block mb-2 text-md font-medium text-darkblue dark:text-gray-300">Registered In</label>
                <input value={registeredIn} onChange={(e) => { setRegisteredIn(e.target.value) }} type="email" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-darkblue focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Registered In" />

                <label for="email" class="mt-3 block mb-2 text-md font-medium text-darkblue dark:text-gray-300">Engine</label>
                <input value={engine} onChange={(e) => { setEngine(e.target.value) }} type="email" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-darkblue focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Petrol or gas" />

                <label for="email" class="mt-3 block mb-2 text-md font-medium text-darkblue dark:text-gray-300">Gear</label>
                <input value={gear} onChange={(e) => { setGear(e.target.value) }} type="email" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-darkblue focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Auto or manual" />

                <label for="email" class="mt-3 block mb-2 text-md font-medium text-darkblue dark:text-gray-300">Mileage * (km)</label>
                <input value={mileage} onChange={(e) => { setMileage(e.target.value) }} type="email" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-darkblue focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mileage" />

                <label for="email" class="mt-3 block mb-2 text-md font-medium text-darkblue dark:text-gray-300">Price * (Rs.)</label>
                <input value={price} onChange={(e) => { setPrice(e.target.value) }} type="email" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-darkblue focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Price" />

                <label for="email" class="mt-3 block mb-2 text-md font-medium text-darkblue dark:text-gray-300">Mobile Number</label>
                <input value={mobileNumber} onChange={(e) => { setMobileNumber(e.target.value) }} type="integer" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-darkblue focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mobile number" />

                <label for="message" class="mt-3 block mb-2 text-md font-medium text-darkblue dark:text-gray-400">Ad Description</label>
                <textarea value={description} onChange={(e) => { setDescription(e.target.value) }} id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add description"></textarea>
            </div>

            <div className='mx-auto max-w-2xl mb-4'>
                <div class="flex justify-center items-center w-full">
                    <label for="dropzone-file" class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-darkblue border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div class="flex flex-col justify-center items-center pt-5 pb-6">
                            <svg class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input onChange={productImgHandler} id="dropzone-file" type="file" class="hidden" />
                    </label>
                </div>
                <div className='flex justify-center'>
                    <button onClick={() => { UploadPost() }} type="button" class="mt-4 text-white bg-darkblue hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit and continue</button>
                </div>
            </div>


        </div>
    )
}

export default PostAnAd

