import { selectCourseActions } from "../../redux/selectedCourseSlice";
import { useState, useEffect } from "react";
import { getEnrolledCourse } from "../../api/studentApi";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Course } from "../../dtos/Course";
import { socket } from "../../components/socket/Socket";
import TabContent from "../../components/student/learning page/TabContent";
import Modules from "../../components/student/learning page/Modules";
import NavBar from "../../components/navbar/Navbar";

const LearningPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const [course, setCourse] = useState<Course>();
  const [notes, setNotes] = useState<string[]>([]);
  const [enrolledId, setEnrolledId] = useState<string>("");
  const [progression, setProgression] = useState<string[]>([]);

  const getCourse = async () => {
    try {
      const response = await getEnrolledCourse(location.state.courseId);
      if (response) {
        setCourse(response.courseId);
        setProgression(response.progression);
        setNotes(response.notes);
        setEnrolledId(response.id);
        dispatch(selectCourseActions.selectCourse(response));
        socket.emit("join-room", { courseId: response?.courseId.id });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCourse();
    return () => {};
  }, []);
  return (
    <>
      <NavBar />
      <div className="pt-10 text-black ">
        <Modules progression={progression} modules={course?.modules || []} />
        <div className="mt-6">
          <TabContent courseId={enrolledId} notes={notes} socket={socket} />
        </div>
      </div>
    </>
  );
};

export default LearningPage;
