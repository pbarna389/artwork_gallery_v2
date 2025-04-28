import { PageLoading } from '@components'
import { useLoadInfiniteData } from '@hooks'
import type { ExhibitionType, IncomingDataType } from '@types'

export const Exhibitions = () => {
	const { data, isFetching } =
		useLoadInfiniteData<IncomingDataType<ExhibitionType>>('exhibitions')

	console.log(data)

	if (isFetching) return <PageLoading />

	return <h1>Exhibitions</h1>
}
