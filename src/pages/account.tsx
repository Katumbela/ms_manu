import account from "../styles/account.module.css";
import Image from "next/image";
import PurpleButton from "@/components/buttons";
import Link from "next/link";
import { StringUtils } from "@/utils";
import { useSearchParams } from "next/navigation";
import Layout from "@/components/Layout";

export default function Documents() {
  const matricula = useSearchParams();
  // const school_id = matricula.get('school')
  // const school_name = matricula.get('school_name')
  // const course = matricula.get('chosen_course')
  // const course_id = matricula.get('course')
  const name = matricula.get("name");
  // const pin = matricula.get('pin')
  // const phone = matricula.get('phone')

  // const [documents, setDocuments] = useState<File[]>([]);
  // const [registered, setRegistered] = useState(false);
  // const [loading, setLoading] = useState(false);

  // const handleSubmit = async () => {
  //   const student = new StudentService();
  //   const formData = {
  //     registrationNumber: "",
  //     studentName: name,
  //     class: "",
  //     shift: "",
  //     phoneNumber: phone,
  //     studentEmail: "",
  //     course: course,
  //     identificationNumber: "",
  //     registrationYear: "",
  //     password: pin,
  //   };

  //   if (documents.length === 0) {
  //     AlertUtils.error("Por favor, preencha todos os campos obrigatórios e envie os documentos.");
  //     return;
  //   }

  //   setLoading(true);
  //   try {
  //     // Primeiro, cria o estudante
  //     const studentData = await student.createStudent(formData, documents);
  //     if (!studentData) {
  //       AlertUtils.error(studentData.statusCode);
  //       return;
  //     }

  //     // Se a criação do estudante for bem-sucedida, então matricula
  //     const enrollData = {
  //       studentId: studentData.id,
  //       schoolId: school_id,
  //       courseId: course_id,
  //       enrolledAt: new Date(),
  //     };

  //     await student.enrollStudent(enrollData);
  //     console.log(studentData);
  //     setRegistered(true);
  //   } catch (error: any) {
  //     console.log(error.message);
  //     AlertUtils.error('Já existe uma conta com este Nº de identificação e email. Por favor, verifique os dados ou faça login.', "top-right");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (event.target.files) {
  //     setDocuments(Array.from(event.target.files));
  //   }
  // };

  return (
    <>
      <Layout title="Inscrição | Multischool Angola">
        <div className={account.container}>
          <div className={account.progress}>
            <div className={`${account.line} ${account.line_active}`}></div>
            <div className={`${account.line} ${account.line_active}`}></div>
            <div className={`${account.line}`}></div>
          </div>
          <div className={account.top}>
            <Link href="matricula" className={account.back}>
              <Image
                className={account.arrow}
                src={"/icons/left_arrow.svg"}
                alt="ba2ck"
                width={25}
                height={25}
                priority
              />
            </Link>
            <div className={account.icon}>
              <Image
                className={account.logo}
                src={"/img/logo.svg"}
                alt="ba2ck"
                width={55}
                height={55}
                priority
              />
            </div>
          </div>
          <div className={account.header}>
            <h1>
              Estás quase lá, {StringUtils.getFirstWord(name ? name : "")}, só
              precisamos de mais algumas informações!
            </h1>
            <p>Anexe os documentos correctamente</p>
          </div>

          <div className={account.insName}>
            <p>Documentação</p>
          </div>

          <div className={account.inputs}>
            <div className={account.upload_container}>
              <span className={account.title}>
                Bilhete de identidade ou passaporte
              </span>
              <input
                type="file"
                placeholder="Número de estudante"
                className={account.input}
                accept="image/*,.pdf"
              />
              <span className={account.icon}>
                <Image
                  className={account.logo}
                  src={"/icons/att.svg"}
                  alt="ba2ck"
                  width={35}
                  height={35}
                  priority
                />
              </span>
            </div>

            <div className={account.upload_container}>
              <span className={account.title}>Fotografia (tipo: passe)</span>
              <input
                type="file"
                placeholder="Número de estudante"
                className={account.input}
                accept="image/*,.pdf"
              />
              <span className={account.icon}>
                <Image
                  className={account.logo}
                  src={"/icons/att.svg"}
                  alt="ba2ck"
                  width={35}
                  height={35}
                  priority
                />
              </span>
            </div>

            <div className={account.upload_container}>
              <span className={account.title}>Declaração ou certificado</span>
              <input
                type="file"
                placeholder="Número de estudante"
                className={account.input}
                accept="image/*,.pdf"
              />
              <span className={account.icon}>
                <Image
                  className={account.logo}
                  src={"/icons/att.svg"}
                  alt="ba2ck"
                  width={35}
                  height={35}
                  priority
                />
              </span>
            </div>
          </div>
          <div className={account.cta}>
            <PurpleButton
              description="Continuar"
              redirect="/kwikC"
            ></PurpleButton>
          </div>
        </div>
      </Layout>
    </>
  );
}
