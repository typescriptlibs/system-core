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

import Environment from './Runtime/Environment';
import Object from './Object';
import RuntimeUtility from './Runtime/RuntimeUtility';
import PackageClassDecorator from '../package';

////
//
//  Classes
//
////

/**
 * The base class for value types.
 */
@PackageClassDecorator
export abstract class ValueType<T extends Environment.PrimitiveType> extends Object
{
    ////
    //
    //  Functions
    //
    ////

    /**
     * Returns true, if the object value is equal to the other object value.
     *
     * @param other
     * The object value to compare with.
     */
    public equals ( other: ValueType<T> ): boolean
    {
        return ( this.valueOf() === other.valueOf() );
    }

    /**
     * Generates and returns a unique code for the string value of this object.
     */
    public getHashCode (): number
    {
        return RuntimeUtility.generateStringHashCode( this.toString() );
    }

    /**
     * Returns the string of this object value.
     */
    public toString (): string
    {
        return this.valueOf().toString();
    }

    /**
     * Returns the primitive value of this object. Must be overwritten.
     */
    public abstract valueOf (): T;
}

////
//
//  Exports
//
////

export default ValueType;
