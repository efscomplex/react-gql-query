import { createContext, useContext } from 'react'
import { QueryObserverResult } from 'react-query'

type Query = (queryName: string) => QueryObserverResult<any, unknown>

const callback: Query = () => ({} as QueryObserverResult)

export const GraphqlContext = createContext<Query>(callback)

export const useGraphqlQuery = () =>
	GraphqlContext && useContext(GraphqlContext)
