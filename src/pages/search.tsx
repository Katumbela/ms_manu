import search from "../styles/search.module.css";
import Image from "next/image";
import Link from "next/link";

export default function SearchI() {
  return (
    <>
      <div className={search.container}>
        <Link href="explore" className={search.top}>
          <Image
            className={search.logo}
            src={"/icons/left_arrow.svg"}
            alt="done"
            width={30}
            height={60}
            priority
          />
          <div className={search.title}>
            <p>Instituições de Ensino Superior</p>
          </div>
        </Link>

        <div className={search.input}>
          <div className={search.inputContainer}>
            <div className={search.iconContainer}>
              <Image
                className={search.logo}
                src={"/icons/magn.svg"}
                alt="ba2ck"
                width={25}
                height={35}
                priority
              />
            </div>
            <input
              type="text"
              placeholder="Pesquisar por curso"
              className={search.input3}
            />
          </div>
        </div>

        <div className={search.filter}>
          <p className={search.purple}>Ordenar por:</p>
          <p>290 resultados</p>
        </div>

        <div className={search.results}>
          <div className={search.sres}>
            <Link href="/detailsI" className={search.inner}>
              <Image
                className={search.logo}
                src={"/img/isptec.svg"}
                alt="ba2ck"
                width={85}
                height={85}
                priority
              />
              <div className={search.infoI}>
                <p className={search.name}>
                  ISPTEC - Instituto Superior Politécnico de Tecnologias e
                  Ciências
                </p>
                <p className={`${search.info2} ${search.purple}`}>
                  <span className={search.nCursos}>8 cursos</span> -{" "}
                  <span className={search.country}>Luanda</span>
                </p>
              </div>
            </Link>
          </div>
          <div className={search.sres}>
            <Link href="/detailsI" className={search.inner}>
              <Image
                className={search.logo}
                src={"/img/isptec.svg"}
                alt="ba2ck"
                width={85}
                height={85}
                priority
              />
              <div className={search.infoI}>
                <p className={search.name}>
                  ISPTEC - Instituto Superior Politécnico de Tecnologias e
                  Ciências
                </p>
                <p className={`${search.info2} ${search.purple}`}>
                  <span className={search.nCursos}>8 cursos</span> -{" "}
                  <span className={search.country}>Luanda</span>
                </p>
              </div>
            </Link>
          </div>
          <div className={search.sres}>
            <Link href="/detailsI" className={search.inner}>
              <Image
                className={search.logo}
                src={"/img/isptec.svg"}
                alt="ba2ck"
                width={85}
                height={85}
                priority
              />
              <div className={search.infoI}>
                <p className={search.name}>
                  ISPTEC - Instituto Superior Politécnico de Tecnologias e
                  Ciências
                </p>
                <p className={`${search.info2} ${search.purple}`}>
                  <span className={search.nCursos}>8 cursos</span> -{" "}
                  <span className={search.country}>Luanda</span>
                </p>
              </div>
            </Link>
          </div>
          <div className={search.sres}>
            <Link href="/detailsI" className={search.inner}>
              <Image
                className={search.logo}
                src={"/img/isptec.svg"}
                alt="ba2ck"
                width={85}
                height={85}
                priority
              />
              <div className={search.infoI}>
                <p className={search.name}>
                  ISPTEC - Instituto Superior Politécnico de Tecnologias e
                  Ciências
                </p>
                <p className={`${search.info2} ${search.purple}`}>
                  <span className={search.nCursos}>8 cursos</span> -{" "}
                  <span className={search.country}>Luanda</span>
                </p>
              </div>
            </Link>
          </div>
          <div className={search.sres}>
            <Link href="/detailsI" className={search.inner}>
              <Image
                className={search.logo}
                src={"/img/isptec.svg"}
                alt="ba2ck"
                width={85}
                height={85}
                priority
              />
              <div className={search.infoI}>
                <p className={search.name}>
                  ISPTEC - Instituto Superior Politécnico de Tecnologias e
                  Ciências
                </p>
                <p className={`${search.info2} ${search.purple}`}>
                  <span className={search.nCursos}>8 cursos</span> -{" "}
                  <span className={search.country}>Luanda</span>
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
