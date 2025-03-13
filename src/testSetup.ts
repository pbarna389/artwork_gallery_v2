/* eslint-disable vitest/no-duplicate-hooks */
/* eslint-disable vitest/require-top-level-describe */
/* eslint-disable vitest/prefer-hooks-in-order */
/* eslint-disable vitest/no-hooks */
import * as matchers from '@testing-library/jest-dom/matchers'
import { cleanup } from '@testing-library/react'

import '@testing-library/jest-dom/vitest'

import { serviceWorker } from '@services'

expect.extend(matchers)

afterEach(() => {
	cleanup()
	serviceWorker.resetHandlers()
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
