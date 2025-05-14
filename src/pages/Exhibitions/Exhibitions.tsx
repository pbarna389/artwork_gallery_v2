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

	if (isFetching) return <PageLoading />

	const exhibitionsData: InfiniteExhibition[] = []

	data?.pages.forEach((el) => exhibitionsData.push(...el.data))

	return (
		<div>
			<h1>Exhibitions</h1>
			{exhibitionsData.map((el) => (
				<p key={el.id}>{el.title}</p>
			))}
		</div>
	)
}
