import { NumberUtils } from '.'

type GenerateProps = {
	length?: number
	dataSource?: string
	separator?: string
	decimal?: number
}

export class StringUtils {
	static readonly ALPHABET = 'abcdefghijklmnopqrstuvwxyz'

	static generate(params?: GenerateProps) {
		const length = params?.length ?? 8
		const dataSource = params?.dataSource || StringUtils.ALPHABET
		const decimal = params?.decimal || 0
		const separator = params?.separator || ''

		const textArray: string[] = []

		for (let i = 0; i < length; i++) {
			textArray.push(dataSource[NumberUtils.random(0, dataSource.length - 1)])

			if (decimal && (i + 1) % decimal === 0 && i !== length - 1) {
				textArray.push(separator)
			}
		}

		return textArray.join('')
	}

	static getFirstWord(text: string) {
		if (!text || text.length < 1) return
		return text.split(' ')[0]
	}

	static getLastWord(text: string) {
		if (!text || text.length < 1) return
		const words = text.split(' ')
		return words[words.length - 1]
	}

	static getFirstLetter(text: string) {
		if (!text || text.length < 1) return
		return text.charAt(0)
	}

	static getLastLetter(text: string) {
		if (!text || text.length < 1) return
		return text.charAt(text.length - 1)
	}

	static getAvatarText(text: string) {
		if (!text || text.length < 1) return
		const [firstName, lastName] = [
			this.getFirstWord(text) as string,
			this.getLastWord(text) as string
		]

		return `${this.getFirstLetter(firstName)}${this.getFirstLetter(lastName)}`
	}

	static getFirstAndLastWord(text: string) {
		if (text.indexOf(' ') < 0) return text
		return `${this.getFirstWord(text)} ${this.getLastWord(text)}`
	}

	static slug(input: string): string {
		const specialCharactersMap: Record<string, string> = {
			á: 'a',
			à: 'a',
			ã: 'a',
			â: 'a',
			ä: 'a',
			å: 'a',
			é: 'e',
			è: 'e',
			ê: 'e',
			ë: 'e',
			í: 'i',
			ì: 'i',
			î: 'i',
			ï: 'i',
			ó: 'o',
			ò: 'o',
			õ: 'o',
			ô: 'o',
			ö: 'o',
			ú: 'u',
			ù: 'u',
			û: 'u',
			ü: 'u',
			ç: 'c',
			ñ: 'n'
		}

		return input
			.trim()
			.toLowerCase()
			.replace(/[\s_]+/g, '-') // Substitui espaços e underscores por hífens
			.replace(/[^a-z0-9-]/g, (char) => specialCharactersMap[char] || '-')
			.replace(/--+/g, '-') // Remove hífens duplicados
	}
}
