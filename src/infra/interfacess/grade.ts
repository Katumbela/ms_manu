import type { Course } from "./course";
import type { Discipline } from "./discipline";
import type { Student } from "./student";

export interface Grade {
  _id: number;
  semester: number;
  p1: number;
  p2: number;
  evaluation: number;
  finalAverage?: number;
  student: Student;
  course: Course;
  discipline: Discipline;
  finalGrade?: number;
  calculateFinalAverage(): void;
}
