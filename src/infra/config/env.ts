//const apiUrl = 'http://ec2-35-170-249-32.compute-1.amazonaws.com/api/v1'
const apiUrl = 'https://multischooll-api-nest.vercel.app/'
const localDb = 'http://localhost:3500'
//const apiUrl = 'http://localhost:4000'

export const env = {
    apiUrl,
    localDb
} as const
