import { Routes, Route } from "react-router-dom";
import AuthProtected from "../components/common/protectedRoutes/AuthPotected";
import ProtectedRoute from "../components/common/protectedRoutes/ProtectedRoute";
import {
  InstructorLogin,
  InstructorSignup,
  MyCourses,
  AddCourse,
  InstructorHome,
  Instructor,
} from "../pages/instructor/index";
import {
  StudentHome,
  StudentLogin,
  StudentSignup,
  StudentProfile,
  VerifyOtp,
  ChangePassword,
} from "../pages/student/index";
import {
  Admin,
  AdminLogin,
  StudentsList,
  InstructorsList,
  Categories,
  AdminDashboard,
  CourseListTable,
} from "../pages/admin/index";

import { Roles } from "../dtos/Roles";

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