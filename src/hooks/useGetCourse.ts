import { useMutation, useQuery } from "@tanstack/react-query";
import homeApi from "../api/home";
import { CourseQueryType } from "../components/Curriculum/courseData";

const useGetCourses = (courseQuery: CourseQueryType, isClicked: boolean) => {
  return useQuery(["course"], () => homeApi.getCourses({ courseQuery }), {
    enabled: isClicked,
  });
};

export default useGetCourses;
