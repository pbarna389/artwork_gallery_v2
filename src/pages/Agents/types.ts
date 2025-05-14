import type { AgentType } from '@types'

export enum INFINITE_AGENT_FIELDS {
	title = 'title',
	id = 'id'
}

type AgentFields = keyof typeof INFINITE_AGENT_FIELDS

export type InfiniteAgent = Pick<AgentType, AgentFields>
