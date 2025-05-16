import { act, screen } from '@testing-library/react'

import { baseMocks, renderWrapper, testQuery } from '@testing'

const { exhibitions } = baseMocks

vi.stubGlobal(
	'fetch',
	vi.fn(() =>
		Promise.resolve({
			ok: true,
			json: async () => {
				return {
					data: exhibitions.testQueryMessage,
					pagination: {
						current_page: 1,
						total_pages: 1
					}
				}
			}
		})
	)
)

describe('exhibitions component tests', () => {
	it('should render the Exhibitions component', async () => {
		expect.hasAssertions()

		renderWrapper({ initialEntry: exhibitions.initialRoute })

		await act(async () => {
			await new Promise((r) => setTimeout(r, 500))
		})

		const component = await screen.findByRole('heading', { level: 1 })

		expect(component).toBeInTheDocument()

		expect(component).toHaveTextContent(exhibitions.testWord)

		const cachedData:
			| {
					pageParams: number[]
					pages: { data: typeof exhibitions.testQueryMessage }[]
			  }
			| undefined = await testQuery.getQueryData(exhibitions.queryKeys)

		console.log('Cached Data:', cachedData)

		expect(cachedData?.pages[0].data).toBe(exhibitions.testQueryMessage)
	})
})
