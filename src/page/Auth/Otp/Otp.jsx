


import backgroundImage from "../../../assets/auth/background.png"
import LogoImage from "../../../assets/auth/Logo.png";
import { Link, useNavigate, useParams } from "react-router-dom";

import OTPInput from "react-otp-input";
import { useState } from "react";

import { toast } from "sonner";
import { useForgotPasswordMutation, useVerifyEmailMutation } from "../../../redux/features/auth/authApi";

const Otp = () => {
  const [otp, setOtp] = useState("");
  const { email } = useParams();
  const navigate = useNavigate();
  const [forgotPassword] = useForgotPasswordMutation();
  const [verifyOtp, { isLoading }] = useVerifyEmailMutation();

  const handleOtpChange = (otpValue) => {
    setOtp(otpValue);
  };

  const handleMatchOtp = async () => {
    try {
      const res = await verifyOtp({
        email,
        oneTimeCode: otp,
      });

      if (res.error) {
        toast.error(res?.error?.data?.message);
      }
      if (res.data) {
        toast.success(res?.data?.message);
        navigate(`/auth/new-password/${email}`);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const handleResendPassword = async () => {
    try {
      const res = await forgotPassword({ email });
      if (res.error) {
        toast.error(res?.error?.data?.message);
      }
      if (res.data) {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div
      className="flex min-h-screen justify-center items-center"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="w-[80%] md:w-[60%] mx-auto  rounded-lg  flex">
        {/* Left side - Illustration */}

        <div className=" p-8 rounded-lg shadow-lg max-w-lg w-full">
          <img src={LogoImage} className="w-40 mx-auto mb-6" alt="Logo" />

          <h1 className="text-gray-800 font-bold text-2xl mb-2 text-center">
            Verify OTP
          </h1>
          <p className="text-gray-500 text-center mb-6">
            We’ll send a verification code to your email. Check your inbox and enter the code here.
          </p>

          <div className="flex justify-center">
            <OTPInput
              value={otp}
              onChange={handleOtpChange}
              numInputs={6}
              renderInput={(props) => <input {...props} />}
              containerStyle="flex gap-2"
              inputStyle={{
                width: "3rem",
                height: "3rem",
                borderRadius: "5px",
                border: "1px solid #ccc",
                textAlign: "center",
                fontSize: "1.5rem",
                fontWeight: "bold",
                backgroundColor: "#F3F3F3",
                outline: "none",
              }}
            />
          </div>

          <div onClick={handleMatchOtp} className="mt-6">
            <button
              loading={isLoading}
              className="w-full h-[44px] bg-[#0C3DA3] text-white font-bold py-2 px-4 rounded-lg"
            >
              Verify
            </button>
          </div>

          <div className="flex justify-between items-center mt-4">
            <p className="text-gray-500">Didn’t receive a code?</p>
            <button
              onClick={handleResendPassword}
              className="text-blue-600 font-semibold"
            >
              Resend Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;

