import { PageLoading } from '@components'
import { useLoadInfiniteData } from '@hooks'
import type { AgentType, IncomingDataType } from '@types'

export const Agents = () => {
	const { data, isFetching } = useLoadInfiniteData<IncomingDataType<AgentType>>('agents')

	console.log(data)

	if (isFetching) return <PageLoading />

	return <h1>Agents</h1>
}
