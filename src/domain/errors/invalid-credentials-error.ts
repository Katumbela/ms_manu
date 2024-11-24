export class InvalidCredentialsError extends Error {
	constructor(message = 'Credenciais inválidas') {
		super(message)
		this.name = 'InvalidCredentialsError'
	}
}
