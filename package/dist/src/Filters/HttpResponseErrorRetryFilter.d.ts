import { HttpResponseErrorFilter } from "./HttpResponseErrorFilter";
import { IHttpResponseErrorFilter } from "./IHttpResponseErrorFilter.d";
export declare class HttpResponseErrorRetryFilter extends HttpResponseErrorFilter implements IHttpResponseErrorFilter {
    private $http;
    private $timeout;
    private delayDuration;
    private nbRetries;
    constructor($q: angular.IQService, $http: angular.IHttpService, $timeout: angular.ITimeoutService);
    config(delayDuration: number, nbRetries: number): void;
    responseError(response: angular.IHttpPromiseCallbackArg<any>): angular.IPromise<any>;
}
export declare class HttpResponseErrorRetryFilterFactory {
    private $q;
    private $http;
    private $timeout;
    constructor($q: angular.IQService, $http: angular.IHttpService, $timeout: angular.ITimeoutService);
    getInstance(): HttpResponseErrorRetryFilter;
}
