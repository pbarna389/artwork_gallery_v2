import { PageLoading } from '@components'
import { useLoadInfiniteData } from '@hooks'
import type { AgentType, IncomingDataType } from '@types'

import { INFINITE_AGENT_FIELDS, type InfiniteAgent } from './types'

export const Agents = () => {
	const queryParams = Object.values(INFINITE_AGENT_FIELDS)

	const { data, isFetching } = useLoadInfiniteData<IncomingDataType<InfiniteAgent>>(
		'agents',
		queryParams
	)

	console.log(data)

	if (isFetching) return <PageLoading />

	return <h1>Agents</h1>
}
