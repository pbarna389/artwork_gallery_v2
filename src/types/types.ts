export type ArrayTypes<KeyTypes extends string, DataTypes> = {
	[key in KeyTypes]: DataTypes
}

type StringArrayKeyNames =
	| 'license_links'
	| 'alt_artist_ids'
	| 'alt_classification_ids'
	| 'alt_image_ids'
	| 'alt_material_ids'
	| 'alt_style_ids'
	| 'alt-subject_ids'
	| 'alt_technique_ids'
	| 'alt_titles'
	| 'artist_titles'
	| 'category_ids'
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
	| 'updated_at'
	| 'video_ids'
	| 'groupings'
	| 'inputs'

type NumberArrayKeyNames = 'artits_ids'

export type StringArrayTypes = ArrayTypes<StringArrayKeyNames, string[]>
export type NumnberArrayTypes = ArrayTypes<NumberArrayKeyNames, number>

export type StringTypes = {
	api_link: string
	api_model: string
	artist_display: string
	artist_title: string
	artwork_type_title: string
	catalogue_display: string | null
	color: string | null
	copyright_notice: string | null
	credit_line: string
	date_display: string
	date_qualifier_title: string
	department_id: string
	department_title: string
	description: string | null
	dimensions: string
	edition: string | null
	exhibition_history: string | null
	gallery_title: string | null
	iiif_url: string
	image_id: string | null
	inscriptions: string
	latlon: string | null
	license_text: string
	main_reference_number: string
	material_id: string
	medium_display: string
	next_url: string
	nomisma_id: string | null
	on_loan_display: string | null
	place_of_origin: string
	provenance_text: string | null
	publication_history: string
	publishing_verification_level: string
	short_description: string
	source_updated_at: string
	style_id: string
	technique_id: string | null
	thumbnail: string | null
	timestamp: string
	title: string
	updated_at: string
	version: string
	website_url: string
}

export type NumberTypes = {
	artist_id: number
	artwork_type_id: number
	boost_rank: number | null
	clarification: number
	colorfulness: number | null
	current_page: number
	date_end: number
	date_qualifier_id: number
	date_start: number
	depth: number
	diameter: number
	fiscal_year: number
	fiscal_year_deaccession: number | null
	gallery_id: number | null
	h: number
	height: number
	id: number
	internal_department_id: number
	l: number
	latitude: number | null
	limit: number
	longitude: number | null
	max_zoom_window_size: number
	offset: number
	percentage: number
	population: number
	s: number
	total: number
	total_pages: number
	width: number
}

export type BooleanTypes = {
	has_advanced_imaging: boolean
	has_educational_resources: boolean
	has_multimedia_resources: boolean
	has_not_been_viewed_much: boolean
	is_boosted: boolean
	is_on_view: boolean
	is_public_domain: boolean
	is_zoomable: boolean
}

export type OriginalTypes = {
	color?: Partial<Pick<NumberTypes, 'h' | 's' | 'l' | 'percentage' | 'population'>>
	dimensions_detail?: Partial<
		Pick<NumberTypes, 'clarification' | 'depth' | 'diameter' | 'height' | 'width'>
	>[] // Specify the structure if available
	suggest_autocomplete_all?: Partial<
		{
			contexts: Pick<StringArrayTypes, 'groupings'>
			weight?: number
		} & Pick<StringArrayTypes, 'inputs'>
	>[]
}
