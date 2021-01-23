import { createContext, useContext } from 'react';
var callback = function () { return ({}); };
export var GraphqlContext = createContext(callback);
export var useGraphqlQuery = function () {
    return GraphqlContext && useContext(GraphqlContext);
};
