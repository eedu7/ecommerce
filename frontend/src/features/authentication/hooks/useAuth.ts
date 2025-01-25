import { LoginUser, RegisterUser } from "../api/mutation";

export const useAuth = () => {
    const login = LoginUser();
    const register = RegisterUser();
    return {
        login,
        register,
    };
};
