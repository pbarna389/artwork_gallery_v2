import { StrictMode } from 'react'
import { RouterProvider } from 'react-router'
import { createRoot } from 'react-dom/client'

import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { router } from '@router'

import { queryClient } from '@services'

import './index.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	</StrictMode>
)
