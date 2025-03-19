import type { InfiniteData } from '@tanstack/react-query'
import { useInfiniteQuery } from '@tanstack/react-query'

import { fetchData } from '@helpers'
import type { PaginationType } from '@types'

export const useLoadInfiniteData = <DataType extends { pagination: PaginationType }>(
	queryKey: string
) => {
	const data = useInfiniteQuery<
		DataType,
		Error,
		InfiniteData<DataType, number>,
		unknown[],
		number
	>({
		queryKey: [queryKey],
		queryFn: () => fetchData(queryKey),
		initialPageParam: 1,
		getNextPageParam: (lastPage) => {
			return lastPage.pagination.current_page
		}
	})

	return data
}
