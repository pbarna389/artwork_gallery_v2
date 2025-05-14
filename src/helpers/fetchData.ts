import { API_ENDPOINT } from '@constants'

export const fetchData = async <Data>(
	params: string,
	fields: string[],
	pageNum = 1
): Promise<Data> => {
	const paramFields = fields.join(',')

	const fullURL = `${API_ENDPOINT}${params}?${paramFields.length && `fields=${paramFields},`}?page=${pageNum}`

	const data = await fetch(fullURL)

	if (!data.ok) {
		throw new Error(`Data cannot be accessed, code: ${data.status}`)
	}

	const response: Promise<Data> = await data.json()

	return response
}
