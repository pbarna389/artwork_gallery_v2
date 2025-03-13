import { cleanup } from '@testing-library/react'
import * as matchers from '@testing-library/jest-dom/matchers'

import '@testing-library/jest-dom/vitest'
import { serviceWorker } from '@services'

expect.extend(matchers)

afterEach(() => {
	cleanup()
})

// Start worker before all tests
beforeAll(() => {
	serviceWorker.listen()
})

//  Close worker after all tests
afterAll(() => {
	serviceWorker.close()
})

// Reset handlers after each test `important for test isolation`
afterEach(() => {
	serviceWorker.resetHandlers()
})
