/**
 * Created by Vidailhet on 09/12/16.
 */

'use strict';

export class HttpResponseErrorFilter {
    private urlFilterRegex = new RegExp('/*/');
    private statusFilters: Array<number> = [];

    /* @ngInject */
    constructor(protected $q: angular.IQService) {
    }

    protected responseStatusMatchesFilters(status: number) {
        return this.statusFilters.length === 0 || this.statusFilters.indexOf(status) >= 0;
    }

    protected urlMatchesUrlFilter(url: string): boolean {
        var resArray = this.urlFilterRegex.exec(url);
        return resArray && resArray.length > 0;
    }

    protected getResponseErrorFilterParamater(response: angular.IHttpPromiseCallbackArg<any>, param: string): any {
        if (!response.config['HttpResponseErrorFilters'] || !response.config['HttpResponseErrorFilters'][param]) {
            return null;
        } else {
            return response.config['HttpResponseErrorFilters'][param];
        }
    }

    /**
     * Sets a parameter in the response.config to keep it between http interceptions
     * For example, it is used to store the retry counter of the request
     * @param response the http response
     * @param param the parameter name
     * @value the param value
     * @returns {angular.IHttpPromiseCallbackArg<any>} the modified http response
     */
    protected setResponseErrorFilterParamater(response: angular.IHttpPromiseCallbackArg<any>, param: string, value: any): angular.IHttpPromiseCallbackArg<any> {
        if (!response.config['HttpResponseErrorFilters']) {
            response.config['HttpResponseErrorFilters'] = {};
        }
        response.config['HttpResponseErrorFilters'][param] = value;
        return response;
    }

    setStatusFilters(statusFilters: Array<number>) {
        this.statusFilters = statusFilters;
    }

    setUrlFilter(urlFilter: string) {
        this.urlFilterRegex = new RegExp(urlFilter);
    }
}


