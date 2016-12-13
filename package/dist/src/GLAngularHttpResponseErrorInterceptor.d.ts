import { IGLAngularHttpResponseErrorInterceptorFilter } from "./GLAngularHttpResponseErrorInterceptorFilter.d";
export declare class GLAngularHttpResponseErrorInterceptor implements angular.IHttpInterceptor {
    private filters;
    constructor();
    addFilter(filterConfig: IGLAngularHttpResponseErrorInterceptorFilter): void;
    responseError: (response: any) => ng.IPromise<any>;
}
