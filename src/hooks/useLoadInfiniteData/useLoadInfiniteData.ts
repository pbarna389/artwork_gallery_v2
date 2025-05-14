import type { InfiniteData } from '@tanstack/react-query'
import { useInfiniteQuery } from '@tanstack/react-query'

import { fetchData } from '@helpers'
import type { PaginationType } from '@types'

export const useLoadInfiniteData = <DataType extends { pagination: PaginationType }>(
	queryKey: string,
	fields: string[]
) => {
	const data = useInfiniteQuery<
		DataType,
		Error,
		InfiniteData<DataType, number>,
		string[],
		number
	>({
		queryKey: [queryKey, ...fields],
		queryFn: ({ pageParam }) => fetchData(queryKey, fields, pageParam),
		initialPageParam: 1,
		getNextPageParam: (lastPage) => {
			return lastPage.pagination.current_page + 1
		}
	})

	return data
}
