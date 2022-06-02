import React from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
// import {withRouter} from 'react-router-dom'

// const auth = getAuth();
// const user = auth.currentUser;
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });
// console.log('user id==>', user);

function Product({ carInfo, img, city, registeredIn, mileage, mobileNumber, price, description, engine, gear }) {
  return (
    <div className='bg-[#F2F3F3]'>
      <div className='container mx-auto flex gap-8'>
        <div className='container w-4/5 my-6 bg-white'>
          <div className='mx-6 py-3'>
            <h1 className='text-2xl text-darkblue font-semibold'>{carInfo}</h1>
            <p className='text-2xl text-darkblue font-semibold pt-1'>Location: {city}</p>
          </div>
          <div className='pt-3 mb-6 mx-6'>
            <img className='w-full h-full' src={img} alt="this is car image" />
          </div>
          <div className='flex mx-6 text-center'>
            <div className='border bg-darkblue text-white px-10 py-8'>
            <h1 className='text-xl text-white'>Registered In</h1>
              <p className='mt-2 text-lg text-white'>{registeredIn}</p>
            </div>
            <div className='border bg-darkblue text-white px-14 py-8'>
            <h1 className='text-xl text-white'>Mileage</h1>
              <p className='mt-2 text-lg text-white'>{mileage}KM</p>
            </div>
            <div className='border bg-darkblue text-white px-14 py-8'>
              <h1 className='text-xl text-white'>Engine</h1>
              <p className='mt-2 text-lg text-white'>{engine}</p>
            </div>
            <div className='border bg-darkblue text-white px-10 py-8'>
              <h1 className='text-xl text-white'>Gear</h1>
              <p className='mt-2 text-lg text-white'>{gear}</p>
            </div>
          </div>

          <div className='px-6 py-3'>
            <h1 className='font-semibold text-2xl text-darkblue'>Seller's comments</h1>
            <p className='font-semibold text-darkblue mt-2'>{description}</p>
          </div>
        </div>
        <div className='2/5 mt-6'>
          <div className='bg-white px-20 py-3 pb-4'>
            <h1 className='text-2xl text-darkblue font-semibold text-center'>Price:{price}</h1>
            <h2 className='text-2xl text-white font-semibold text-center bg-darkblue mt-3 py-2 px-3 flex gap-3 rounded-lg cursor-pointer dark:focus:ring-darkblue focus:ring-darkblue focus:ring-blue-300'>
              <span className='pt-1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                </svg>
              </span>{mobileNumber}</h2>
          </div>
          <div className='mt-4 text-darkblue font-semibold bg-white'>
            <div className='text-center pt-3'>
              <h1 className='text-2xl'>Seller Information</h1>
            </div>
            <hr className='my-2' />
            <div className='flex justify-center pb-2'>
              <img className='border border-darkblue' src={'../da'} alt='profile picture' />
            </div>
            <hr className='w-4/5 mx-auto' />
            <div className='py-2 pl-10'>
              <h1 className='text-lg mt-2'>Owner: </h1>
              <h2 className='text-lg mt-1'>Address: {city}</h2>
            </div>
            <div className='flex justify-center space-x-6 pb-4 pt-1'>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                </svg>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
                  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
              </div>
            </div>
          </div>
          <div className='bg-white mt-4'>
            <h1 className='text-center font-semibold text-darkblue pt-6 pb-4'>Safety tips for transaction</h1>
            <div className='px-16 pb-7'>
              <li className='font-lg text-darkblue'>Use a safe location to meet seller</li>
              <li className='font-lg text-darkblue'>Avoid cash transactions</li>
              <li className='font-lg text-darkblue'>Beware of unrealistic offers</li>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Product; 