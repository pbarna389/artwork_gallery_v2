import type { AgentType } from '@types'

export enum INFINITE_EXHIBITION_FIELDS {
	title = 'title',
	id = 'id'
}

type ExhibitionFields = keyof typeof INFINITE_EXHIBITION_FIELDS

export type InfiniteExhibition = Pick<AgentType, ExhibitionFields>
