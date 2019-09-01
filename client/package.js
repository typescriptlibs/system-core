/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

    System Core Library

    Copyright (c) TypeScriptLibs and Contributors

    Licensed under the MIT License; you may not use this file except in
    compliance with the License. You may obtain a copy of the MIT License at
    https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
define(["require", "exports", "./System/Runtime/Package"], function (require, exports, Package_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ////
    //
    //  Constants
    //
    ////
    /**
     * Returns the package name.
     */
    exports.PackageName = '@tsl/system-core';
    /**
     * Returns the package namespace.
     */
    exports.PackageNamespace = 'System';
    /**
     * Returns the internal class decorator of the package.
     * @private
     */
    exports.PackageClassDecorator = Package_1.Package(exports.PackageName).$(exports.PackageNamespace);
    ////
    //
    //  Export
    //
    ////
    exports.default = exports.PackageClassDecorator;
});
//# sourceMappingURL=package.js.map