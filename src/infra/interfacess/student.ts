import type { Account } from "./account";
import type { Attendance } from "./attendance";
import { Course } from "./course";
import type { Enrollment } from "./enrollements";
import type { Grade } from "./grade";

export interface Student {
  id?: string;
  adhesionNumber?: string;
  registrationNumber?: string;
  studentName: string;
  class?: string;
  shift?: string;
  phoneNumber: string;
  course: Course;
  studentEmail?: string
  identificationNumber?: string;
  registrationYear?: string;
  password: string;
  grades?: Grade[];
  account?: Account;
  comments?: Comment[];
  attendances?: Attendance[];
  enrollments?: Enrollment[];
  documents?: string[];
}
