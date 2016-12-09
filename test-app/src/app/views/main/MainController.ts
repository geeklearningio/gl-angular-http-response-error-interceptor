'use strict';

export class MainController {
    isLoading: boolean;

    /** @ngInject */
    constructor(private $http: angular.IHttpService) {
    }

    public test() {
        this.isLoading = true;
        this.$http({
            method: 'GET',
            url: 'https://api.github.com/users/octocat/org', // add a "s" at the end to have a valid url
        }).then((data) => {
            this.isLoading = false;
           console.log(data);
        });
    }

}
