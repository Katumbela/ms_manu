import type { Course } from "./course";
import type { Grade } from "./grade";
import type { Lesson } from "./lesson";
import type { Material } from "./material";
import { Year } from "./year";

export interface Discipline {
  id: string;
  code_discipline: string;
  discipline_name: string;
  description: string;
  course: Course;
  materials: Material[];
  year: Year
  grades: Grade[];
  lessons: Lesson[];
}
