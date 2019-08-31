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
import { NamespaceClassConstructor } from './Runtime/Namespace';
import { PackageClassConstructor } from './Runtime/Package';
import RuntimeUtility from './Runtime/RuntimeUtility';
import SystemCoreDecorator from '../package';

////
//
//  Classes
//
////

/**
 * The type class of an object provides information for further reflection.
 */
@SystemCoreDecorator
export class Type extends Object
{
    //////
    //
    //  Static Functions
    //
    //////

    /**
     * Returns the class type of the given instance.
     *
     * @param instance
     * The instance of the class.
     */
    public static of ( instance: object ): Type
    {
        return new Type( instance );
    }

    ////
    //
    //  Constructor
    //
    ////

    /**
     * Creates the class type of a given object instance.
     *
     * @param obj
     *        An object instance of the class.
     */
    private constructor ( obj: object )
    {
        super();

        this._constructor = obj.constructor;
        this._name = obj.constructor.name;
        this._namespace = ( obj.constructor as NamespaceClassConstructor )['[[__namespace__]]'];
        // @todo this._numberOfArguments = obj.constructor.length;
        this._package = ( obj.constructor as PackageClassConstructor )['[[__package__]]']
    }

    ////
    //
    //  Properties
    //
    ////

    private _constructor: any;
    private _hashCode: ( number | undefined );
    private _name: string;
    private _namespace: ( string | undefined );
    private _package: ( string | undefined );

    /**
     * Returns the constructor of the class.
     */
    public get classConstructor (): Function
    {
        return this._constructor;
    }

    /**
     * Returns the full class name.
     */
    public get fullName (): string
    {
        const namespaceName = this.namespace;
        const packageName = this.package;

        let fullName = this.name;

        if ( namespaceName )
        {
            fullName = namespaceName + '.' + fullName;
        }

        if ( packageName )
        {
            fullName = packageName + '/' + fullName;
        }

        return fullName;
    }

    /**
     * Returns the class name.
     */
    public get name (): string
    {
        return this._name;
    }

    /**
     * Returns the class namespace.
     */
    public get namespace (): ( string | undefined )
    {
        return this._namespace;
    }

    /**
     * Returns the class package.
     */
    public get package (): ( string | undefined )
    {
        return this._package;
    }

    ////
    //
    //  Functions
    //
    ////

    /**
     * Compares this object type with another object type.
     *
     * @param other
     * The other object or type to compare with.
     *
     * Returns true, if the objects are equal, otherwise false.
     */
    public equals ( other: Type ): boolean
    {
        return (
            other instanceof Type
            && other.fullName === this.fullName
        );
    }

    /**
     * Returns a generated unique code for this type.
     */
    public getHashCode (): number
    {
        if ( this._hashCode === undefined )
        {
            this._hashCode = RuntimeUtility.generateStringHashCode( this.fullName.valueOf() );
        }

        return this._hashCode;
    }

    /**
     * Returns itself for further reflection.
     */
    public getType (): Type
    {
        return this;
    }

    /**
     * Returns the full name of the representing class.
     */
    public toString (): string
    {
        return this.fullName;
    }

    /**
     * Returns the full name of the representing class.
     */
    public valueOf (): string
    {
        return this.fullName;
    }
}

////
//
//  Export
//
////

export default Type;
