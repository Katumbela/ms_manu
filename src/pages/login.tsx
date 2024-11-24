import login from "../styles/login.module.css";
import Image from "next/image";
import Link from "next/link";
import { useAppDispatch } from "@/hooks";
import { routes } from "@/infra";
import { loginSuccess } from "@/store";
import { showSuccessToast, showErrorToast, AlertUtils } from "@/utils";
import { setLocalStorage } from "@/utils/local-storage";
import { useState } from "react";
import toast from "react-hot-toast";
import { loginService } from "@/services";
import Button from "@/components/buttons";
import Layout from "@/components/Layout";


export default function Login() {
  const [adhesionNumber, setAdhesionNumber] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const dispatch = useAppDispatch();

  const handleSubmit = async () => {
    if (!adhesionNumber || !password) {
      AlertUtils.error("Preencha todos os campos!");
      return;
    }

    setLoading(true);
    try {
      const { access_token, student } = await loginService(
        adhesionNumber,
        password
      );
      const studentDoc = student;
      console.log(studentDoc);
      if (access_token && student) {
        console.log(access_token)
        console.log(student)
        dispatch(loginSuccess({ access_token, student }));
        setLocalStorage("token", access_token);
        showSuccessToast("Login efectuado com sucesso");
        setLoading(false);
        window.location.href = routes.HOME_ROUTE;
        return;
      } else {
        setLoading(false);
        toast.error("Credenciais inválidas, tente novamente!");
      }
    } catch (error) {
      setLoading(false);
      showErrorToast("Erro ao efectuar o login");
      console.error("Erro ao fazer o login:", error);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible); 
  };

  return (
    <>
      <Layout title="Fazer login | Multischool Angola">
      <div className={login.container}>
        <div className={login.top}>
          <Link href="welcome" className={login.back}>
            <Image
              className={login.arrow}
              src={"/icons/left_arrow.svg"}
              alt="back"
              width={20}
              height={20}
              priority
            />
          </Link>
          <div className={login.icon}>
            <Image
              className={login.logo}
              src={"/img/logo.svg"}
              alt="logo"
              width={60}
              height={60}
              priority
            />
          </div>
        </div>
        <div className={login.header}>
          <h1>Vamos começar a jornada!</h1>
          <p>Inicie a sessão na sua conta</p>
        </div>

        <div className={login.inputs}>
          <div className={login.inputContainer}>
            <div className={login.iconContainer}>
              <Image
                className={login.logo}
                src={"/icons/student.svg"}
                alt="student"
                width={25}
                height={25}
                priority
              />
            </div>
            <input
              value={adhesionNumber}
              onChange={(e) => setAdhesionNumber(e.target.value)}
              type="text"
              placeholder="Número de estudante"
              className={login.input}
            />
          </div>
          <div className={login.inputContainer}>
            <div className={login.iconContainer}>
              <Image
                className={login.logo}
                src={"/icons/pin.svg"}
                alt="pin"
                width={25}
                height={25}
                priority
              />
            </div>
            <input
              type={passwordVisible ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="PIN de acesso"
              className={login.input}
            />
            <div
              className={login.iconContainer}
              onClick={togglePasswordVisibility}
              style={{ cursor: "pointer" }}
            >
              <Image
                className={login.logo}
                src={passwordVisible ? "/icons/eye_open.svg" : "/icons/eye.svg"} 
                alt="eye"
                width={25}
                height={25}
                priority
              />
            </div>
          </div>
        </div>

        <div className={login.cta}>
          <Button
            className={login.button}
            loading={loading}
            onClick={handleSubmit}
            variant="purple"
            description="Iniciar Sessão"
          />
          <div className={login.links}>
            <Link href="/reset" className={login.purple}>
              Esqueci-me do PIN de acesso
            </Link>
            <Link href="/matricula">
              Não possui uma conta? -{" "}
              <span className={login.purple}> Criar conta</span>
            </Link>
          </div>
        </div>
      </div>
      </Layout>
    </>
  );
}
