import { Routes, Route } from "react-router-dom";
import AuthProtected from "../components/common/protectedRoutes/AuthPotected";
import ProtectedRoute from "../components/common/protectedRoutes/ProtectedRoute";
import Admin from "../pages/admin/Admin";
import StudentHome from "../pages/student/StudentHome";
import StudentLogin from "../pages/student/StudentLogin";
import StudentSignup from "../pages/student/StudentSignup";
import InstructorLogin from "../pages/instructor/InstructorLogin";
import StudentProfile from "../pages/student/StudentProfile";
import InstructorSignup from "../pages/instructor/InstructorSignup";
import MyCourses from "../pages/instructor/MyCourses";
import AddCourse from "../pages/instructor/AddCourse";
import InstructorHome from "../pages/instructor/InstructorHome";
import AdminLogin from "../pages/admin/AdminLogin";
import StudentsList from "../pages/admin/StudentsList";
import InstructorsList from "../pages/admin/InstructorsList";
import Categories from "../pages/admin/Categories";
import AdminDashboard from "../pages/admin/AdminDashboard";
import VerifyOtp from "../pages/student/VerifyOtp";
import CourseListTable from "../pages/admin/CourseListTable";

import { Roles } from "../dtos/Roles";
import Instructor from "../pages/instructor/Instructor";
import ChangePassword from "../pages/admin/ChangePassword";

const RoutePage = () => {
  return (
    <>
      <Routes>
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={[Roles.admin]} element={<Admin />} />
          }
        >
          <Route index={true} element={<AdminDashboard />} />
          <Route path="students-list" element={<StudentsList />} />
          <Route path="instructor-list" element={<InstructorsList />} />
          <Route path="categories" element={<Categories />} />
          <Route path="courses" element={<CourseListTable />} />
        </Route>
        <Route
          path="/instructor"
          element={
            <ProtectedRoute
              allowedRoles={[Roles.instructor]}
              element={<Instructor />}
            />
          }
        >
          <Route index={true} element={<InstructorHome />} />
          <Route path="add-course" element={<AddCourse />} />
          <Route path="my-courses" element={<MyCourses />} />
        </Route>
        <Route
          path="/instructor/login"
          element={<AuthProtected element={<InstructorLogin />} />}
        />
        <Route
          path="/instructor/signup"
          element={<AuthProtected element={<InstructorSignup />} />}
        />
        <Route
          path="/instructor/verify-otp"
          element={
            <AuthProtected element={<VerifyOtp isInstructor={true} />} />
          }
        />
        <Route
          path="/admin/login"
          element={<AuthProtected element={<AdminLogin />} />}
        />
        <Route
          path="/login"
          element={<AuthProtected element={<StudentLogin />} />}
        />
        <Route
          path="/signup"
          element={<AuthProtected element={<StudentSignup />} />}
        />
        <Route
          path="/verify-otp"
          element={
            <AuthProtected element={<VerifyOtp isInstructor={false} />} />
          }
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
        <Route
          path="/change-password"
          element={
            <ProtectedRoute
              allowedRoles={[Roles.student]}
              element={<ChangePassword />}
            />
          }
        />
        <Route path="/" element={<StudentHome />} />
      </Routes>
    </>
  );
};

export default RoutePage;
