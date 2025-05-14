import { PageLoading } from '@components'
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

	console.log(data)

	if (isFetching) return <PageLoading />

	return <h1>Galleries</h1>
}
