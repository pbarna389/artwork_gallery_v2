import { useLoadInfiniteData } from '@hooks'
import type { ArtworkType, IncomingDataType } from '@types'

export const Artworks = () => {
	const { data } = useLoadInfiniteData<IncomingDataType<ArtworkType>>('artworks')

	console.log(data)

	return <h1>Artworks</h1>
}
