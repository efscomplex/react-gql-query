import { GraphQLClient } from 'graphql-request'
import { useQuery } from 'react-query'
import { GQLRequest, Queries } from './types'

const GQL_SERVER_URL = 'http://localhost:4000'
const defaultOpts: GQLRequest = { url: GQL_SERVER_URL }

function useGraphqlRequest({ url } = defaultOpts, Query: Queries) {
	const fetchOpts = { mode: 'cors' }
	const client = new GraphQLClient(url as string, fetchOpts as any)

	return (queryName: string) =>
		useQuery(queryName, async () => {
			return await client.request(Query[queryName])
		})
}

export default useGraphqlRequest
