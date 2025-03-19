/* eslint-disable @typescript-eslint/no-unsafe-return */
import { API_ENDPOINT } from '@constants'

export const fetchData = async (params: string) => {
	const fullURL = `${API_ENDPOINT}${params}`

	const data = await fetch(fullURL)

	const response = await data.json()

	return response
}
