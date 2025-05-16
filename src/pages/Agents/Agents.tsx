import { NavigationLink, PageLoading } from '@components'
import { useLoadInfiniteData } from '@hooks'
import type { IncomingDataType } from '@types'

import { INFINITE_AGENT_FIELDS, type InfiniteAgent } from './types'

export const Agents = () => {
	const queryParams = Object.values(INFINITE_AGENT_FIELDS)

	const { data, isFetching } = useLoadInfiniteData<
		InfiniteAgent,
		IncomingDataType<InfiniteAgent>
	>('agents', queryParams)

	if (isFetching) return <PageLoading />

	const agentData: InfiniteAgent[] = []

	data?.pages.forEach((el) => agentData.push(...el.data))

	return (
		<div>
			<h1>Agents</h1>
			<ul className="flex flex-col">
				{agentData.map((el) => (
					<NavigationLink key={el.id} id={el.id} text={el.title} />
				))}
			</ul>
		</div>
	)
}
