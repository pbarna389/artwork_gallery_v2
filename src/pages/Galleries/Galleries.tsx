import { useLoadInfiniteData } from '@hooks'
import type { GalleryType, IncomingDataType } from '@types'

export const Galleries = () => {
	const { data } = useLoadInfiniteData<IncomingDataType<GalleryType>>('galleries')

	console.log(data?.pages[0].data[0])

	return <h1>Galleries</h1>
}
