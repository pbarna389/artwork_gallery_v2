import { API_ENDPOINT } from '@constants'

export const fetchData = async <Data>(
	params: string,
	fields: string[],
	pageNum = 1
): Promise<Data> => {
	const searchParams = new URLSearchParams()

	if (fields.length) {
		searchParams.append('fields', fields.join(','))
	}

	searchParams.append('page', pageNum.toString())

	const fullURL = `${API_ENDPOINT}${params}?${searchParams.toString()}`

	const data = await fetch(fullURL)

	if (!data.ok) {
		throw new Error(`Data cannot be accessed, code: ${data.status}`)
	}

	const response: Promise<Data> = await data.json()

	return response
}
