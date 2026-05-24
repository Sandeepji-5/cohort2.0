import routes from "./routes";


export const router =  createBrowserRoute([
    {
        path:'/login',
        navigate:<Login/>
    },
    {
        path:'/register',
        navigate:<Register/>
    },
    {
        path:'/',
        navigate: <>"Welcome to My Instagram Clone..."</>
    }


])