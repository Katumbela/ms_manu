import details from "../styles/detailsI.module.css";
import Image from "next/image";
import Button from "@/components/buttons";
import Link from "next/link";
import { School } from "@/infra/interfacess";
import { SchoolService } from "@/services";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Modal } from "@/components/modal/modal";
import { routes } from "@/infra";

export default function DetailsI() {

  const school_param = useSearchParams();
  const school_id = school_param.get('school')
  const [schools, setSchools] = useState<School>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isModalRequisitesOpen, setIsModalRequisitesOpen] = useState(false);
  // const [loadSchools, setLoadSchools] = useState(true)

  useEffect(() => {
    const fetchSchools = async () => {

      const service = new SchoolService();
      const data = await service.getSchoolsById(school_id ? school_id : '');
      setSchools(data);
      // setLoadSchools(false)
    };

    fetchSchools();
  }, []);

  const navigate = useRouter()


  return (
    <>
      <div className={details.container}>
        <div className={details.bg}>
          <Link href="search" className={details.back}>
            <Image
              className={details.logo}
              src={"/icons/left_arrow.svg"}
              alt="done"
              width={30}
              height={60}
              priority
            />
          </Link>
          <div className={details.inner}>
            <div title="Ver cursos desta instituição" onClick={() => {
              setIsModalOpen(true);
            }}  className={`${details.courses} cursor-pointer`}>
              <div className={details.in}>
                <Image
                  className={details.logo}
                  src={"/icons/courses.svg"}
                  alt="done"
                  width={30}
                  height={60}
                  priority
                />
                <p>Cursos</p>
              </div>
            </div>
          </div>
        </div>
        <div className={details.info}>
          <p>Informações</p>
          <h3 className={details.instituicao}>
            {schools?.schoolName}
          </h3>
          <div className={details.location}>
            <Image
              className={details.loc}
              src={"/icons/location.svg"}
              alt="done"
              width={30}
              height={60}
              priority
            />
            <p className={details.txt}>{schools?.province}</p>
          </div>
          <p>
            <span className={`${details.nstudents} ${details.purple}`}>
              {schools?.enrollments.length} estudantes
            </span>{" "}
            - Actualmente
          </p>
          <div className={details.desc}>
            {schools?.about}
          </div>
          <div className={details.btns}>
            <Button
              variant="purple"
              description="Fazer matrícula"
              redirect="/matricula"
            ></Button>
            <Button
              variant="light"
              description="Ver requisitos"
              redirect="/requisitos"
            ></Button>
          </div>


          <Modal className='max-w-md mx-auto ' isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <h2> Escolha o curso</h2>
            <br />
            <ul>
              {
                schools?.courses.map((course, index) => (
                  <li onClick={() => { navigate.push(`${routes.REGISTER_ROUTE}?school=${school_id}&school_name=${schools.schoolName}&chosen_course=${course.course_name}&course=${course._id}`) }} key={index} className='px-5 py-3 my-4 transition-all border-2 cursor-pointer hover:bg-primary/10 hover:font-bold active:text-white active:bg-primary active border-primary rounded-2xl'>
                    {course.course_name}
                  </li>
                ))
              }
            </ul>
          </Modal>

        </div>
      </div>
    </>
  );
}
