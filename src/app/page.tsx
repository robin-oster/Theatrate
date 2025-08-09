import Header from "./header";
import { redirect } from "next/navigation";
import { createClient } from "../../utils/supabase/server";

export default async function LandingPage(){
    const supabase = await createClient();

    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect('/login');
    }

    return(
        <div className="bg-red-800 w-auto h-[100vh]">
            <Header/>
            <div className="grid grid-cols-4">
                <p>Hello, {data.user.email} </p>
            </div>
        </div>
    );
}