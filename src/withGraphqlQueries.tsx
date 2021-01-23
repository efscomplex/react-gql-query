import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { QueryOpts, Queries } from './types'
import { ReactQueryDevtools } from 'react-query/devtools'

import { GraphqlContext } from './graphqlContext'
import useGraphqlRequest from './useGraphqlRequest'

function withGraphqlQueries(
	Wrap: React.FC,
	queries: Queries,
	opts?: QueryOpts
) {
	const queryClient = new QueryClient(opts?.query)
	const customQuery = useGraphqlRequest(opts?.requests, queries)

	return (props: any) => (
		<QueryClientProvider client={queryClient}>
			<GraphqlContext.Provider value={customQuery}>
				<Wrap {...props} />
				<ReactQueryDevtools initialIsOpen />
			</GraphqlContext.Provider>
		</QueryClientProvider>
	)
}

export default withGraphqlQueries
