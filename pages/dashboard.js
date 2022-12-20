import Navigation from "../components/layout/Navigation";
import Sidebar from "../components/layout/Sidebar";
import { useState, useEffect } from "react";
import { getSession } from "next-auth/react";

const Dashboard = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [loadedSession, setLoadedSession] = useState();

    useEffect(() => {
        getSession().then((session) => {
            if(!session){
                window.location.href = "/";
            }else{
                setIsLoading(false);
            }

            setLoadedSession(session);
        })
    },[])

    if(isLoading){
        return <p>Loading...</p>;
    }

    return <>
        {/* Navigation */}
        <Navigation />

        {/* Sidebar */}
        <Sidebar />
    </>
}

export default Dashboard;