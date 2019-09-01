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
 * Package name
 */
export const PACKAGE: string = '@tsl/system-core';

/**
 * Package namespace
 */
export const NAMESPACE: string = 'System';

/**
 * Package class decorator
 * @internal
 */
export const SystemCoreDecorator: IPackageClassDecorator = Package( PACKAGE ).$( NAMESPACE );

////
//
//  Export
//
////

export default SystemCoreDecorator;
