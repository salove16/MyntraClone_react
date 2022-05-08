import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export const PrivateComponent = ({ children }) => {
   const { currentUser } = useAuth();

   if (!currentUser) {
      return <Navigate to="/login" replace={false} />;
   }

   return children;
};
