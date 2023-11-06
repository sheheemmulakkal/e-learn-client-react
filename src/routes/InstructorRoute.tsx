import { Routes, Route } from "react-router-dom";
import AuthProtected from "../components/common/protectedRoutes/AuthPotected";
import ProtectedRoute from "../components/common/protectedRoutes/ProtectedRoute";
import { Roles } from "../dtos/Roles";
import VerifyOtp from "../pages/student/VerifyOtp";
import InstructorSignup from "../pages/instructor/InstructorSignup";
import InstructorHome from "../pages/instructor/InstructorHome";
import InstructorLogin from "../pages/instructor/InstructorLogin";

const InstructorRoute = () => {
  return (
    <Routes>
      <Route
        path="/signup"
        element={<AuthProtected element={<InstructorSignup />} />}
      />
      <Route
        path="/verify-otp"
        element={<AuthProtected element={<VerifyOtp isInstructor={true} />} />}
      />
      <Route
        path="/login"
        element={<AuthProtected element={<InstructorLogin />} />}
      />
      <Route
        path="/"
        element={
          <ProtectedRoute
            allowedRoles={[Roles.instructor]}
            element={<InstructorHome />}
          />
        }
      />
    </Routes>
  );
};

export default InstructorRoute;
