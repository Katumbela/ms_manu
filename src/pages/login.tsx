import login from "../styles/login.module.css";
import Image from "next/image";
import PurpleButton from "../components/buttons";
import Link from "next/link";
import { useAppDispatch } from "@/hooks";
import { routes } from "@/infra";
import { loginSuccess } from "@/store";
import { showSuccessToast, showErrorToast, AlertUtils } from "@/utils";
import { setLocalStorage } from "@/utils/local-storage";
import { useState } from "react";
import toast from "react-hot-toast";
import { loginService } from "@/services";
import Button from "../components/buttons";

export default function Login() {

  const [adhesionNumber, setAdhesionNumber] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const dispatch = useAppDispatch()

  const handleSubmit = async () => {

    if (!adhesionNumber || !password) {
      AlertUtils.error("Preencha suas credenciais")
      return
    }

    setLoading(true)
    try {
      const { access_token, student } = await loginService(adhesionNumber, password)
      const studentDoc = student
      console.log(studentDoc)
      if (access_token && student) {
        dispatch(loginSuccess({ access_token, student }))
        //console.log(access_token)
        setLocalStorage('token', access_token)
        showSuccessToast('login efectuado com sucesso')
        setLoading(false)
        window.location.href = routes.HOME_ROUTE
        return
      }
      else {
        setLoading(false)

        toast.error("Credenciais inválidas, tente novamente")

      }



      // Redirecionar aqui ou fazer algo após o login bem-sucedido

    } catch (error) {

      setLoading(false)
      showErrorToast('Erro ao efetuar login')
      console.error('Erro no login:', error)
    }
  }



  return (
    <>
      <div className={login.container}>
        <div className={login.top}>
          <Link href="welcome" className={login.back}>
            <Image
              className={login.arrow}
              src={"/icons/left_arrow.svg"}
              alt="ba2ck"
              width={30}
              height={30}
              priority
            />
          </Link>
          <div className={login.icon}>
            <Image
              className={login.logo}
              src={"/img/logo.svg"}
              alt="ba2ck"
              width={90}
              height={90}
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
                alt="ba2ck"
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
                alt="ba2ck"
                width={25}
                height={25}
                priority
              />
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="PIN de acesso"
              className={login.input}
            />
            <div className={login.iconContainer}>
              <Image
                className={login.logo}
                src={"/icons/eye.svg"}
                alt="ba2ck"
                width={25}
                height={25}
                priority
              />
            </div>
          </div>
        </div>

        <div className={login.cta}>

          <Button loading={loading} onClick={handleSubmit} variant="purple" description="Iniciar Sessão" />

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
    </>
  );
}
