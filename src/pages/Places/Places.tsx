import { PageLoading } from '@components'
import { useLoadInfiniteData } from '@hooks'
import type { IncomingDataType } from '@types'

import type { InfinitePlaces } from './types'
import { INFINITE_PLACE_FIELDS } from './types'

export const Places = () => {
	const queryFields = Object.values(INFINITE_PLACE_FIELDS)

	const { data, isFetching } = useLoadInfiniteData<IncomingDataType<InfinitePlaces>>(
		'places',
		queryFields
	)

	if (isFetching) return <PageLoading />

	return <h1>Places</h1>
}
