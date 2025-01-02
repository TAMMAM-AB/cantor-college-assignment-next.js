import "./Course.css";
const Course = ({course}) => {

    const { 
        CourseTitle, 
        CourseType, 
        CourseSummary, 
        CourseAwardName, 
        UcasCode, 
        UcasPoints, 
        YearOfEntry, 
        ModeOfAttendance, 
        StudyLength, 
        HasFoundationYear, 
        CourseSubject, 
        NoLongerRecruiting 
      } = course;
    
      /*
      console.log("Course Title:", CourseTitle);
      console.log("Course Type:", CourseType);
      console.log("Course Summary:", CourseSummary);
      console.log("CourseAwardName:", CourseAwardName);
      console.log("UcasCode:", UcasCode);
      console.log("UcasPoints:", UcasPoints);
      console.log("YearOfEntry:", YearOfEntry);
      console.log("ModeOfAttendance:", ModeOfAttendance);
      console.log("StudyLength:", StudyLength);
      console.log("HasFoundationYear:", HasFoundationYear);
      console.log("CourseSubject:", CourseSubject);
      console.log("NoLongerRecruiting:", NoLongerRecruiting);
      */

    return(
        <div>
            <h3>{CourseTitle}</h3>
            <p>{CourseType}</p>
            <p>{CourseSummary}</p>
            <p>{CourseAwardName}</p>
            <p>{UcasCode}</p>
            <p>{UcasPoints}</p>
            <p>{YearOfEntry}</p>
            <p>{ModeOfAttendance}</p>
            <p>{StudyLength}</p>
            <p>{HasFoundationYear}</p>
            <p>{CourseSubject}</p>
            <p>{NoLongerRecruiting}</p>
        </div>
    )
}

export default Course;