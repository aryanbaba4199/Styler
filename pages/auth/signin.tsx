import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import MenuSideBar from "@/components/Header/MenuSidebar";
import SignInPage from "@/components/User/SignInPage";
import { useRouter } from "next/dist/client/router";

import { getProviders, getCsrfToken, getSession } from "next-auth/react";

export const getServerSideProps = async (context: any) => {
    
    const { req, query } = context;
    
    const { callbackUrl } = query || { callbackUrl: '/default-url' };
    // console.log('call:',callbackUrl, query, context)

    const session = await getSession({req});

    if(session) {
        return {
            redirect: {
                destination: callbackUrl
            }
        }
    }
    
    const csrfToken = await getCsrfToken(context);
    const providers = await getProviders();

    return{
        props: {
            providers,
            csrfToken,
            callbackUrl
        }
    }
}

const SignIn = ({ providers, csrfToken, callbackUrl }: any) => {
    const router = useRouter();
    if (providers) {
        providers = Object.values(providers);
      } else {
        router.push("/")
      }
      
    console.log("Sign In objects are","Providers are", providers,
    "CSRF are", csrfToken, "Callback url",  callbackUrl);
    
    return ( 
        <>
            <Header />
                <main className="bg-slate-100 w-full h-auto">
                    <SignInPage providers={providers} csrfToken={csrfToken} callbackUrl={callbackUrl}/>
                </main>
            <Footer />
            <MenuSideBar />
        </>
     );
}
 
export default SignIn;





