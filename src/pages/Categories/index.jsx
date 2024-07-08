import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SkeletonLoader from "../../components/SkeletonLoader";

const Categories=()=>{
    const [categories,setCategories]= useState([])
    const navigate = useNavigate();
    const [loading, setLoading]=useState(true)


    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products/categories')
        .then(response => {
          setCategories(response.data);
          setLoading(false)
        })
        .catch(error => {
          console.error("Error fetching categories:", error);
          setLoading(false)
        });
        },[])


    return(
        <div className="container mx-auto p-4">

     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
     {loading ? (
          Array.from({ length: 4 }).map((_, index) => <SkeletonLoader key={index} />)
        ) :
            (
                categories.map(category => (
                  <div
                    key={category}
                    className="bg-white shadow-md p-6 h-40 rounded-lg flex items-center justify-center text-xl font-semibold text-gray-700 hover:bg-gray-100 cursor-pointer"
                    onClick={() => navigate(`/category/${category}`)}
                  >
                    {category}
                  </div>
                ))

        )
        }
     
   
    </div>
    </div>
    

)
}
export default Categories;