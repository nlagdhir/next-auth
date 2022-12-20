import Navigation from "../components/layout/Navigation";
import Sidebar from "../components/layout/Sidebar";
import { useState, useEffect } from "react";
import { getSession } from "next-auth/react";

const Dashboard = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [loadedSession, setLoadedSession] = useState();

//   // client side page guard, if user not logged in then redirect to login page
//   useEffect(() => {
//     getSession().then((session) => {
//       if (!session) {
//         window.location.href = "/";
//       } else {
//         setIsLoading(false);
//       }

//       setLoadedSession(session);
//     });
//   }, []);

//   if (isLoading) {
//     return <p>Loading...</p>;
//   }

  return (
    <>
      {/* Navigation */}
      <Navigation />

      {/* Sidebar */}
      <Sidebar />
    </>
  );
};


  // server side page guard, if user not logged in then redirect to login page

export const getServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};

export default Dashboard;
