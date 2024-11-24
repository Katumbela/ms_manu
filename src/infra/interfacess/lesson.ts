import type { Attendance } from "./attendance";

export interface Lesson {
  id: string;;
  lessonNumber: number;
  title: string;
  description: string;
  videoLink: string;
  disciplineId: number; 
  comments: Comment[];  
  attendances: Attendance[];  
}