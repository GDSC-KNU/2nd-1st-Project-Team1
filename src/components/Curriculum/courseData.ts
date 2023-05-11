export type CourseType = {
  name: string;
  code: string;
  type: CourseTypeType;
  grade: CourseGradeType;
  semester: CourseSemesterType;
  credit: CourseCreditType;
  required: boolean;
  design: boolean;
  lectureYear?: number;
};

export type CourseTypeType = "기본소양" | "전공기반" | "공학전공" | "교직";
export type CourseGradeType = "FIRST" | "SECOND" | "THIRD" | "FOURTH";
export type CourseSemesterType =
  | "FIRST"
  | "SECOND"
  | "ALL"
  | "SUMMER"
  | "WINTER";
export type CourseCreditType =
  | "ONE"
  | "TWO"
  | "THREE"
  | "FOUR"
  | "FIVE"
  | "SIX";

export type CourseQueryType = {
  name: string;
  code: string;
  type: CourseTypeType | "-";
  grade: CourseGradeType | "-";
  semester: CourseSemesterType | "-";
  credit: CourseCreditType | "-";
  required: "필수" | "선택" | "-";
  design: "설계" | "비설계" | "-";
  lectureYear?: number;
};
