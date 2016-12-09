'use strict';
import {GLAngularHttpResponseErrorInterceptor} from "gl-angular-http-response-error-interceptor/package/src/GLAngularHttpResponseErrorInterceptor";
import {HttpResponseErrorRetryFilter} from "gl-angular-http-response-error-interceptor/package/src/Filters/HttpResponseErrorRetryFilter";


export class RunBlock {

    /** @ngInject */
    constructor(glAngularHttpResponseErrorInterceptor: GLAngularHttpResponseErrorInterceptor,
                httpResponseErrorRetryFilter: HttpResponseErrorRetryFilter) {
        glAngularHttpResponseErrorInterceptor.addFilter(httpResponseErrorRetryFilter);
    }
}
