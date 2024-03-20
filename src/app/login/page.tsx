import Image from "next/image";
import Logo from "~/images/logo.svg";
import Link from "next/link";
import GoogleIcon from "~/icons/GoogleIcon";

export default function Login() {
  return (
    <section className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div>
            <Image src={Logo} alt="Login" className="w-10 mx-auto" />
            <h2 className=" text-center text-2xl xl:text-3xl font-extrabold">
              Donation Hero
            </h2>
          </div>
          <div className="mt-12 flex flex-col items-center">
            <div className="w-full flex-1">
              <div className="flex flex-col items-center">
                <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                  <div className="bg-white p-2 rounded-full">
                    <GoogleIcon />
                  </div>
                  <span className="ml-4">Login with Google</span>
                </button>
              </div>

              <div className="my-12 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  Or Login with Email
                </div>
              </div>

              <div className="mx-auto max-w-xs">
                <input
                  className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  required
                  placeholder="example@mail.com"
                />
                <input
                  className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  placeholder="*********"
                  required
                />
                <button className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <span className="ml-3">Sign Up</span>
                </button>
                <p className="mt-6 text-lg text-gray-600 text-center">
                  Need an account?{" "}
                  <Link
                    href="/signup"
                    className=" text-indigo-700 hover:border-b hover:border-gray-500 hover:border-dotted"
                  >
                    Signup
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat bg-login"></div>
        </div>
      </div>
    </section>
  );
}
