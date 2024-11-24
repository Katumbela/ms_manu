import type { Course } from "./course";
import type { School } from "./school";

export interface ExamSchedule {
  id: string;;
  date: Date;
  class: string;
  examTitle: string;
  time: string;
  course: Course;
  school: School;
}
