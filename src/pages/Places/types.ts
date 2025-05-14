import type { PlacesType } from '@types'

export enum INFINITE_PLACE_FIELDS {
	title = 'title',
	id = 'id'
}

type PlaceFields = keyof typeof INFINITE_PLACE_FIELDS

export type InfinitePlaces = Pick<PlacesType, PlaceFields>
