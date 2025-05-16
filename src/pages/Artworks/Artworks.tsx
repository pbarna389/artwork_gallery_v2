import { NavigationLink, PageLoading } from '@components'
import { useLoadInfiniteData } from '@hooks'
import type { IncomingDataType } from '@types'

import type { InfiniteArtwork } from './types'
import { INFINITE_ARTWORK_FIELDS } from './types'

export const Artworks = () => {
	const queryFields = Object.values(INFINITE_ARTWORK_FIELDS)

	const { data, isFetching } = useLoadInfiniteData<
		InfiniteArtwork,
		IncomingDataType<InfiniteArtwork>
	>('artworks', queryFields, true)

	if (isFetching) return <PageLoading />

	const artworkData: InfiniteArtwork[] = []

	data?.pages.forEach((el) => artworkData.push(...el.data))

	console.log(data)

	return (
		<div>
			<h1>Artworks</h1>
			<ul className="flex flex-col gap-2">
				{artworkData.map((el) => (
					<NavigationLink key={el.id} id={el.id} text={el.title} imgLink={el.image_id} />
				))}
			</ul>
		</div>
	)
}
