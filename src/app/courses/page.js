import { fetchCourses } from "@/lib/db.js";
import Course from "/src/app/Components/Course";
const Courses = async () => {

    const courses = await fetchCourses();
    if (!courses || courses.length === 0) {
        return <div>No courses available.</div>;
      }

    // console.log(courses);


    return (
      <div>
        <h2>Courses</h2>
        <div>
            {courses.map((course, index)=>
                (<Course key={index} course={course}/>)
                )}
        </div>
      </div>
    );
  }

  export default Courses;

export const metadata = {
    title: "Courses",
    description: "View the courses offered at Cantor College.", // search engines display in search results below title
};