import { useState } from "react"
import { useEffect } from "react";


const useCourse = () =>{

    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch("./research-data.json")
            .then(res => res.json())
            .then(res => setCourses(res))
    }, [])
    
    return [courses];
}

export default useCourse;