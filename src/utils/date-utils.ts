export default class DateUtils {
	static convertToDate(date: Date | string): Date {
		if (!date) return undefined as any

		return date instanceof Date ? date : new Date(date)
	}

	static getDate(paramDate: Date): string {
		if (!paramDate) return undefined as any

		const date = this.convertToDate(paramDate)
		const day = String(date.getUTCDate()).padStart(2, '0')
		const month = String(date.getUTCMonth() + 1).padStart(2, '0')
		const year = String(date.getUTCFullYear())

		return `${year}-${month}-${day}`
	}

	static getDateTime(date: Date) {
		return `${this.getDate(date)} ${this.getTime(date)}`
	}

	static getDatePt(paramDate: Date) {
		return this.getDate(paramDate)?.split('-').reverse().join('/').trim()
	}

	static getDateTimePt(date: Date) {
		return `${this.getDatePt(date)} ${this.getTime(date)}`.trim()
	}

	static getTime(paramDate: Date) {
		if (!paramDate) return

		const date = this.convertToDate(paramDate)
		const hours = String(date.getUTCHours()).padStart(2, '0')
		const minutes = String(date.getUTCMinutes()).padStart(2, '0')
		return `${hours}:${minutes}`
	}
}
