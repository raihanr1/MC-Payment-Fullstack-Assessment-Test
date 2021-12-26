import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function RequireAuth({ children }) {
  const { usersInformation, loading, error } = useSelector(
    (state) => state.transaction
  );
  if (!localStorage.access_token) {
    return <Navigate to="/login" />;
  } else if (!Object.keys(usersInformation).length && !loading && error) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
}
