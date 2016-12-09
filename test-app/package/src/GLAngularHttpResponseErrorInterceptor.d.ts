export declare class GLAngularHttpResponseErrorInterceptor implements angular.IHttpInterceptor {
    private $q;
    constructor($q: angular.IQService);
    responseError: (response: any) => ng.IPromise<any>;
}
