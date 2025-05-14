import { act, prettyDOM, screen } from '@testing-library/react'

import { baseMocks, renderWrapper, testQuery } from '@testing'

const { artworks } = baseMocks

vi.stubGlobal(
	'fetch',
	vi.fn(() =>
		Promise.resolve({
			ok: true,
			json: async () => {
				return {
					data: artworks.testQueryMessage,
					pagination: {
						current_page: 1,
						total_pages: 1
					}
				}
			}
		})
	)
)

describe('artworks component tests', () => {
	it('should render the Artworks component', async () => {
		expect.hasAssertions()

		renderWrapper({ initialEntry: artworks.initialRoute })

		await act(async () => {
			await new Promise((r) => setTimeout(r, 500))
		})

		const component = await screen.findByRole('heading', { level: 1 })

		expect(component).toBeInTheDocument()

		expect(component).toHaveTextContent(artworks.testWord)

		console.log(prettyDOM())

		const cachedData:
			| {
					pageParams: number[]
					pages: { data: string }[]
			  }
			| undefined = await testQuery.getQueryData(artworks.queryKeys)

		console.log(testQuery.getQueryCache().getAll())

		console.log('Cached Data:', cachedData)

		expect(cachedData?.pages[0].data).toBe(artworks.testQueryMessage)
	})
})
