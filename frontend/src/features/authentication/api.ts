import axiosClient from "@/services/api/axiosClient";

interface RegisterUserRequest {
    username: string;
    email: string;
    password: string;
}

interface LoginUserRequest {
    email: string;
    password: string;
}

interface AuthResponse {
    access_token: string;
    refresh_token: string;
}

export const registerUser = async (
    data: RegisterUserRequest
): Promise<AuthResponse> => {
    try {
        const response = await axiosClient.post("/auth/register", data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const loginUser = async (
    data: LoginUserRequest
): Promise<AuthResponse> => {
    try {
        const response = await axiosClient.post("/auth/login", data);
        return response.data;
    } catch (error) {
        throw error;
    }
};
