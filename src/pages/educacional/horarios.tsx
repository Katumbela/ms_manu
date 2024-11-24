import hor from '@/styles/educacional/horario.module.css';
import Top from '@/components/top';
import Menu from '@/components/menu';
import Image from 'next/image';
import { selectUser } from '@/store';
import { useAppSelector } from '@/hooks';

// Função para limitar o texto a 12 caracteres e adicionar "..."
const truncateText = (text: string, maxLength: number = 22): string =>
	text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;

export default function Payments() {
	const student = useAppSelector(selectUser);

	// Dados do horário
	const schedule = [
		{
			day: 'Segunda-feira',
			classes: student?.enrollments?.[0].course.disciplines,
		}
	];
	return (
		<div className={hor.container}>
			<Top information="Horários" pagina="curso" />

			<div className={hor.top}>
				<p>EINF6-M1 - {student?.enrollments?.[0].course.name}</p>
			</div>

			{schedule.map((daySchedule, index) => (
				<div key={index} className={hor.day}>
					<p className={hor.title}>{daySchedule.day}</p>
					<div className={hor.top}>
						<div className={hor.both}>
							<p>Hora</p>
							<div className={hor.cad}>
								<p>Cadeira</p>
							</div>
						</div>
						<button className={hor.btn_order}>
							<Image
								className={hor.avatar}
								src={'/icons/curso/order.svg'}
								alt="Order"
								width={25}
								height={25}
								priority
							/>
						</button>
					</div>
					{daySchedule?.classes?.map((classItem, idx) => (
						<div key={idx} className={hor.details}>
							<div className={hor.time}>
								<p className={hor.inicio}>--</p>
								{/* <p className={hor.termino}>{classItem.endTime}</p> */}
							</div>
							{/* <div className={`${hor.cadeira} ${!classItem.active ? hor.cadeira_not_act : ''}`}> */}
							<div className={`${hor.cadeira}`}>
								<div className={hor.inner1}>
									<h3>{truncateText(classItem.discipline_name)}</h3>
									<small>---</small>
								</div>
								<div className={hor.inner2}>
									<div className={hor.in}>
										{/* <Image
											className={hor.avatar}
											src={classItem.active ? '/icons/curso/loc.svg' : '/icons/curso/loc2.svg'}
											alt="Location"
											width={23}
											height={23}
											priority
										/> */}
										<p className={hor.ico}>
											Sala: <span className={hor.salaN}>12A-MF</span>
										</p>
									</div>
									{/* <div className={`${hor.in} ${hor.in2}`}>
										<Image
											className={hor.avatar}
											src={'/avatars/manuel.svg'}
											alt="Teacher"
											width={22}
											height={22}
											priority
										/>
										<p>{classItem.teacher}</p>
									</div> */}
								</div>
							</div>
						</div>
					))}
				</div>
			))}
			<Menu />
		</div>
	);
}
