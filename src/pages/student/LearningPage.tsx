import Modules from "../../components/student/learning page/Modules";
import { selectCourseActions } from "../../redux/selectedCourseSlice";
import { getEnrolledCourse } from "../../api/studentApi";
import { useDispatch } from "react-redux";
import NavBar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Course } from "../../dtos/Course";
import TabContent from "../../components/student/learning page/TabContent";
import { socket } from "../../components/socket/Socket";

const LearningPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [course, setCourse] = useState<Course>();
  const [progression, setProgression] = useState<string[]>([]);

  const getCourse = async () => {
    try {
      const response = await getEnrolledCourse(location.state.courseId);
      if (response) {
        setCourse(response.courseId);
        setProgression(response.progression);
        dispatch(selectCourseActions.selectCourse(response));
        socket.emit("join-room", { courseId: response?.courseId.id });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    socket.connect();
    getCourse();
  }, []);
  return (
    <>
      <NavBar />
      <div className="pt-10">
        <Modules progression={progression} modules={course?.modules || []} />
        <div className="mt-6">
          <TabContent socket={socket} />
        </div>
      </div>
    </>
  );
};

export default LearningPage;
