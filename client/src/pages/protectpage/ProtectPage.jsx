import HomePage from "../home/HomePage";
import { UserAuth } from "../../context/AuthContext";
const ProtectPage = ({ children }) => {
  const { user } = UserAuth();
  if (user) {
    return children;
  }
  return <HomePage />;
};

export default ProtectPage;
