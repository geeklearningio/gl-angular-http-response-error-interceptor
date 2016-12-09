export declare class HttpResponseErrorRetryFilter {
    private $q;
    constructor($q: angular.IQService);
    responseError(response: any): ng.IPromise<any>;
}
