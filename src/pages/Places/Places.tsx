import { NavigationLink, PageLoading } from '@components'
import { useLoadInfiniteData } from '@hooks'
import type { IncomingDataType } from '@types'

import type { InfinitePlaces } from './types'
import { INFINITE_PLACE_FIELDS } from './types'

export const Places = () => {
	const queryFields = Object.values(INFINITE_PLACE_FIELDS)

	const { data, isFetching } = useLoadInfiniteData<
		InfinitePlaces,
		IncomingDataType<InfinitePlaces>
	>('places', queryFields)

	if (isFetching) return <PageLoading />

	const placesData: InfinitePlaces[] = []

	data?.pages.forEach((el) => placesData.push(...el.data))

	return (
		<div>
			<h1>Places</h1>
			<ul className="flex flex-col">
				{placesData.map((el) => (
					<NavigationLink key={el.id} id={el.id} text={el.title} />
				))}
			</ul>
		</div>
	)
}
