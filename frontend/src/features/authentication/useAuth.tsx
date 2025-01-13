import { useMutation } from "@tanstack/react-query";
import { loginUserAPI, registerUserAPI } from "./api";

const useAuth = () => {
    const Register = useMutation({
        mutationFn: registerUserAPI,
        mutationKey: ["RegisterUser"],
        onError: (error) => {
            console.error("UseAuth Error", error);
        },
        onSuccess: (data) => {
            console.log("Success", data);
        },
    });

    const Login = useMutation({
        mutationFn: loginUserAPI,
        mutationKey: ["LoginUser"],
        onError: (error) => {
            console.error("UseAuth Error", error);
        },
        onSuccess: (data) => {
            console.log("Success", data);
        },
    });

    return { Register, Login };
};

export default useAuth;
