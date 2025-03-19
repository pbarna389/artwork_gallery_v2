import { useLoadInfiniteData } from '@hooks'

export const Galleries = () => {
	const { data } = useLoadInfiniteData('galleries')

	console.log(data)

	return <h1>Galleries</h1>
}
