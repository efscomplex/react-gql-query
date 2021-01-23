import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { GraphqlContext } from './graphqlContext';
import useGraphqlRequest from './useGraphqlRequest';
function withGraphqlQueries(Wrap, queries, opts) {
    var queryClient = new QueryClient(opts === null || opts === void 0 ? void 0 : opts.query);
    var customQuery = useGraphqlRequest(opts === null || opts === void 0 ? void 0 : opts.requests, queries);
    return function (props) { return (<QueryClientProvider client={queryClient}>
			<GraphqlContext.Provider value={customQuery}>
				<Wrap {...props}/>
				<ReactQueryDevtools initialIsOpen/>
			</GraphqlContext.Provider>
		</QueryClientProvider>); };
}
export default withGraphqlQueries;
