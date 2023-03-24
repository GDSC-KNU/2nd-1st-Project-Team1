import { FormEventHandler, useState } from "react";
import { courseData, CourseType } from "./courseData";
import * as style from "./curriculum.css";

const fetchedCourses = courseData;

const lectureCodeRegex = /(^[a-zA-Z]{4})([0-9]{3,4}$)/;

console.log(lectureCodeRegex.test("CLTR0005"));

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const Curriculum = () => {
  const [query, setQuery] = useState<CourseType>({
    name: "",
    code: "",
    type: "전체",
    credit: "전체",
    year: "전학년",
    semester: "전학기",
    required: "전체",
    design: "전체",
  });
  const [result, setResult] = useState<CourseType[]>(fetchedCourses);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCourses = async () => {
    await sleep(1000);

    return fetchedCourses.filter(course => {
      let checkNameOrCode =
        course.name.includes(query.name) || course.code.includes(query.code);
      if (query.name === "") checkNameOrCode = true;

      let checkType = course.type.includes(query.type);
      if (query.type === "전체") checkType = true;

      let checkCredit = course.credit.includes(query.credit);
      if (query.credit === "전체") checkCredit = true;

      let checkYear = course.year.includes(query.year);
      if (query.year === "전학년") checkYear = true;

      let checkSemester = course.semester.includes(query.semester);
      if (query.semester === "전학기") checkSemester = true;

      let checkRequired = course.required.includes(query.required);
      if (query.required === "전체") checkRequired = true;

      let checkDesign = course.design.includes(query.design);
      if (query.design === "전체") checkDesign = true;

      return (
        checkNameOrCode &&
        checkType &&
        checkCredit &&
        checkYear &&
        checkSemester &&
        checkRequired &&
        checkDesign
      );
    });
  };

  const getCourses: FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();

    setIsLoading(true);

    const courses = await fetchCourses();
    setIsLoading(false);

    setResult(courses);
  };

  const Results = () => {
    if (isLoading) return <div className={style.loading}>🌼</div>;
    return (
      <>
        {result.map(result => {
          return (
            <div className={style.resultWrapper} key={result.code}>
              <h3 className={style.resultTitle}>{result.name}</h3>
              <div className={style.resultDetails}>
                <span>{result.type} </span>
                <span>{result.credit} </span>
                <span>{result.code} </span>
                <span>{result.year} </span>
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
            <label htmlFor="year" className={style.searchFilterTitle}>
              학년
            </label>
            <select
              id="year"
              className={style.searchFilterInput}
              defaultValue={query.year}
              onChange={e =>
                setQuery({
                  ...query,
                  year: e.target.value as typeof query.year,
                })
              }
            >
              <option value="전학년">전학년</option>
              <option value="1학년">1학년</option>
              <option value="2학년">2학년</option>
              <option value="3학년">3학년</option>
              <option value="4학년">4학년</option>
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
              <option value="전학기">전학기</option>
              <option value="1학기">1학기</option>
              <option value="2학기">2학기</option>
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
              <option value="전체">전체</option>
              <option value="전공">전공</option>
              <option value="교양">교양</option>
              <option value="일반선택">일반선택</option>
              <option value="교직">교직</option>
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
              <option value="전체">전체</option>
              <option value="공학전공">공학전공</option>
              <option value="전공기반">전공기반</option>
              <option value="기본소양">기본소양</option>
              <option value="일반선택">일반선택</option>
              <option value="교직">교직</option>
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
              <option value="전체">전체</option>
              <option value="1학점">1학점</option>
              <option value="2학점">2학점</option>
              <option value="3학점">3학점</option>
              <option value="4학점">4학점</option>
              <option value="5학점">5학점</option>
              <option value="6학점">6학점</option>
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
              <option value="전체">전체</option>
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
              <option value="전체">전체</option>
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
