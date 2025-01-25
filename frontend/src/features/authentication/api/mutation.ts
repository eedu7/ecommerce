import { useMutation } from "@tanstack/react-query";
import { loginUser, registerUser } from "./api";

export const LoginUser = () => {
    return useMutation({
        mutationFn: loginUser,
        mutationKey: ["loginUser"],
        onSuccess: (data) => {
            console.log("Login successfull!");
            console.table(data);
        },
        onError: (error) => {
            console.error("Login failed!", error);
        },
    });
};

export const RegisterUser = () => {
    return useMutation({
        mutationFn: registerUser,
        mutationKey: ["registerUser"],
        onSuccess: (data) => {
            console.log("Registered successfully!");
            console.table(data);
        },
        onError: (error) => {
            console.error("Registeration failed!", error);
        },
    });
};
