import { NavigationLink, PageLoading } from '@components'
import { useLoadInfiniteData } from '@hooks'
import type { IncomingDataType } from '@types'

import type { InfiniteGallery } from './types'
import { INFINITE_GALLERY_FIELDS } from './types'

export const Galleries = () => {
	const queryFields = Object.values(INFINITE_GALLERY_FIELDS)

	const { data, isFetching } = useLoadInfiniteData<IncomingDataType<InfiniteGallery>>(
		'galleries',
		queryFields
	)

	if (isFetching) return <PageLoading />

	const galleriesData: InfiniteGallery[] = []

	data?.pages.forEach((el) => galleriesData.push(...el.data))

	return (
		<div>
			<h1>Galleries</h1>
			<ul className="flex flex-col">
				{galleriesData.map((el) => (
					<NavigationLink key={el.id} id={el.id} text={el.title} />
				))}
			</ul>
		</div>
	)
}
