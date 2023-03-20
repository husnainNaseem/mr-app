import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../components/navbar'
import Product from '../../components/Product'
import { db, firebase } from '../../firebase'
import { collection, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Footer from '../../components/Footer'

function Index() {
  const [data, setData] = useState({});
  const [httpError, setHttpError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();
  console.log("=====>>>> data is here", data)

  useEffect(() => {
    const getData = async () => {
      await getDocs(collection(db, "Product"))
        .then((querySnapshot) => {
          const loadedItems = [];
          querySnapshot.forEach((doc) => {
            loadedItems.push(doc.data());
            setIsLoading(false);
          });
          setData(loadedItems?.find((item) => item?.id === id))
        })
        .catch((error) => {
          setHttpError(error.message);
          console.log(error.message);
        });
    };
    getData();
  }, []);

  const auth = getAuth();
  const user = auth.currentUser;
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  console.log('user id==>', user);

  return (
    <div>
      <Navbar />
      <Product {...data } {...user } />
      <Footer />
    </div>
  )
}

export default Index