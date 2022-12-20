import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Router, useRouter } from "next/router";
import AuthForm from "../components/auth/AuthForm";
import Navigation from "../components/layout/Navigation";

export default function Home() {
  // const router = useRouter();
  // const [isLoading, setIsLoading] = useState(true);

  // // client side page guard, if user is logged in then redirect to dashboard page instead of login page
  // useEffect(() => {
  //   getSession().then(session => {
  //     if(session){
  //       router.replace('/dashboard');
  //     }else{
  //       setIsLoading(false);
  //     }
  //   })
  // },[router]);

  // if(isLoading){
  //   return <p>Loading...</p>
  // }

  return (
    <>
      <Navigation />
      <AuthForm />
    </>
  );
}

// Server side page guard, if user is logged in then redirect to dashboard page instead of login page
export const getServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  if (session) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
