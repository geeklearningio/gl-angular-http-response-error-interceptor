/**
 * Created by Vidailhet on 09/12/16.
 */

'use strict';
import {IHttpResponseErrorFilter} from "./IHttpResponseErrorFilter.d";

export class HttpResponseErrorRetryFilter implements IHttpResponseErrorFilter {

    /* @ngInject */
    constructor(private $q: angular.IQService) {
    }

    responseError(response): angular.IPromise<any> {
        console.log('should retry');
        console.log(response);

        // give up
        return this.$q.reject(response);
    }
}
