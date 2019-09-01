/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

    System Core Library

    Copyright (c) TypeScriptLibs and Contributors

    Licensed under the MIT License; you may not use this file except in
    compliance with the License. You may obtain a copy of the MIT License at
    https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ////
    //
    //  Functions
    //
    ////
    /**
     * Decorates the constructor of the following class with a namespace for further
     * reflection.
     *
     * @example
     * ```ts
     *   @Namespace('System').$('Reflection')
     *   export class MemberInfo
     *   {
     *     // => namespace: 'System.Runtime'
     *   }
     * ```
     *
     * @param namespaces
     * One or more namespaces of the class. All namespaces will be separated with a
     * point (`.`) character.
     */
    function Namespace() {
        var namespaces = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            namespaces[_i] = arguments[_i];
        }
        var decorator = function (target) {
            if (Object.hasOwnProperty.call(target, '[[__namespace__]]') === true) {
                throw new Error('Target has already a namespace!');
            }
            Object.defineProperty(target, '[[__namespace__]]', {
                configurable: false,
                enumerable: false,
                writable: false,
                value: namespaces.join('.')
            });
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
                return Namespace.apply(void 0, __spreadArrays(namespaces, additionalNamespaces));
            }
        });
        return decorator;
    }
    exports.Namespace = Namespace;
    ////
    //
    //  Export
    //
    ////
    exports.default = Namespace;
});
//# sourceMappingURL=Namespace.js.map