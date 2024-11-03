import type { Course } from "./course";
import type { Enrollment } from "./enrollements";
import type { ExamSchedule } from "./exam_schedule";

export interface School {
  _id: number;
  schoolName: string;
  founder: string;
  foundedYear: number;
  school_logo: string
  school_cover: string
  schoolEmail: string;
  about: string
  province: string;
  nifNumber: string;
  htmlLink: string;
  schoolType: string;
  courses: Course[];
  enrollments: Enrollment[];
  examSchedules: ExamSchedule[];
}
