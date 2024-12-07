import estagios from '@/styles/services/estagios/estagios.module.css';
import Top from '@/components/top';
import Menu from '@/components/menu';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { useEffect, useState } from 'react';
import { IInternship } from '@/infra/interfacess/internship';
import { InternShipsService } from '@/services/interships_services';
import { DateUtils } from '@/utils';

export default function Estagios() {
	const [ internships, setInternships ] = useState<IInternship[]>([]);
	const internshipService = new InternShipsService();

	useEffect(
		() => {
			async function GetCreditors() {
				const data = await internshipService.getInternships();
				setInternships(data);
			}

			GetCreditors();
		},
		[ internshipService ]
	);

	return (
		<Layout title="Estágios">
			<div className={estagios.container}>
				<Top information="Estágios" pagina="/services/menu" />

				<div className={estagios.top}>
					<p>Estágios extra e curriculares</p>
					<h2>{internships.length} disponíveis</h2>
				</div>
				<div className={estagios.input}>
					<div className={estagios.inputContainer}>
						<div className={estagios.iconContainer}>
							<Image
								className={estagios.logo}
								src={'/icons/magn.svg'}
								alt="ba2ck"
								width={25}
								height={35}
								priority
							/>
						</div>
						<input type="text" placeholder="Pesquisar por descrição" className={estagios.input3} />
					</div>
				</div>
				<div className={estagios.list}>
					<div className={estagios.top}>
						<p>Selecione uma opção</p>
						<p>Prazo</p>
					</div>
					<div className={estagios.credL}>
						{internships.map((internship, i) => (
							<Link key={i} href={"verOpcao?internship="+ internship.id} className={estagios.inner}>
								<Image src={internship.providerCompany?.company_logo || ""} width={60} height={60} alt={internship.providerCompany?.company_logo || ""} />
								<p className={estagios.in}>{internship.providerCompany?.companyName}</p>
								<p>{DateUtils.getDatePt(new Date(internship.createdAt))}</p>
							</Link>
						))}
					</div>
				</div>

				<Menu />
			</div>
		</Layout>
	);
}
