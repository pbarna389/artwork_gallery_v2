import type { ExhibitionType } from '@types'

export enum INFINITE_EXHIBITION_FIELDS {
	title = 'title',
	id = 'id',
	image_url = 'image_url'
}

type ExhibitionFields = keyof typeof INFINITE_EXHIBITION_FIELDS

export type InfiniteExhibition = Pick<ExhibitionType, ExhibitionFields>
