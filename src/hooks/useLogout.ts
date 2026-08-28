import { useRouter } from "next/navigation";
import useAuth from "./useAuth";


const useLogout = () => {

    const { logout } = useAuth();
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await logout();

            // setProfileOpen(false);
            // setOpen(false);

            router.push("/login");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };
    return handleLogout
};

export default useLogout;