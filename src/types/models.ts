import type {
	NumberArrayTypes,
	NumberTypes,
	OriginalTypes,
	StringArrayTypes
} from './types'
import type { StringTypes } from './types'

type ArtworkStringArrays =
	| 'alt_artist_ids'
	| 'alt_classification_ids'
	| 'alt_image_ids'
	| 'alt_material_ids'
	| 'alt_style_ids'
	| 'alt-subject_ids'
	| 'alt_technique_ids'
	| 'artist_titles'
	| 'category_ids'
	| 'alt_titles'
	| 'category_titles'
	| 'classification_ids'
	| 'classification_titles'
	| 'document_ids'
	| 'material_ids'
	| 'material_titles'
	| 'section_ids'
	| 'section_titles'
	| 'site_ids'
	| 'site_titles'
	| 'sound_ids'
	| 'style_ids'
	| 'style_titles'
	| 'subjects_ids'
	| 'subject_titles'
	| 'technique_ids'
	| 'technique_titles'
	| 'term_titles'
	| 'text_ids'
	| 'theme-titles'
	| 'video_ids'

type ArtworkStringTypes =
	| 'api_link'
	| 'api_model'
	| 'artist_display'
	| 'artist_title'
	| 'artwork_type_title'
	| 'catalogue_display'
	| 'copyright_notice'
	| 'credit_line'
	| 'date_display'
	| 'date_qualifier_title'
	| 'department_id'
	| 'department_title'
	| 'dimensions'
	| 'exhibition_history'
	| 'gallery_title'
	| 'description'
	| 'inscriptions'
	| 'edition'
	| 'main_reference_number'
	| 'latlon'
	| 'material_id'
	| 'medium_display'
	| 'nomisma_id'
	| 'on_loan_display'
	| 'place_of_origin'
	| 'provenance_text'
	| 'publication_history'
	| 'publishing_verification_level'
	| 'short_description'
	| 'style_id'
	| 'source_updated_at'
	| 'technique_id'
	| 'title'
	| 'updated_at'
	| 'timestamp'

type ArtworkNumberArrays = 'artits_ids'

type ArtworkNumberTypes =
	| 'artist_id'
	| 'artwork_type_id'
	| 'colorfulness'
	| 'date_start'
	| 'date_end'
	| 'gallery_id'
	| 'image_id'
	| 'id'
	| 'internal_department_id'
	| 'date_qualifier_id'
	| 'fiscal_year'
	| 'fiscal_year_deaccession'
	| 'latitude'
	| 'longitude'
	| 'max_zoom_window_size'

type ExhibtionStringArrays = 'artwork_titles'

type ExibitionStringTypes =
	| 'gallery_title'
	| 'aic_end_at'
	| 'aic_start_at'
	| 'api_link'
	| 'api_model'
	| 'image_url'
	| 'short_description'
	| 'source_updated_at'
	| 'status'
	| 'timestamp'
	| 'title'
	| 'updated_at'
	| 'web_url'

type ExhibitionNumberArrays =
	| 'alt_image_ids'
	| 'artist_ids'
	| 'artwork_ids'
	| 'site_ids'
	| 'document_ids'

type ExhibitionNumberTypes = 'id' | 'position'

export type ArtworkType = Pick<StringArrayTypes, ArtworkStringArrays> &
	Pick<StringTypes, ArtworkStringTypes> &
	Pick<NumberArrayTypes, ArtworkNumberArrays> &
	Pick<NumberTypes, ArtworkNumberTypes> &
	OriginalTypes

export type ExhibitionType = Pick<StringArrayTypes, ExhibtionStringArrays> &
	Pick<StringTypes, ExibitionStringTypes> &
	Pick<NumberArrayTypes, ExhibitionNumberArrays> &
	Pick<NumberTypes, ExhibitionNumberTypes> &
	OriginalTypes

export type ConfigType = Pick<StringTypes, 'iiif_url' | 'website_url'>

export type InfoType = Pick<StringTypes, 'license_text' | 'version'> &
	Pick<StringArrayTypes, 'license_links'>

export type PaginationType = Pick<
	NumberTypes,
	'current_page' | 'limit' | 'offset' | 'total' | 'total_pages'
> &
	Pick<StringTypes, 'next_url'>

export type IncomingDataType<Data> = {
	config: ConfigType
	data: Data[]
	info: InfoType
	pagination: PaginationType
}
