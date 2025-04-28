import { PageLoading } from '@components'
import { useLoadInfiniteData } from '@hooks'
import type { ArtworkType, IncomingDataType } from '@types'

export const Artworks = () => {
	const { data, isFetching } =
		useLoadInfiniteData<IncomingDataType<ArtworkType>>('artworks')

	console.log(data)

	if (isFetching) return <PageLoading />

	return <h1>Artworks</h1>
}
