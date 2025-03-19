import { useLoadInfiniteData } from '@hooks'

export const Agents = () => {
	const { data } = useLoadInfiniteData('agents')

	console.log(data?.pages)

	return <h1>Agents</h1>
}
