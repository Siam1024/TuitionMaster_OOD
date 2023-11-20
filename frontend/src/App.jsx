import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AllPostPage from "./pages/Posts/AllPostPage";
import TeachersPages from "./pages/Teachers/TeachersPages";
import Footer from "./pages/shared/Footer/Footer";
import NavigationBar from "./pages/shared/NavigationBar/Navigationbar";
import LoginPage from "./pages/Login/LoginPage";
import Register from "./pages/RegisterPage/Register";
import StudentDashboard from "./pages/Dashboard/StudentDashboard/StudentDashboard";
import WriteReview from "./pages/Dashboard/StudentDashboard/WriteReview";
import TeacherDashboard from "./pages/Dashboard/TeacherDashboard/TeacherDashboard";
import UpdateTeacherProfile from "./pages/Dashboard/TeacherDashboard/UpdateTeacherProfile";
import AdminDashboard from "./pages/Dashboard/AdminDashBoard/AdminDashboard";
import SearchTeacher from "./pages/SerchTeacher/SearchTeacher";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/posts" element={<AllPostPage />} />
        <Route path="/teachers" element={<TeachersPages />} />
        <Route path="/searchTeacher/:subjectName" element={<SearchTeacher />} />
        <Route path="/writeReview/:id" element={<WriteReview />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/updateTeacher" element={<UpdateTeacherProfile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/studentDashboard" element={<StudentDashboard />} />
        <Route path="/teacherDashboard" element={<TeacherDashboard />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
