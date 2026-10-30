"use client"


import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../api/requests";




const UsersPage = () => {





    const { data, isLoading } = useQuery({
        queryKey: ["users"],
        queryFn: getUsers,
        staleTime: 10 * 60000,
        gcTime: 5 * 50000
    })



    return (
        <div>
            {data?.users.map((user) => (
                <li key={user.id}>
                    <img src={user.src} alt={user.name} />
                </li>
            ))}

            {/* <button onClick={() => {
                postUser()
            }}>Create User</button> */}
        </div>
    )
}

export default UsersPage