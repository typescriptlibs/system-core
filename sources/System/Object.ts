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
import IDisposable from './IDisposable';
import RuntimeUtility from './Runtime/RuntimeUtility';
import SystemCoreDecorator from '../package';
import Type from './Type';

////
//
//  Classes
//
////

@SystemCoreDecorator

/**
 * The base class for all other classes.
 */
export class Object extends Environment.esObject
{
    ////
    //
    //  Properties
    //
    ////

    private '[[__hashCode__]]': ( number | undefined ) = undefined;
    private '[[__target__]]': object;

    ////
    //
    //  Constructors
    //
    ////

    /**
     * Instantiates a basic object.
     */
    public constructor ()
    {
        super();

        this['[[__target__]]'] = new.target;

        if ( typeof ( this as unknown as IDisposable ).dispose === 'function' )
        {
            RuntimeUtility.registerDisposable( this as unknown as IDisposable );
        }
    }

    ////
    //
    //  Functions
    //
    ////

    /**
     * Compares this object instance with an other object instance for equality.
     * Returns true, if the object instances are equal.
     *
     * @param other
     * The object instance to compare with.
     */
    public equals ( other: Object ): boolean
    {
        return (
            other != null
            && other.getHashCode() === this.getHashCode()
            && other.getType().equals( this.getType() )
            && other.valueOf() === this.valueOf()
        );
    }

    /**
     * Returns a generated unique code for this object instance. Must be
     * overwritten by value based classes.
     */
    public getHashCode (): number
    {
        if ( this['[[__hashCode__]]'] === undefined )
        {
            this['[[__hashCode__]]'] = RuntimeUtility.generateUniqueHashCode();
        }

        return this['[[__hashCode__]]'];
    }

    /**
     * Returns the type of the object instance for further reflection.
     */
    public getType (): Type
    {
        return Type.of( this['[[__target__]]'] );
    }

    /**
     * Returns the class name as the default string representation of an
     * object. Must be overwritten by value based classes.
     */
    public toString (): string
    {
        return this.getType().toString();
    }

    /**
     * Returns the primitive value of the object instance. Must be overwritten
     * by value based classes.
     */
    public valueOf (): ( bigint | boolean | number | string | symbol | this )
    {
        return this;
    }
}

////
//
//  Exports
//
////

export default Object;
