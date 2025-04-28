import { useLoadInfiniteData } from '@hooks'
import type { ExhibitionType, IncomingDataType } from '@types'

export const Exhibitions = () => {
	const { data } = useLoadInfiniteData<IncomingDataType<ExhibitionType>>('exhibitions')

	console.log(data)

	return <h1>Exhibitions</h1>
}
