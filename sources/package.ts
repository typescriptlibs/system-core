/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

    System Core Library

    Copyright (c) TypeScriptLibs and Contributors

    Licensed under the MIT License; you may not use this file except in
    compliance with the License. You may obtain a copy of the MIT License at
    https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/

////
//
//  Imports
//
////

import { Package, IPackageClassDecorator } from './System/Runtime/Package';

////
//
//  Constants
//
////

/**
 * Returns the package name.
 */
export const PackageName: string = '@tsl/system-core';

/**
 * Returns the package namespace.
 */
export const PackageNamespace: string = 'System';

/**
 * Returns the internal class decorator of the package.
 * @private
 */
export const PackageClassDecorator: IPackageClassDecorator = Package( PackageName ).$( PackageNamespace );

////
//
//  Export
//
////

export default PackageClassDecorator;
