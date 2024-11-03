import type { Course } from "./course";
import type { School } from "./school";

export interface ExamSchedule {
  _id: number;
  date: Date;
  class: string;
  examTitle: string;
  time: string;
  course: Course;
  school: School;
}
