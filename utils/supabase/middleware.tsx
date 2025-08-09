import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest){
    let supabaseResponse = NextResponse.next({
        request,
    })

    // pass refreshed auth token to both Server Components and browser.
    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll(){
                    return request.cookies.getAll()
                },
                setAll(cookiesToSet){ // pass to server component
                    cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
                    supabaseResponse = NextResponse.next({
                        request,
                    })
                    cookiesToSet.forEach(({ name, value, options}) => // pass to browser
                        supabaseResponse.cookies.set(name, value, options)
                    )
                },
            },
        }
    )

    // dont run code here 
    // DO NOT REMOVE auth.getUser()!

    const {
        data: {user},
    } = await supabase.auth.getUser()

    if( // redirect user to login if authentication fails
        !user &&
        !request.nextUrl.pathname.startsWith('/login') &&
        !request.nextUrl.pathname.startsWith('/auth')
    ){
        const url = request.nextUrl.clone();
        url.pathname = '/login';
        return NextResponse.redirect(url);
    }

    return supabaseResponse;
}