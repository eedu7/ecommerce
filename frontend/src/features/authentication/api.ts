import apiClient from "@/lib/apiClient";

type LoginUserData = {
    email: string;
    password: string;
};

type RegisterUserData = LoginUserData & {
    username: string;
};

export const registerUserAPI = async (data: RegisterUserData) => {
    const response = await apiClient.post("/auth/register/", data);
    return response.data;
};

export const loginUserAPI = async (data: LoginUserData) => {
    const response = await apiClient.post("/auth/login/", data);
    return response.data;
};
