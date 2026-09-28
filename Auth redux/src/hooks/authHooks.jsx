import { useState } from "react";
import { set, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { addUser } from "../features/authSlice";

export const useAuth = () => {
  let dispatch = useDispatch();

  let navigate = useNavigate();

  const [registeredUsers, setRegisteredUsers] = useState(
    JSON.parse(localStorage.getItem("registeredUsers")) || [],
  );

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const registerForm = (data) => {
    let arr = [...registeredUsers, data];
    setRegisteredUsers(arr);
    toast.success("user Regestered");
    localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
  };
  const loginForm = (data) => {
    let user = registeredUsers.find((val) => {
      return val.email === data.email && val.password === data.password;
    });
    if (!user) {
      toast.error("Invalid Something");
      return;
    }

    dispatch(addUser(user));
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    toast.success("User LoggedIn");
    reset();
  };

  return {
    navigate,
    register,
    handleSubmit,
    reset,
    errors,
    registerForm,
    loginForm,
  };
};
