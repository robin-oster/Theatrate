'use server'

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "../../../utils/supabase/server";
import { AuthApiError } from "@supabase/supabase-js";

export async function login(formData: FormData){
    const supabase = await createClient();

    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string
    }

    const { error } = await supabase.auth.signInWithPassword(data);

    if (error != null && error.code == 'invalid_credentials') {
        console.log(error.code);
        redirect('/error');
    }
    else{
        revalidatePath('/', 'layout');
        redirect('/');
    }
}

export async function signup(formData: FormData){
    const supabase = await createClient();

    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string
    }

    const { error } = await supabase.auth.signUp(data);

    if (error){
        console.log('error: ' + error)
        redirect('/error');
    }
    else{
        console.log("email sent");
        redirect('/auth/confirm/email')
    }
}