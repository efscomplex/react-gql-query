import { MutationCache, QueryCache, DefaultOptions } from 'react-query'

export interface QueryClientConfig {
	queryCache?: QueryCache
	mutationCache?: MutationCache
	defaultOptions?: DefaultOptions
}
export type GQLRequest =
	| {
			url: string
			[key: string]: any
	  }
	| undefined

export interface QueryOpts {
	query?: QueryClientConfig
	requests?: GQLRequest
}
