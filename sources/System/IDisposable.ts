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

import Object from './Object';

////
//
//  Interfaces
//
////

/**
 * Provides an interface to dispose unmanaged data. The runtime engine dispose
 * unmanaged data during session exit.
 */
export interface IDisposable extends Object
{
    //////
    //
    //  Properties
    //
    //////

    /**
     * Returns true, if the dispose function has been called.
     */
    isDisposed: boolean;

    //////
    //
    //  Functions
    //
    //////

    /**
     * The clean up function to dispose unmanaged data.
     */
    dispose (): void;
}

////
//
//  Export
//
////

export default IDisposable;
