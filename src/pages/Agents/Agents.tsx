import { PageLoading } from '@components'
import { useLoadInfiniteData } from '@hooks'
import type { IncomingDataType } from '@types'

import { INFINITE_AGENT_FIELDS, type InfiniteAgent } from './types'

export const Agents = () => {
	const queryParams = Object.values(INFINITE_AGENT_FIELDS)

	const { data, isFetching } = useLoadInfiniteData<IncomingDataType<InfiniteAgent>>(
		'agents',
		queryParams
	)

	if (isFetching) return <PageLoading />

	const agentData: InfiniteAgent[] = []

	data?.pages.forEach((el) => agentData.push(...el.data))

	return (
		<div>
			<h1>Agents</h1>
			{agentData.map((el) => (
				<p key={el.id}>{el.title}</p>
			))}
		</div>
	)
}
