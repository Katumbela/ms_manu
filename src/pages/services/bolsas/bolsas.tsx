import bolsas from "@/styles/services/bolsas/bolsas.module.css";
import Top from "@/components/top";
import Menu from "@/components/menu";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import { IScholarship } from "@/infra/interfacess/scholarship";
import { DateUtils } from "@/utils";
import { ScholarShipsService } from "@/services/scholarships_services";

export default function BolsasEstudo() {

  const [ scholarships, setScholarships ] = useState<IScholarship[]>([]);
	const scholarshipService = new ScholarShipsService();

	useEffect(
		() => {
			async function GetCreditors() {
				const data = await scholarshipService.getScholarships();
				setScholarships(data);
			}

			GetCreditors();
		},
		[ scholarshipService ]
	);


  return (
    <Layout title="Bolsas">
      <div className={bolsas.container}>
        <Top information="Bolsas" pagina="/services/menu"></Top>

        <div className={bolsas.top}>
          <p>Bolsas de estudo</p>
          <h2>{scholarships.length} disponíveis</h2>
        </div>
        <div className={bolsas.input}>
          <div className={bolsas.inputContainer}>
            <div className={bolsas.iconContainer}>
              <Image
                className={bolsas.logo}
                src={"/icons/magn.svg"}
                alt="ba2ck"
                width={25}
                height={35}
                priority
              />
            </div>
            <input
              type="text"
              placeholder="Pesquisar por descrição"
              className={bolsas.input3}
            />
          </div>
        </div>
        <div className={bolsas.list}>
          <div className={bolsas.top}>
            <p>Selecione uma opção</p>
            <p>Prazo</p>
          </div>
          
            <div className={bolsas.credL}>
						{scholarships.map((scholarship, i) => (
							<Link key={i} href={"verBolsa?scholarship="+ scholarship.id} className={bolsas.inner}>
								<Image src={scholarship.providerSchool?.school_logo || ""} width={60} height={60} alt={scholarship.providerSchool?.school_logo || ""} />
								<p className={bolsas.in}>{scholarship.providerSchool?.schoolName}</p>
								<p>{DateUtils.getDatePt(new Date(scholarship.createdAt))}</p>
							</Link>
						))} 
          </div>
        </div>

        <Menu/>
      </div>
    </Layout>
  );
}
