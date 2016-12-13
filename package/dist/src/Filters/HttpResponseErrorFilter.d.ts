export declare class HttpResponseErrorFilter {
    protected $q: angular.IQService;
    private urlFilterRegex;
    private statusFilters;
    constructor($q: angular.IQService);
    protected responseStatusMatchesFilters(status: number): boolean;
    protected urlMatchesUrlFilter(url: string): boolean;
    protected getResponseErrorFilterParamater(response: angular.IHttpPromiseCallbackArg<any>, param: string): any;
    /**
     * Sets a parameter in the response.config to keep it between http interceptions
     * For example, it is used to store the retry counter of the request
     * @param response the http response
     * @param param the parameter name
     * @value the param value
     * @returns {angular.IHttpPromiseCallbackArg<any>} the modified http response
     */
    protected setResponseErrorFilterParamater(response: angular.IHttpPromiseCallbackArg<any>, param: string, value: any): angular.IHttpPromiseCallbackArg<any>;
    setStatusFilters(statusFilters: Array<number>): void;
    setUrlFilter(urlFilter: string): void;
}
