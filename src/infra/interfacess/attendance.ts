import type { Lesson } from "./lesson";
import type { Student } from "./student";

export interface Attendance {
  id: string;
  lesson: Lesson;
  student: Student;
  isPresent: boolean;
}
 