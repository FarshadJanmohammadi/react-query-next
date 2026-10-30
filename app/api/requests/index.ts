import { api } from "../axios";

export const getUsers = async (): Promise<{ message: string; users: TUser[] }> => {
    const res = await api.get("/users");
    return res.data;
}
