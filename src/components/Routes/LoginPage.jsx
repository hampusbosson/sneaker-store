import Header from "../Header/Header";

function LoginPage() {
  return (
    <>
      <Header />
      <div className="w-full flex flex-col justify-center items-center mt-12">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-black text-5xl font-bold">Welcome Back!</h1>
          <h2 className="text-gray-500 font-semibold">Please sign-in with</h2>
        </div>
        <input
          type="tel"
          placeholder="Enter your number"
          className="border border-gray-800 placeholder-black p-3 mt-8 w-[18rem] text-black focus:outline-none hover:border-gray-900 hover:border-2 focus:border-gray-900 focus:border-2"
        />
        <button className="w-[18rem] bg-black text-white font-bold mt-5 h-[2.8rem]">
            LOG IN
        </button>
      </div>
    </>
  );
}

export default LoginPage;
