import type { Discipline } from "./discipline";
import type { Enrollment } from "./enrollements";
import type { ExamSchedule } from "./exam_schedule";
import type { Grade } from "./grade";
import type { School } from "./school";
// import { Year } from "./year";

export interface Course {
  id: string;
  name: string;
  short_name: string;
  duration: string;
  level: string;
  description?: string | null;
  registeredAt: Date;
  updatedAt?: Date;
  school: School;
  enrollments: Enrollment[];
  disciplines: Discipline[];
  examSchedules: ExamSchedule[];
  grades: Grade[];
}
