import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../components/navbar'
import Product from '../../components/Product'
import { db, firebase } from '../../firebase'
import { collection, getDocs } from "firebase/firestore";
import { data } from "autoprefixer";

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


  

  return (
    <div>
      <Navbar />
      <Product {...data} />
    </div>
  )
}

export default Index