"use strict";
/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

    System Core Library

    Copyright (c) TypeScriptLibs and Contributors

    Licensed under the MIT License; you may not use this file except in
    compliance with the License. You may obtain a copy of the MIT License at
    https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
Object.defineProperty(exports, "__esModule", { value: true });
////
//
//  Imports
//
////
var Namespace_1 = require("./Namespace");
////
//
//  Functions
//
////
/**
 * Decorates the constructor of the following class with a package and optional
 * namespace for further reflection.
 *
 * ```ts
 * @Package('@tsl', 'system-core').$('System').$('Reflection')
 * export class MemberInfo
 * {
 *     // => package: '@tsl/system-core'
 *     // => namespace: 'System.Runtime'
 * }
 * ```
 *
 * @param packages
 * One or more packages of the class. All packages will be separated with a
 * slash (`/`) character.
 */
function Package() {
    var packages = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        packages[_i] = arguments[_i];
    }
    var namespaces = [];
    var decorator = function (target) {
        if (Object.hasOwnProperty.call(target, '[[__package__]]') === true) {
            throw new Error('Target has already a package!');
        }
        Object.defineProperty(target, '[[__package__]]', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: packages.join('/')
        });
        if (namespaces.length > 0) {
            Namespace_1.default.apply(void 0, namespaces)(target);
        }
        return target;
    };
    Object.defineProperty(decorator, '$', {
        configurable: false,
        enumerable: true,
        writable: false,
        value: function () {
            var additionalNamespaces = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                additionalNamespaces[_i] = arguments[_i];
            }
            namespaces.push.apply(namespaces, additionalNamespaces);
            return decorator;
        }
    });
    return decorator;
}
exports.Package = Package;
////
//
//  Export
//
////
exports.default = Package;
//# sourceMappingURL=Package.js.map