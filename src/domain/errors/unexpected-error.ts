export class UnexpectedError extends Error {
	constructor(message = 'Algo de errado aconteceu. Tente novamente em breve.') {
		super(message)
		this.name = 'UnexpectedError'
	}
}
