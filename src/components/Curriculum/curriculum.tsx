import { FormEventHandler, useEffect, useState } from "react";
import { CourseQueryType, CourseType } from "./courseData";
import * as style from "./curriculum.css";
import useGetCourses from "../../hooks/useGetCourse";

const Curriculum = () => {
  const [query, setQuery] = useState<CourseQueryType>({
    name: "",
    code: "",
    type: "-",
    credit: "-",
    grade: "-",
    semester: "-",
    required: "-",
    design: "-",
    lectureYear: 2022,
  });

  const [isClicked, setIsClicked] = useState(false);

  const { data, isLoading } = useGetCourses(query, isClicked);

  useEffect(() => {
    setIsClicked(false);
  }, [query]);

  const getCourses: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    setIsClicked(true);
  };

  const Results = () => {
    if (isLoading) return <div className={style.loading}>🌼</div>;
    if (!data) return <div>No Data Found</div>;
    return (
      <>
        {data.data.map((result: CourseType) => {
          return (
            <div className={style.resultWrapper} key={result.code}>
              <h3 className={style.resultTitle}>{result.name}</h3>
              <div className={style.resultDetails}>
                <span>{result.type} </span>
                <span>{result.credit} </span>
                <span>{result.code} </span>
                <span>{result.grade} </span>
                <span>{result.semester} </span>
                {result.required && (
                  <span className={style.resultDetailsRequired}>
                    {result.required}{" "}
                  </span>
                )}
                {result.design && (
                  <span className={style.resultDetailsDesign}>
                    {result.design}{" "}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <aside className={style.curriculumContainer}>
      <form onSubmit={getCourses}>
        <h2>Search</h2>
        <input
          className={style.input}
          type="text"
          value={query.name}
          onChange={e =>
            setQuery({ ...query, name: e.target.value, code: e.target.value })
          }
        />
        <div className={style.searchFilterWrapper}>
          <div className={style.searchFilter}>
            <label htmlFor="grade" className={style.searchFilterTitle}>
              학년
            </label>
            <select
              id="grade"
              className={style.searchFilterInput}
              defaultValue={query.grade}
              onChange={e =>
                setQuery({
                  ...query,
                  grade: e.target.value as typeof query.grade,
                })
              }
            >
              <option value="-"> - </option>
              <option value="ALL">전학년</option>
              <option value="FIRST">1학년</option>
              <option value="SECOND">2학년</option>
              <option value="THIRD">3학년</option>
              <option value="FOURTH">4학년</option>
            </select>
          </div>
          <div className={style.searchFilter}>
            <label htmlFor="semester" className={style.searchFilterTitle}>
              학기
            </label>
            <select
              id="semester"
              className={style.searchFilterInput}
              defaultValue={query.semester}
              onChange={e =>
                setQuery({
                  ...query,
                  semester: e.target.value as typeof query.semester,
                })
              }
            >
              <option value="-">-</option>
              <option value="ALL">전학기</option>
              <option value="FIRST">1학기</option>
              <option value="SECOND">2학기</option>
              <option value="SUMMER">여름계절</option>
              <option value="WINTER">겨울계절</option>
            </select>
          </div>
          <div className={style.searchFilter}>
            <label htmlFor="type" className={style.searchFilterTitle}>
              구분
            </label>
            <select
              id="type"
              className={style.searchFilterInput}
              defaultValue={query.type}
              onChange={e =>
                setQuery({
                  ...query,
                  type: e.target.value as typeof query.type,
                })
              }
            >
              <option value="-">-</option>
              <option value="BASIC_KNOWLEDGE">기본소양</option>
              <option value="MAJOR_BASE">전공기반</option>
              <option value="ENGINEERING_MAJOR">공학전공</option>
              <option value="TEACHER">교직</option>
              <option value="LIBERAL">교양</option>
              <option value="MAJOR">전공</option>
              <option value="NORMAL">일반선택</option>
            </select>
          </div>
          <div className={style.searchFilter}>
            <label htmlFor="credit" className={style.searchFilterTitle}>
              학점
            </label>
            <select
              id="credit"
              className={style.searchFilterInput}
              defaultValue={query.credit}
              onChange={e =>
                setQuery({
                  ...query,
                  credit: e.target.value as typeof query.credit,
                })
              }
            >
              <option value="-">-</option>
              <option value="ONE">1학점</option>
              <option value="TWO">2학점</option>
              <option value="THREE">3학점</option>
              <option value="FOUR">4학점</option>
              <option value="FIVE">5학점</option>
              <option value="SIX">6학점</option>
            </select>
          </div>
          <div className={style.searchFilter}>
            <label htmlFor="required" className={style.searchFilterTitle}>
              필수
            </label>
            <select
              id="required"
              className={style.searchFilterInput}
              defaultValue={query.required}
              onChange={e =>
                setQuery({
                  ...query,
                  required: e.target.value as typeof query.required,
                })
              }
            >
              <option value="-">-</option>
              <option value="필수">필수</option>
              <option value="선택">선택</option>
            </select>
          </div>
          <div className={style.searchFilter}>
            <label htmlFor="design" className={style.searchFilterTitle}>
              설계
            </label>
            <select
              id="design"
              className={style.searchFilterInput}
              defaultValue={query.design}
              onChange={e =>
                setQuery({
                  ...query,
                  design: e.target.value as typeof query.design,
                })
              }
            >
              <option value="-">-</option>
              <option value="설계">설계</option>
              <option value="비설계">비설계</option>
            </select>
          </div>
        </div>

        <div>
          <button className={style.searchButton}>검색</button>
        </div>
      </form>

      <h2>Results</h2>
      <div className={style.resultsContainer}>
        <Results />
      </div>
    </aside>
  );
};

export default Curriculum;
