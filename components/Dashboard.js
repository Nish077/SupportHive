"use client";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState} from "react";

const Dashboard = () => {
    const { data: session, status, update } = useSession()
    const router = useRouter()
    const [form, setform] = useState({})

    useEffect(() => {
        console.log(session)

        if (!session) {
            router.push('/login')
        }
        else {
            getData()
        }
    }, [])

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  
  const getData = async () => {

    //fetch user to be defined
    let u = await fetchUser(session.user.name)
    setform(u)
}





  return session ? <div className="text-white">{session.user.email}</div> : null;
};

export default Dashboard;