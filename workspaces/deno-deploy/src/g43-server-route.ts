export interface G43ServerRouteHandlerParams{
    readonly url: URL;
    readonly request: Request;
}
export type G43ServerRouteHandler = (params: G43ServerRouteHandlerParams) => Response | Promise<Response>;
export interface G43ServerRoute {
    readonly pattern: URLPattern;
    readonly handler: G43ServerRouteHandler
}
