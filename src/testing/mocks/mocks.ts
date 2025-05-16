export const baseMocks = {
	app: {
		initialRoute: '/',
		testWord: 'Home'
	},
	agents: {
		initialRoute: '/agents',
		testWord: 'Agents',
		queryKeys: ['agents', 'title', 'id', false],
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
		queryKeys: ['artworks', 'title', 'id', 'image_id', true],
		testQueryMessage: [
			{
				id: 1,
				img_url: 'asdfasgfsdgkgélsdfkgsdgk',
				title: 'mocked data will come here for the artworks endpoint'
			}
		]
	},
	exhibitions: {
		initialRoute: '/exhibitions',
		testWord: 'Exhibitions',
		queryKeys: ['exhibitions', 'title', 'id', 'image_url', false],
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
		queryKeys: ['galleries', 'title', 'id', false],
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
		queryKeys: ['places', 'title', 'id', false],
		testQueryMessage: [
			{ id: 1, title: 'mocked data will come here for the places endpoint' }
		]
	}
}
