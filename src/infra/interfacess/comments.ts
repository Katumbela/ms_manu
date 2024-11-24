import type { Lesson } from "./lesson";
import type { Student } from "./student";

export interface Comment {
  id: string;
  content: string;
  lesson: Lesson;
  student: Student;
}
