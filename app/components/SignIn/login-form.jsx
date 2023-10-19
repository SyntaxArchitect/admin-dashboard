import Link from "next/link";
import { useEffect, useRef } from "react";
import { signIn, useSession } from "next-auth/react";
import { redirect } from 'next/navigation'

const LoginForm = (props) => {
    const userName = useRef('');
    const password = useRef('');
    const errorMessage = props.error;
    const { data } = useSession();

    useEffect(() => {
        if (data) {
            redirect('/dashboard')
        }
    }, [data])

    const handleLogin = async () => {
        await signIn("credentials", {
            email: userName.current,
            password: password.current,
            redirect: true,
            callbackUrl: "https://admin-dashboard-next-auth.vercel.app/dashboard"
        })
    }
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="">
                <h1 className="w-[8.9375rem] h-12 text-black font-['Montserrat'] text-4xl font-bold ">Sign In</h1>
                <h6 className="w-44 h-5 text-black font-['Lato'] ">Sign in to your account</h6>
                <div className="flex w-[23.7rem] justify-between">

                    <div className="flex hover:cursor-pointer rounded-[0.625rem] bg-neutral-100 placeholder-blueGray-300 text-blueGray-600 relative text-sm border-0 shadow outline-none focus:outline-none focus:ring py-4 px-2">
                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_0_170)">
                                <path d="M15.4001 8.116C15.4001 7.48636 15.3478 7.02688 15.2346 6.5504H7.87695V9.39229H12.1957C12.1087 10.0985 11.6385 11.1621 10.5936 11.8768L10.579 11.972L12.9053 13.7331L13.0665 13.7488C14.5467 12.4129 15.4001 10.4474 15.4001 8.116Z" fill="#4285F4" />
                                <path d="M7.87696 15.6037C9.9928 15.6037 11.7691 14.923 13.0665 13.7488L10.5936 11.8768C9.93187 12.3278 9.04371 12.6426 7.87696 12.6426C5.80464 12.6426 4.04578 11.3068 3.4188 9.4604L3.32689 9.46803L0.907916 11.2974L0.876282 11.3834C2.16495 13.8849 4.81197 15.6037 7.87696 15.6037Z" fill="#34A853" />
                                <path d="M3.41874 9.4604C3.2533 8.98391 3.15756 8.47335 3.15756 7.94583C3.15756 7.41825 3.2533 6.90775 3.41003 6.43126L3.40565 6.32978L0.95636 4.47101L0.876224 4.50826C0.345103 5.54634 0.0403442 6.71206 0.0403442 7.94583C0.0403442 9.1796 0.345103 10.3453 0.876224 11.3833L3.41874 9.4604Z" fill="#FBBC05" />
                                <path d="M7.87696 3.24898C9.34847 3.24898 10.3411 3.87011 10.9071 4.38918L13.1187 2.279C11.7604 1.04523 9.9928 0.287949 7.87696 0.287949C4.81197 0.287949 2.16495 2.0067 0.876282 4.50826L3.41009 6.43127C4.04578 4.58487 5.80464 3.24898 7.87696 3.24898Z" fill="#EB4335" />
                            </g>
                            <defs>
                                <clipPath id="clip0_0_170">
                                    <rect width="15.3686" height="15.3686" fill="white" transform="translate(0.0396118 0.287949)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <div
                            className="flex flex-col flex-shrink-0 justify-center w-[8.0625rem] h-4 text-[#858585]  font-['Montserrat'] text-xs  hover:cursor-pointer ml-2 "
                            type="button"
                            onClick={() => signIn('google', { callbackUrl: "https://admin-dashboard-next-auth.vercel.app/dashboard" })}
                        >
                            Sign in with Google
                        </div>
                    </div>

                    <div className="flex hover:cursor-pointer rounded-[0.625rem] bg-neutral-100 placeholder-blueGray-300 text-blueGray-600 relative text-sm border-0 shadow outline-none focus:outline-none focus:ring py-4 px-2">
                        <svg width={14} height={16} viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_0_178)">
                                <path d="M7.53348 1.52879C8.55093 0.197925 9.96544 0.191437 9.96544 0.191437C9.96544 0.191437 10.1758 1.44268 9.16505 2.64802C8.08578 3.93506 6.85904 3.72446 6.85904 3.72446C6.85904 3.72446 6.62869 2.71225 7.53348 1.52879ZM6.98845 4.60095C7.51188 4.60095 8.48334 3.8869 9.74783 3.8869C11.9244 3.8869 12.7807 5.42395 12.7807 5.42395C12.7807 5.42395 11.106 6.2737 11.106 8.33559C11.106 10.6616 13.1922 11.4632 13.1922 11.4632C13.1922 11.4632 11.7339 15.5368 9.76404 15.5368C8.8593 15.5368 8.15592 14.9317 7.20264 14.9317C6.23118 14.9317 5.26715 15.5594 4.63927 15.5594C2.84051 15.5594 0.568054 11.6952 0.568054 8.58896C0.568054 5.53288 2.49154 3.92971 4.29569 3.92971C5.46855 3.92971 6.3787 4.60095 6.98845 4.60095Z" fill="#999999" />
                            </g>
                            <defs>
                                <clipPath id="clip0_0_178">
                                    <rect width="12.6242" height="15.3686" fill="white" transform="translate(0.568054 0.190186)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <div className="flex flex-col flex-shrink-0 justify-center w-[7.5rem] h-4 text-[#858585]  font-['Montserrat'] text-xs ml-2">
                            Sign in with Apple
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <label className="text-black font-['Lato']">Email address</label>
                    <div className="w-[22.25rem] h-[2.6875rem] my-2">
                        <input
                            className="w-[22.25rem] h-[2.6875rem] rounded-[0.625rem] bg-neutral-100 px-3 placeholder-blueGray-300 text-blueGray-600 relative text-sm border-0 shadow outline-none focus:outline-none focus:ring"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            onChange={(e) => (userName.current = e.target.value)}
                        />
                    </div>
                    <label className="text-black font-['Lato']">Password</label>
                    <div className="w-[22.25rem] h-[2.6875rem] my-2">
                        <input
                            className="w-[22.25rem] h-[2.6875rem] rounded-[0.625rem] bg-neutral-100 px-3 placeholder-blueGray-300 text-blueGray-600 relative text-sm border-0 shadow outline-none focus:outline-none focus:ring"
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            onChange={(e) => (password.current = e.target.value)}
                        />
                    </div>
                    {!!errorMessage.error && <p className="text-red-500 text-xs font-['Lato']">Authentication failed</p>}
                    <div className="flex justify-center items-center w-[23.7rem] h-[2.6875rem] my-5 ">
                        <button
                            id="sign-button"
                            className="w-full h-[2.6875rem] rounded-[0.625rem] bg-[#4285f4] border-0 hover:cursor-pointer"
                            onClick={handleLogin}
                        >
                            <span id="sign-buttonT" className="w-[6.9375rem] h-[1.4375rem] text-white font-['Montserrat'] font-bold ">
                                Sign In
                            </span>
                        </button>
                    </div>
                    <Link id="forgot" href="/forgot-password"
                        className="w-[8.5rem] text-[#346bd4] font-['Lato'] "
                    >
                        Forgot password
                    </Link>

                    <div id="register" className="w-[17.875rem] text-[#346bd4] font-['Lato'] ">
                        Don’t have an account?
                        <Link href="/register"
                            className="w-[8.5rem] text-[#346bd4]  font-['Lato'] ml-2"
                        >
                            Register here
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm