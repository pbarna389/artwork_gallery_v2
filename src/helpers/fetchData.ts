import { API_ENDPOINT } from '@constants'
import type { IncomingDataType } from '@types'

export const fetchData = async <
	Data extends object,
	ExtendedType extends IncomingDataType<Data>
>(
	params: string,
	fields: string[],
	pageNum = 1,
	hasImage = false
	// eslint-disable-next-line @typescript-eslint/max-params
) => {
	const searchParams = new URLSearchParams()

	if (fields.length) {
		searchParams.append('fields', fields.join(','))
	}

	searchParams.append('page', pageNum.toString())

	const fullURL = `${API_ENDPOINT}${params}?${searchParams.toString()}`

	const incomingData = await fetch(fullURL)

	if (!incomingData.ok) {
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
