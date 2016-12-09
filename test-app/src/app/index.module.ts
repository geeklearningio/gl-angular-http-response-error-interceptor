/// <reference path="../../typings/index.d.ts" />
/// <reference path="index.d.ts" />

'use strict';

import 'ionic-sdk/release/js/ionic.bundle';

import 'gl-angular-http-response-error-interceptor/package/src/GLAngularHttpResponseErrorInterceptor'

declare var exports: any;

import {MainController} from './views/main/MainController';
import {Config} from  './index.config';
import {RouterConfig} from  './index.route';
import {RunBlock} from  './index.run';

exports = angular.module('testApp', [
    'ionic',
    'ui.router',
    'gl-angular-http-response-error-interceptor',
    'ngAnimate'])
    .config(Config)
    .constant('ionic', (<any>window).ionic)

    .config(RouterConfig)

    .run(RunBlock)
    .controller('MainController', MainController)
    ;
