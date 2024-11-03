import type { Lesson } from "./lesson";
import type { Student } from "./student";

export interface Comment {
  _id: number;
  content: string;
  lesson: Lesson;
  student: Student;
}
