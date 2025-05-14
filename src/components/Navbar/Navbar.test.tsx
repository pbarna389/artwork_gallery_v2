import { screen } from '@testing-library/dom'

import { baseMocks, renderWrapper } from '@testing'

import { routes } from '@constants'

describe('app component tests', () => {
	it('should render the App component', async () => {
		expect.hasAssertions()

		const { app } = baseMocks

		const convertedRoutes = routes.map((el) =>
			el === 'Home' ? '/' : `/${el.toLocaleLowerCase()}`
		)

		renderWrapper({ initialEntry: app.initialRoute })

		const links = screen.getAllByRole('link')

		expect(links.length).toBeGreaterThan(0)

		const hrefs = links.map((link) => {
			const currentLink =
				link.getAttribute('href') === 'Home' ? '' : link.getAttribute('href')

			return `${currentLink?.toLocaleLowerCase()}`
		})

		expect(hrefs).toStrictEqual(convertedRoutes)
	})
})
