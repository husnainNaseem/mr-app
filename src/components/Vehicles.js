import React, { useEffect, useState } from 'react'
import { db, firebase } from '../firebase'
import { collection, getDocs } from "firebase/firestore";
import { doc, deleteDoc } from "firebase/firestore";
import { async } from '@firebase/util';
import { getStorage, ref } from "firebase/storage";



function Vehicles() {
    const [isLoading, setIsLoading] = useState(false);
    const [items, setItems] = useState([]);
    const [httpError, setHttpError] = useState(null);
    const [maxNum, setMaxNum] = useState(4);
    const [searchItem, setSearchItem] = useState('');

    function deleteDoc(docx){
        ref
        .doc(docx.id)
        .delete()
        .catch((err) => {
            alert(err   )
            console.err(err);
        })
    }


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

    return (
        <>
            <div className='w-[100px] mx-4 pt-4 text-xl font-semibold text-darkblue'>Products</div>
            <div className='mx-4 py-4'>

                <table class="table-auto border border-separate">
                    <thead>
                        <tr>
                            <th className=' px-4 py-4'>carInfo</th>
                            <th className=' px-4 py-4'>City</th>
                            <th className=' px-4 py-4'>RegisteredIn</th>
                            <th className=' px-4 py-4'>Mileage</th>
                            <th className=' px-4 py-4'>Phone Num</th>
                            <th className=' px-4 py-4'>Price</th>
                            <th className=' px-4 py-4'>Description</th>
                            <th className=' px-4 py-4'>Image</th>

                        </tr>
                    </thead>
                    {
                        items.map((item, index) => {
                            return (
                                <tbody key={index}>
                                    <tr>
                                        <td className='border px-4 py-1'>{item.carInfo}</td>
                                        <td className='border px-4 py-1'>{item.city}</td>
                                        <td className='border px-4 py-1'>{item.registeredIn}</td>
                                        <td className='border px-4 py-1'>{item.mileage}</td>
                                        <td className='border px-4 py-1'>{item.mobileNumber}</td>
                                        <td className='border px-4 py-1'>{item.price}</td>
                                        <td className='border px-4 py-1'>{item.description}</td>
                                        <td className='border px-4 py-1'>
                                            <img className='w-full h-full' src={item.img} alt="this is car image" />
                                        </td>
                                        <td className='border px-4 py-1'>
                                            <button class="bg-darkblue hover:bg-blue-700 mb-1 text-white font-bold py-1 px-4 rounded">
                                                Update
                                            </button>
                                            <button onClick={() => { deleteDoc() }} class="bg-[#b91c1c] hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            );
                        })
                    }

                </table>
            </div>
        </>
    )
}

export default Vehicles