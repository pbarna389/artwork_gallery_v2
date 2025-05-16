import { API_ENDPOINT } from '@constants'
import type { IncomingDataType } from '@types'

type FetchOptions = {
	endpoint: string
	params: {
		fields?: string[]
		id?: string
	}
	hasImage?: boolean
	pageNum?: number
}

export const fetchData = async <
	Data extends object,
	ExtendedType extends Omit<IncomingDataType<Data>, 'pagination'>
>({
	endpoint,
	params,
	pageNum,
	hasImage = false
}: FetchOptions) => {
	const searchParams = new URLSearchParams()

	if (params.fields?.length) {
		searchParams.append('fields', params.fields.join(','))
	}

	if (pageNum) {
		searchParams.append('page', pageNum.toString())
	}

	const fullURL = params.id
		? `${API_ENDPOINT}${endpoint}/${params.id}`
		: `${API_ENDPOINT}${endpoint}?${searchParams.toString()}`

	const incomingData = await fetch(fullURL)

	if (!incomingData.ok || incomingData.status === 400) {
		throw new Error(`fetching went wrong, code: ${incomingData.status}`)
	}

	const response: ExtendedType = await incomingData.json()

	if (hasImage) {
		const {
			config: { iiif_url },
			data
		} = response

		const newData = data.map((el) => {
			if ('image_id' in el && el.image_id) {
				el.image_id = `${iiif_url}/${el.image_id}/full/843,/0/default.jpg`

				return el
			}

			return el
		})

		const updatedResponse = { ...response, data: newData }

		return updatedResponse
	}

	return response
}
