import { act, screen } from '@testing-library/react'

import { baseMocks, renderWrapper, testQuery } from '@testing'

const { galleries } = baseMocks

vi.stubGlobal(
	'fetch',
	vi.fn(() =>
		Promise.resolve({
			ok: true,
			json: async () => {
				return {
					data: galleries.testQueryMessage,
					pagination: {
						current_page: 1,
						total_pages: 1
					}
				}
			}
		})
	)
)

describe('galleries component tests', () => {
	it('should render the Galleries component', async () => {
		expect.hasAssertions()

		renderWrapper({ initialEntry: galleries.initialRoute })

		await act(async () => {
			await new Promise((r) => setTimeout(r, 500))
		})

		const component = await screen.findByRole('heading', { level: 1 })

		expect(component).toBeInTheDocument()

		expect(component).toHaveTextContent(galleries.testWord)

		const cachedData:
			| {
					pageParams: number[]
					pages: { data: string }[]
			  }
			| undefined = await testQuery.getQueryData(galleries.queryKeys)

		console.log('Cached Data:', cachedData)

		expect(cachedData?.pages[0].data).toBe(galleries.testQueryMessage)
	})
})
