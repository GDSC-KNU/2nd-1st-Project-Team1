import { useEffect, useState } from "react";
import { courseData, CourseType } from "./courseData";
import {
  curriculumContainer,
  input,
  resultDetails,
  resultDetailsDesign,
  resultDetailsRequired,
  resultsContainer,
  resultTitle,
  resultWrapper,
} from "./curriculum.css";

const fetchedCourses = courseData;

const Curriculum = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<CourseType[]>(fetchedCourses);

  const updateQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const matchBy = (keys: (keyof CourseType)[], query: string) => {
    return fetchedCourses.filter(course => {
      for (const key of keys) {
        if (course[key]?.toString().includes(query.toUpperCase())) return true;
      }
      return false;
    });
  };

  const updateResult = (query: string) => {
    setResult(
      matchBy(
        [
          "name",
          "code",
          "type",
          "credit",
          "year",
          "semester",
          "required",
          "design",
        ],
        query,
      ),
    );
  };

  useEffect(() => {
    updateResult(query);
  }, [query]);

  return (
    <aside className={curriculumContainer}>
      <input
        className={input}
        type="text"
        value={query}
        onChange={updateQuery}
      />

      <div className={resultsContainer}>
        {result.map(result => {
          return (
            <div className={resultWrapper} key={result.code}>
              <h3 className={resultTitle}>{result.name}</h3>
              <div className={resultDetails}>
                <span>{result.type} </span>
                <span>{result.credit} </span>
                <span>{result.code} </span>
                <span>{result.year} </span>
                <span>{result.semester} </span>
                {result.required && (
                  <span className={resultDetailsRequired}>
                    {result.required}{" "}
                  </span>
                )}
                {result.design && (
                  <span className={resultDetailsDesign}>{result.design} </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Curriculum;
