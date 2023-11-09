import { Routes, Route } from "react-router-dom";
import StudentHome from "../pages/student/StudentHome";
import StudentSignup from "../pages/student/StudentSignup";
import StudentLogin from "../pages/student/StudentLogin";
import VerifyOtp from "../pages/student/VerifyOtp";
import ProtectedRoute from "../components/common/protectedRoutes/ProtectedRoute";
import { Roles } from "../dtos/Roles";
import AuthProtected from "../components/common/protectedRoutes/AuthPotected";
import StudentProfile from "../pages/student/StudentProfile";

function StudentRoute() {
  return (
    <Routes>
      <Route
        path="/signup"
        element={<AuthProtected element={<StudentSignup />} />}
      />
      <Route
        path="/login"
        element={<AuthProtected element={<StudentLogin />} />}
      />
      <Route
        path="/verify-otp"
        element={<AuthProtected element={<VerifyOtp isInstructor={false} />} />}
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute
            allowedRoles={[Roles.student]}
            element={<StudentProfile />}
          />
        }
      />
      <Route path="/" element={<StudentHome />} />
    </Routes>
  );
}

export default StudentRoute;
