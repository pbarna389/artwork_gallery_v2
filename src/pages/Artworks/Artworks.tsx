import { PageLoading } from '@components'
import { useLoadInfiniteData } from '@hooks'
import type { IncomingDataType } from '@types'

import type { InfiniteArtwork } from './types'
import { INFINITE_ARTWORK_FIELDS } from './types'

export const Artworks = () => {
	const queryFields = Object.values(INFINITE_ARTWORK_FIELDS)

	const { data, isFetching } = useLoadInfiniteData<IncomingDataType<InfiniteArtwork>>(
		'artworks',
		queryFields
	)

	if (isFetching) return <PageLoading />

	const artworkData: InfiniteArtwork[] = []

	data?.pages.forEach((el) => artworkData.push(...el.data))

	return (
		<div>
			<h1>Artworks</h1>
			{artworkData.map((el) => (
				<p key={el.id}>{el.title}</p>
			))}
		</div>
	)
}
