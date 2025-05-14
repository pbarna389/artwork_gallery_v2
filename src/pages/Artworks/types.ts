import type { ArtworkType } from '@types'

export enum INFINITE_ARTWORK_FIELDS {
	title = 'title',
	id = 'id',
	image_id = 'image_id'
}

type ArtworkFields = keyof typeof INFINITE_ARTWORK_FIELDS

export type InfiniteArtwork = Pick<ArtworkType, ArtworkFields>
