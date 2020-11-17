export interface AjaxParams {
    method: "GET" | "POST";
    url: string;
    onResponse: (data: any) => void;
    content: string;
    headers: {
        [key: string]: string;
    };
}
declare class AjaxWrapper {
    private readonly ajaxHandler;
    constructor(ajaxHandler: XMLHttpRequest);
}
export declare function ajax({ method, url, onResponse, content, headers, }: AjaxParams): AjaxWrapper;
export {};
//# sourceMappingURL=ajax.d.ts.map