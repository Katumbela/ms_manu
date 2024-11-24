import type { Course } from "@/infra/interfacess";

export function getTotalEnrollments(courses: Course[]) {
  // Verifica se o array de cursos foi passado corretamente
  if (!Array.isArray(courses)) {
    throw new Error("Parâmetro 'courses' deve ser um array.");
  }

  // Inicializa o contador de total de matriculados
  let totalEnrollments = 0;

  // Itera sobre cada curso para somar o número de matriculados
  courses.forEach(course => {
    if (Array.isArray(course.enrollments)) {
      totalEnrollments += course.enrollments.length;
    }
  });

  return totalEnrollments;
}