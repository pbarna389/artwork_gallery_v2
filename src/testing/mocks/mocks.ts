export const baseMocks = {
	app: {
		initialRoute: '/',
		testWord: 'Home'
	},
	agents: {
		initialRoute: '/agents',
		testWord: 'Agents',
		queryKeys: ['agents', 'title', 'id'],
		testQueryMessage: [
			{
				id: 1,
				title: 'mocked data will come here for the agents endpoint'
			}
		]
	},
	artworks: {
		initialRoute: '/artworks',
		testWord: 'Artworks',
		queryKeys: ['artworks', 'title', 'id', 'image_id'],
		testQueryMessage: [
			{
				id: 1,
				title: 'mocked data will come here for the artworks endpoint'
			}
		]
	},
	exhibitions: {
		initialRoute: '/exhibitions',
		testWord: 'Exhibitions',
		queryKeys: ['exhibitions', 'title', 'id'],
		testQueryMessage: [
			{
				id: 1,
				title: 'mocked data will come here for the exhibitions endpoint'
			}
		]
	},
	galleries: {
		initialRoute: '/galleries',
		testWord: 'Galleries',
		queryKeys: ['galleries', 'title', 'id'],
		testQueryMessage: [
			{
				id: 1,
				title: 'mocked data will come here for the galleries endpoint'
			}
		]
	},
	places: {
		initialRoute: '/places',
		testWord: 'Places',
		queryKeys: ['places', 'title', 'id'],
		testQueryMessage: [
			{ id: 1, title: 'mocked data will come here for the places endpoint' }
		]
	}
}
