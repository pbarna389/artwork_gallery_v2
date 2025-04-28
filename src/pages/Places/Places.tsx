import { PageLoading } from '@components'
import { useLoadInfiniteData } from '@hooks'

export const Places = () => {
	const { data, isFetching, error } = useLoadInfiniteData('places')

	console.log(data)

	if (isFetching) return <PageLoading />

	return <h1>Places</h1>
}
