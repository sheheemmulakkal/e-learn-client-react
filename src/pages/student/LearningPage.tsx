import Modules from "../../components/student/learning page/Modules";
import { selectCourseActions } from "../../redux/selectedCourseSlice";
import { getSingleCourse } from "../../api/studentApi";
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
  socket.on("active-members", (data) => data);
  const getCourse = async () => {
    try {
      const response = await getSingleCourse(location.state.courseId);
      if (response) {
        setCourse(response);
        dispatch(selectCourseActions.selectCourse(response));
        console.log(response?.id, " course");

        socket.emit("join-room", { courseId: response?.id });
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
        <Modules modules={course?.modules || []} />
        <div className="mt-6">
          <TabContent socket={socket} />
        </div>
      </div>
    </>
  );
};

export default LearningPage;
