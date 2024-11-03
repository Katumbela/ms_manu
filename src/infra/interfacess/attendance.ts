import type { Lesson } from "./lesson";
import type { Student } from "./student";

export interface Attendance {
  _id: number;
  lesson: Lesson;
  student: Student;
  isPresent: boolean;
}
 