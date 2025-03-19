import { useLoadInfiniteData } from '@hooks'

export const Exhibitions = () => {
	const { data } = useLoadInfiniteData('exhibitions')

	console.log(data)

	return <h1>Exhibitions</h1>
}
