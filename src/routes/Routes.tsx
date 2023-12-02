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
  CourseOverview,
  InstructorEnterMailForgotPassword,
  InstructorForgotPassword,
  WalletHistory,
} from "../pages/instructor/index";
import {
  StudentHome,
  StudentLogin,
  StudentSignup,
  StudentProfile,
  VerifyOtp,
  ChangePassword,
  Courses,
  SingleCourseStudent,
  EnterMailForgotPassword,
  StudnetForgotPassword,
  StripeStatus,
  LearningPage,
  MyLearnings,
} from "../pages/student/index";
import {
  Admin,
  AdminLogin,
  StudentsList,
  InstructorsList,
  Categories,
  AdminDashboard,
  CourseListTable,
  SingleCourseAdmin,
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
          <Route path="view-course" element={<SingleCourseAdmin />} />
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
          <Route path="wallet-history" element={<WalletHistory />} />
          <Route path="course-overview" element={<CourseOverview />} />
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
            <AuthProtected
              element={
                <VerifyOtp isForgotPassword={false} isInstructor={true} />
              }
            />
          }
        />
        <Route
          path="/instructor/forgot-password"
          element={
            <AuthProtected element={<InstructorEnterMailForgotPassword />} />
          }
        />
        <Route
          path="/instructor/forgot-password-otp-verfication"
          element={
            <AuthProtected
              element={
                <VerifyOtp isForgotPassword={true} isInstructor={true} />
              }
            />
          }
        />
        <Route
          path="/instructor/update-forgot-password"
          element={<AuthProtected element={<InstructorForgotPassword />} />}
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
            <AuthProtected
              element={
                <VerifyOtp isForgotPassword={false} isInstructor={false} />
              }
            />
          }
        />
        <Route
          path="/forgot-password"
          element={<AuthProtected element={<EnterMailForgotPassword />} />}
        />
        <Route
          path="/forgot-password-otp-verfication"
          element={
            <AuthProtected
              element={
                <VerifyOtp isForgotPassword={true} isInstructor={false} />
              }
            />
          }
        />
        <Route
          path="/update-forgot-password"
          element={<AuthProtected element={<StudnetForgotPassword />} />}
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
          path="/my-learnings"
          element={
            <ProtectedRoute
              allowedRoles={[Roles.student]}
              element={<MyLearnings />}
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
        <Route
          path="/status"
          element={<ProtectedRoute element={<StripeStatus />} />}
        />
        <Route
          path="/learning"
          element={<ProtectedRoute element={<LearningPage />} />}
        />
        <Route path="/courses" element={<Courses />} />
        <Route path="/view-course" element={<SingleCourseStudent />} />
        <Route path="/" element={<StudentHome />} />
      </Routes>
    </>
  );
};

export default RoutePage;
