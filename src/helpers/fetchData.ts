import { API_ENDPOINT } from '@constants'

export const fetchData = async <Data>(params: string, pageNum = 1): Promise<Data> => {
	const fullURL = `${API_ENDPOINT}${params}?page=${pageNum}`

	console.log(params, pageNum)

	const data = await fetch(fullURL)

	const response: Promise<Data> = await data.json()

	return response
}
