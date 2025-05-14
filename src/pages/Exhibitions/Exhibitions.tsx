import { PageLoading } from '@components'
import { useLoadInfiniteData } from '@hooks'
import type { IncomingDataType } from '@types'

import type { InfiniteExhibition } from './types'
import { INFINITE_EXHIBITION_FIELDS } from './types'

export const Exhibitions = () => {
	const queryParams = Object.values(INFINITE_EXHIBITION_FIELDS)

	const { data, isFetching } = useLoadInfiniteData<IncomingDataType<InfiniteExhibition>>(
		'exhibitions',
		queryParams
	)

	console.log(data)

	if (isFetching) return <PageLoading />

	return <h1>Exhibitions</h1>
}
