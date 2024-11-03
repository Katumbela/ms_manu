import { useState } from "react";
import explore from "../styles/explore.module.css";
import Image from "next/image";
import { PurpleButton2 } from "@/components/buttons";

export default function Explore() {
  const [selectedOption, setSelectedOption] = useState("Angola"); // Estado para armazenar a opção selecionada

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div className={explore.container}>
        <div className={explore.top}>
          <h2>Selecione uma opção</h2>
        </div>
        <div className={explore.options}>
          <div className={explore.op1}>
            <label>
              <input
                type="radio"
                value="Angola"
                checked={selectedOption === "Angola"}
                onChange={handleOptionChange}
                style={{ display: "none" }} // Esconde o input radio
              />
              <div className={explore.first}>
                <div className={explore.country}>
                  <p>Angola </p>
                </div>
                {selectedOption === "Angola" && (
                  <div className={explore.check}>
                    <Image
                      src="/icons/check.svg" // Caminho para o seu ícone azul
                      alt="Selecionado"
                      width={70}
                      height={70}
                    />
                  </div>
                )}
              </div>
              <div className={explore.second}>
                <div className={explore.title}>
                  <p>IEM - Instituições de Ensino Médio</p>
                </div>
                <div className={explore.available}>
                  <p>
                    <span className={explore.countIem}>980</span> Disponíveis
                  </p>
                </div>
              </div>
            </label>
          </div>
          <div className={explore.op2}>
            <label>
              <input
                type="radio"
                value="Angola e Brasil"
                checked={selectedOption === "Angola e Brasil"}
                onChange={handleOptionChange}
                style={{ display: "none" }} // Esconde o input radio
              />
              <div className={explore.first}>
                <div className={explore.country}>
                  <p>Angola, Brasil </p>
                </div>
                {selectedOption === "Angola e Brasil" && (
                  <div className={explore.check}>
                    <Image
                      src="/icons/check.svg" // Caminho para o seu ícone azul
                      alt="Selecionado"
                      width={50}
                      height={70}
                    />
                  </div>
                )}
              </div>
              <div className={explore.second}>
                <div className={explore.title}>
                  <p>IES - Instituições de Ensino Superior</p>
                </div>
                <div className={explore.available}>
                  <p>
                    <span className={explore.countIem}>230</span> Disponíveis
                  </p>
                </div>
              </div>
            </label>
          </div>
        </div>
        <div className={explore.info}>
          <div className={explore.content}>
            {selectedOption === "Angola" ? (
              <>
                <h4>Explore opções de ensino médio!</h4>
                <div className={explore.check1}>
                  <Image
                    className={explore.logo}
                    src={"/icons/done.svg"}
                    alt="done"
                    width={30}
                    height={60}
                    priority
                  />
                  <p>Preparação Acadêmica</p>
                </div>
                <div className={explore.check1}>
                  <Image
                    className={explore.logo}
                    src={"/icons/done.svg"}
                    alt="done"
                    width={30}
                    height={60}
                    priority
                  />
                  <p>Apoio e Orientação</p>
                </div>
                <div className={explore.check1}>
                  <Image
                    className={explore.logo}
                    src={"/icons/done.svg"}
                    alt="done"
                    width={30}
                    height={60}
                    priority
                  />
                  <p>Ambiente de Crescimento</p>
                </div>
              </>
            ) : (
              <>
                <h4>Explore opções de ensino superior!</h4>
                <div className={explore.check1}>
                  <Image
                    className={explore.logo}
                    src={"/icons/done.svg"}
                    alt="done"
                    width={30}
                    height={60}
                    priority
                  />
                  <p>Especialização</p>
                </div>
                <div className={explore.check1}>
                  <Image
                    className={explore.logo}
                    src={"/icons/done.svg"}
                    alt="done"
                    width={30}
                    height={60}
                    priority
                  />
                  <p>Oportunidades de Carreira</p>
                </div>
                <div className={explore.check1}>
                  <Image
                    className={explore.logo}
                    src={"/icons/done.svg"}
                    alt="done"
                    width={30}
                    height={60}
                    priority
                  />
                  <p>Pesquisa e Inovação</p>
                </div>
                <div className={explore.check1}>
                  <Image
                    className={explore.logo}
                    src={"/icons/done.svg"}
                    alt="done"
                    width={30}
                    height={60}
                    priority
                  />
                  <p>Experiência Universitária</p>
                </div>
                <div className={explore.check1}>
                  <Image
                    className={explore.logo}
                    src={"/icons/done.svg"}
                    alt="done"
                    width={30}
                    height={60}
                    priority
                  />
                  <p>Desenvolvimento Profissional</p>
                </div>
              </>
            )}
          </div>
          <div className={explore.btn}>
            <PurpleButton2
              description="Explorar"
              redirect="/search"
            ></PurpleButton2>
          </div>
        </div>
      </div>
    </>
  );
}
