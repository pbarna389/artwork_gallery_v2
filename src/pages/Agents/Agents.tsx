import { useLoadInfiniteData } from '@hooks'
import type { AgentType, IncomingDataType } from '@types'

export const Agents = () => {
	const { data } = useLoadInfiniteData<IncomingDataType<AgentType>>('agents')

	console.log(data)

	return <h1>Agents</h1>
}
