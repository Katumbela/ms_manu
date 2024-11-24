import pay from '@/styles/payments/instituicao/confirmacao.module.css';
import Top from '@/components/top';
import Menu from '@/components/menu';
import Image from 'next/image';
import PurpleButton from '@/components/buttons';
import Layout from '@/components/Layout';
import { users } from '@/utils/image-exporter';
import { selectUser } from '@/store';
import { useAppSelector } from '@/hooks';

// Dados do usuário
// const userDetails = [
// 	{
// 		label: 'Nome',
// 		value: 'Ana Correia de Assis Diogo',
// 		classes: `${pay.primary} ${pay.name}`
// 	},
// 	{
// 		label: 'Ano lectivo',
// 		value: '2024/25',
// 		classes: `${pay.primary} ${pay.anolec}`
// 	},
// 	{
// 		label: 'Semestre',
// 		value: 'IVº',
// 		classes: `${pay.primary} ${pay.semestre}`
// 	},
// 	{
// 		label: 'Ano acadêmico',
// 		value: '3º',
// 		classes: `${pay.primary} ${pay.anoA}`
// 	},
// 	{
// 		label: 'Número de estudante',
// 		value: '20242190',
// 		classes: `${pay.primary} ${pay.estnum}`
// 	},
// 	{ label: 'Curso', value: 'Engenharia informática', classes: `${pay.curso}` },
// 	{ label: 'Turma', value: 'EINF-M3', classes: `${pay.success} ${pay.turma}` }
// ];


export default function PagInst() {
  const student = useAppSelector(selectUser);
  // console.log(student?.enrollments?.[0].course.disciplines)

	return (
		<Layout title="Confirmação da matrícula">
			<div className={pay.container}>
				<Top information="Confirmação" pagina="/payments/pagInst" />
				<div className={pay.foto}>
					<Image
						src={users.user_default}
						width={190}
						height={190}
						alt="Foto de estudante"
						className={pay.innerFoto}
					/>
				</div>
			
				<div className={pay.info}>
					<div className={pay.items}>
						<p className={pay.dark_g}>Nome</p>
						<p className={pay.primary}>{student?.studentName}</p>
					</div>
					<div className={pay.items}>
						<p className={pay.dark_g}>Ano Lectivo</p>
						<p className={pay.primary}>2024-2025</p>
					</div>
					<div className={pay.items}>
						<p className={pay.dark_g}>Ano Academico</p>
						<p className={pay.primary}>{Number(student?.enrollments?.[0].course.disciplines?.[0].year.year_number) + 1} º</p>
					</div>
					<div className={pay.items}>
						<p className={pay.dark_g}>Nº de Estudante</p>
						<p className={pay.primary}>{student?.adhesionNumber}</p>
					</div>
					<div className={pay.items}>
						<p className={pay.dark_g}>Curso</p>
						<p className={`${pay.curso}`}>{student?.enrollments?.[0].course.name}</p>
					</div>
					<div className={pay.items}>
						<p className={pay.dark_g}>Turma</p>
						<p className={`${pay.success} ${pay.turma}`}>EINF-M3</p>
					</div>
				</div>
				<div className={pay.button}>
					<PurpleButton description="Continucar" redirect="confirm2" />
				</div>
				<Menu />
			</div>
		</Layout>
	);
}
