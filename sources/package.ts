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

import Package from './System/Runtime/Package';

////
//
//  Constants
//
////

/**
 * Package name
 */
export const __package: string = '@tsl/system-core';

/**
 * Package namespace
 */
export const __namespace: string = 'System';

/**
 * Package class decorator
 * @internal
 */
export const SystemCoreDecorator = Package( __package ).$( __namespace );

////
//
//  Export
//
////

export default SystemCoreDecorator;
