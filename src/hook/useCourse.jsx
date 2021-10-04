// import pakages
import { useState } from "react"
import { useEffect } from "react";


const useCourse = () =>{

    const [courses, setCourses] = useState([]);

    // fetch custom json data 
    useEffect(()=>{
        fetch("./research-data.json")
            .then(res => res.json())
            .then(res => setCourses(res))
    }, [])
    
    // return corses data 
    return [courses];
}

export default useCourse;