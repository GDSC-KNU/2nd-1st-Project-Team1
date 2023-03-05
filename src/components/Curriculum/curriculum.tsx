import { useEffect, useState } from "react";
import { courseData, CourseType } from "./courseData";

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
    setResult(matchBy(["name", "code", "type"], query));
  };

  useEffect(() => {
    updateResult(query);
  }, [query]);

  return (
    <aside>
      <input type="text" value={query} onChange={updateQuery} />

      <div>
        {result.map(result => {
          return (
            <div key={result.code}>
              <h3>{result.name}</h3>
              <div>
                <span>{result.type} </span>
                <span>{result.credit}학점 </span>
                <span>{result.code} </span>
                {result.required && <span>필수 </span>}
                {result.design && <span>설계 </span>}
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Curriculum;
