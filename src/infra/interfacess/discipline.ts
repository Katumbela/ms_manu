import type { Course } from "./course";
import type { Grade } from "./grade";
import type { Lesson } from "./lesson";
import type { Material } from "./material";

export interface Discipline {
  _id: number;
  code_discipline: string;
  discipline_name: string;
  description: string;
  course: Course;
  materials: Material[];
  grades: Grade[];
  lessons: Lesson[];
}
