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
 * Provides an interface to compare the order position of two objects of the
 * same type to each other.
 */
export interface IComparable<T extends IComparable<T>> extends Object
{
    //////
    //
    //  Functions
    //
    //////

    /**
     * Returns a number indicating the order position of this object in
     * comparison to an other object of the same type.
     *
     * - A number lower than zero (`< 0`) means, that the order position of this
     *   object comes before the order position of the other object.
     *
     * - A number equal to zero (`=== 0`) means, that the order position of both
     *   objects is equal.
     *
     * - A number higher than zero (`> 0`) means, that the order position of
     *   this object comes after the order position of the other object.
     */
    compareTo ( other: T ): number;
}

////
//
//  Export
//
////

export default IComparable;
