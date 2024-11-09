// hooks/useSignup.js

import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "@/store/authSlice";

const useSignup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = async (formData) => {
    const { firstName, lastName, termsAccepted, ...rest } = formData;
    const dataToSend = {
      ...rest,
      fullName: `${firstName} ${lastName}`,
    };

    if (!termsAccepted) {
      toast.error("You must accept the terms and conditions to sign up.", {
        position: "top-center",
        autoClose: 1000,
      });
      return;
    }

    try {
      const registerResponse = await axios.post(
        "http://localhost:8000/api/v1/users/register",
        dataToSend
      );
      console.log("Account created successfully:", registerResponse.data);

      const loginData = {
        identifier: dataToSend.username,
        password: dataToSend.password,
      };
      const loginResponse = await axios.post(
        "http://localhost:8000/api/v1/users/login",
        loginData
      );

      dispatch(login({ userData: loginResponse.data.data }));
      localStorage.setItem("userData", JSON.stringify(loginResponse.data.data));

      toast.success("Account created and logged in successfully!", {
        position: "top-center",
        autoClose: 1000,
      });
      navigate("/");
    } catch (error) {
      toast.error("Error creating account or logging in. Please try again.", {
        position: "top-center",
        autoClose: 1000,
      });
      console.error("Error creating account or logging in:", error);
    }
  };

  return { handleSignup };
};

export default useSignup;
