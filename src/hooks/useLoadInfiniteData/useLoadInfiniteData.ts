import type { InfiniteData } from '@tanstack/react-query'
import { useInfiniteQuery } from '@tanstack/react-query'

import { fetchData } from '@helpers'
import type { IncomingDataType } from '@types'

export const useLoadInfiniteData = <
	DataType extends object,
	ExtendedType extends IncomingDataType<DataType>
>(
	queryKey: string,
	fields: string[],
	hasImage = false
) => {
	const data = useInfiniteQuery<
		ExtendedType,
		Error,
		InfiniteData<ExtendedType, number>,
		(string | boolean)[],
		number
	>({
		queryKey: [queryKey, ...fields, hasImage],
		queryFn: ({ pageParam }) => fetchData(queryKey, fields, pageParam, hasImage),
		initialPageParam: 1,
		getNextPageParam: (lastPage) => {
			return lastPage.pagination.current_page + 1
		}
	})

	return data
}
