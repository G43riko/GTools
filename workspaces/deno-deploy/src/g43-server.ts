import {G43ServerRoute, G43ServerRouteHandlerParams, G43ServerRouteHandler} from "./g43-server-route.ts";

export interface CreateServerParams {
    readonly port?: number;
    readonly routes: readonly G43ServerRoute[];
    readonly errorHandler?: (error: any, params: G43ServerRouteHandlerParams) => Response;
    readonly defaultHandler: G43ServerRouteHandler;
}

export function createServer({port, routes, defaultHandler, errorHandler}: CreateServerParams): void {
    Deno.serve({ port }, async (request: Request) => {
        const params: G43ServerRouteHandlerParams = {
            url: new URL(request.url),
            request,
        };
        try {
            for(const {pattern, handler} of routes) {
                if(pattern.test(request.url)) {
                    return handler(params);
                }
            }

            return defaultHandler(params);
        } catch (error: any) {
            if(errorHandler) {
                return errorHandler(error, params);
            }

            return new Response(JSON.stringify({ success: false, error: String(error?.message) }), { status: 500 });
        }
    });
}