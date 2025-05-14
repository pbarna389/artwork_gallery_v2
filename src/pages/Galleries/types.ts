import type { GalleryType } from '@types'

export enum INFINITE_GALLERY_FIELDS {
	title = 'title',
	id = 'id'
}

type GalleryFields = keyof typeof INFINITE_GALLERY_FIELDS

export type InfiniteGallery = Pick<GalleryType, GalleryFields>
