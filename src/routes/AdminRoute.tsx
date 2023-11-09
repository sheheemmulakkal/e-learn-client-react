import { Routes, Route } from "react-router-dom";
import AuthProtected from "../components/common/protectedRoutes/AuthPotected";
import { Roles } from "../dtos/Roles";
// import AdminProtectedRoutes from '../components/common/protectedRoutes/AdminProtected'
import AdminLogin from "../pages/admin/AdminLogin";
import AdminDashboard from "../pages/admin/AdminDashboard";
import StudentsList from "../pages/admin/StudentsList";
import InstructorsList from "../pages/admin/InstructorsList";
import ProtectedRoute from "../components/common/protectedRoutes/ProtectedRoute";

function AdminRoute() {
  return (
    <Routes>
      <Route
        path="/login"
        element={<AuthProtected element={<AdminLogin />} />}
      />
      <Route
        path="/students-list"
        element={
          <ProtectedRoute
            allowedRoles={[Roles.admin]}
            element={<StudentsList />}
          />
        }
      />
      <Route
        path="/instructor-list"
        element={
          <ProtectedRoute
            allowedRoles={[Roles.admin]}
            element={<InstructorsList />}
          />
        }
      />
      <Route
        path="/"
        element={
          <ProtectedRoute
            allowedRoles={[Roles.admin]}
            element={<AdminDashboard />}
          />
        }
      />
    </Routes>
  );
}

export default AdminRoute;
