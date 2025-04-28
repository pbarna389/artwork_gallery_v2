import { PageLoading } from '@components'
import { useLoadInfiniteData } from '@hooks'
import type { GalleryType, IncomingDataType } from '@types'

export const Galleries = () => {
	const { data, isFetching } =
		useLoadInfiniteData<IncomingDataType<GalleryType>>('galleries')

	console.log(data)

	if (isFetching) return <PageLoading />

	return <h1>Galleries</h1>
}
