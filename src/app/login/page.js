"use client";

import InputComponent from "@/components/FormElements/InputComponent";
import Notification from "@/components/Notification";
import { loginFormControls } from "@/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { signIn , useSession} from 'next-auth/react';

const initialFormdata = {
  email: "dodda@gmail.com",
  password: "Mani1234",
};

export default function Login() {
  const [formData, setFormData] = useState(initialFormdata);
  const router = useRouter();
  const session = useSession();

  console.log(formData);

  function isValidForm() {
    return formData &&
      formData.email &&
      formData.email.trim() !== "" &&
      formData.password &&
      formData.password.trim() !== ""
      ? true
      : false;
  }
  async function handleLogin() {

    const res = await signIn('credentials', {
      redirect: false,
      email : formData.email,
      password : formData.password
    });
    console.log(res, "repoosooso");
    if (res.status === 200) {
      toast.success(res.message, {
        position: "top-right",
      });
      setFormData(initialFormdata);
      console.log("sesss", res);
      router.push("/dashboard");
    } else {
      toast.error(res.message, {
        position: "top-right",
      });
    }
  }



  return (
    <div className="bg-white relative">
      <div className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-8 mr-auto xl:px-5 lg:flex-row">
        <div className="flex flex-col justify-center items-center w-full pr-10 pl-10 lg:flex-row">
          <div className="w-full mt-10 mr-0 mb-0 ml-0 relative max-w-2xl lg:mt-0 lg:w-5/12">
            <div className="flex flex-col items-center justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10">
              <p className="w-full text-4xl font-medium text-center font-serif">
                Login
              </p>
              <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
                {loginFormControls.map((controlItem) =>
                  controlItem.componentType === "input" ? (
                    <InputComponent
                      key = {controlItem.id}
                      type={controlItem.type}
                      placeholder={controlItem.placeholder}
                      label={controlItem.label}
                      value={formData[controlItem.id]}
                      onChange={(event) => {
                        setFormData({
                          ...formData,
                          [controlItem.id]: event.target.value,
                        });
                      }}
                    />
                  ) : null
                )}
                <button
                  className="disabled:opacity-50 inline-flex w-full items-center justify-center bg-black px-6 py-4 text-lg 
                     text-white transition-all duration-200 ease-in-out focus:shadow font-medium uppercase tracking-wide
                     "
                  disabled={!isValidForm()}
                  onClick={handleLogin}
                >Login
                </button>
                <div className="flex flex-col gap-2">
                  <p>Don't you have account ? Register here</p>
                  <button
                    className="inline-flex w-full items-center justify-center bg-black px-6 py-4 text-lg 
                     text-white transition-all duration-200 ease-in-out focus:shadow font-medium uppercase tracking-wide
                     "
                    onClick={() => router.push("/register")}
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Notification />
    </div>
  );
}
