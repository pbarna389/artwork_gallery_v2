import { useQuery } from '@tanstack/react-query'

import { fetchData } from '@helpers'
import type { IncomingDataType } from '@types'

export const useGetSingularData = <
	DataType extends object,
	ExtendedType extends Omit<IncomingDataType<DataType>, 'pagination'>
>(
	queryKey: string,
	id?: string
) => {
	const data = useQuery<
		ExtendedType,
		Error,
		ExtendedType,
		(string | number | undefined)[]
	>({
		queryKey: [queryKey, id],
		queryFn: () => fetchData({ endpoint: queryKey, params: { id } })
	})

	return data
}
