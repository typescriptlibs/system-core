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
import { INamespaceClassConstructor } from './Runtime/Namespace';
import { IPackageClassConstructor } from './Runtime/Package';
import RuntimeUtility from './Runtime/RuntimeUtility';
import SystemCoreDecorator from '../package';

////
//
//  Classes
//
////

/**
 * The base class for all other classes. Internally defined as `OBJECT` to avoid
 * conflicts, but externally available as `Object`.
 */
@SystemCoreDecorator
export class OBJECT
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
    public equals ( other: OBJECT ): boolean
    {
        return (
            other.getHashCode() === this.getHashCode()
            && other.getType().equals( this.getType() )
            && other.valueOf() === this.valueOf()
        );
    }

    /**
     * Generates and returns a unique code for this object instance.
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
     * Returns the primitive value of the object instance.
     */
    public valueOf (): ( bigint | boolean | number | string | symbol | this )
    {
        return this;
    }
}

/**
 * The type class of an object provides information for further reflection.
 */
@SystemCoreDecorator
export class Type extends OBJECT
{
    ////
    //
    //  Static Functions
    //
    ////

    /**
     * Returns the class type of the given object.
     *
     * @param object
     * The object to get the type of.
     */
    public static of ( object: Environment.BasicType ): Type
    {
        return new Type( object );
    }

    ////
    //
    //  Constructor
    //
    ////

    /**
     * Creates the class type of a given object.
     *
     * @param object
     * The object to reflect.
     */
    private constructor ( object: Environment.BasicType )
    {
        super();

        const constructor = ( object instanceof Function ? object : object.constructor );

        this._constructor = constructor as Environment.ConstructorType;
        this._name = constructor.name;
        this._namespace = ( constructor as INamespaceClassConstructor )['[[__namespace__]]'];
        this._package = ( constructor as IPackageClassConstructor )['[[__package__]]'];

        if ( this._name === 'OBJECT' &&
            this._namespace === 'System' &&
            this._package === '@tsl/system-core' )
        {
            this._name = 'Object';
        }

        // @todo this._numberOfArguments = obj.constructor.length;
    }

    ////
    //
    //  Properties
    //
    ////

    private _constructor: Environment.ConstructorType;
    private _hashCode: ( number | undefined );
    private _name: string;
    private _namespace: ( string | undefined );
    private _package: ( string | undefined );

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
     * Compares this object type with another object type. Returns true, if the
     * object types are equal, otherwise false.
     *
     * @param other
     * The other type to compare with.
     */
    public equals ( other: OBJECT ): boolean
    {
        return (
            other instanceof Type
            && other.fullName === this.fullName
        );
    }

    /**
     * Returns the names of the enum constants.
     */
    public getEnumNames (): Array<string>
    {
        const enumConstructor = this._constructor;

        if ( typeof enumConstructor !== 'function' )
        {
            return [];
        }

        return Object
            .getOwnPropertyNames( enumConstructor )
            .filter(
                function ( propertyName: string ): boolean
                {
                    return enumConstructor[propertyName] instanceof enumConstructor;
                }
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

export default OBJECT;
