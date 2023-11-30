import Modules from "../../components/student/learning page/Modules";
import { getSingleCourse } from "../../api/studentApi";
import NavBar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Course } from "../../dtos/Course";
import TabContent from "../../components/student/learning page/TabContent";

const LearningPage = () => {
  const location = useLocation();
  const [course, setCourse] = useState<Course>();
  console.log(location.state.courseId);

  const getCourse = async () => {
    try {
      const response = await getSingleCourse(location.state.courseId);
      console.log(response, "res");
      if (response) {
        setCourse(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCourse();
  }, []);
  return (
    <>
      <NavBar />
      <div className="pt-10">
        <Modules modules={course?.modules || []} />
        <div className="mt-6">
          <TabContent />
        </div>
      </div>
    </>
  );
};

export default LearningPage;
