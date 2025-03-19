import { useLoadInfiniteData } from '@hooks'

export const Places = () => {
	const { data, isFetching, error } = useLoadInfiniteData('places')

	console.log(data, isFetching, error)

	return <h1>Places</h1>
}
