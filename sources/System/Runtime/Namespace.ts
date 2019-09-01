/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

    System Core Library

    Copyright (c) TypeScriptLibs and Contributors

    Licensed under the MIT License; you may not use this file except in
    compliance with the License. You may obtain a copy of the MIT License at
    https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/

////
//
//  Interfaces
//
////

export interface INamespaceClassConstructor extends Function
{
    /**
     * Returns the namespace of the class. Class namespaces are read-only
     * and can not be changed.
     */
    readonly '[[__namespace__]]'?: string;
}

export interface INamespaceClassDecorator extends ClassDecorator
{
    $ ( ...additionalNamespace: Array<string> ): INamespaceClassDecorator;
}

////
//
//  Functions
//
////

/**
 * Decorates the constructor of the following class with a namespace for further
 * reflection.
 *
 * @example
 * ```ts
 *   @Namespace('System').$('Reflection')
 *   export class MemberInfo
 *   {
 *     // => namespace: 'System.Runtime'
 *   }
 * ```
 *
 * @param namespace
 * One or more namespaces of the class. All namespaces will be separated with a
 * point (`.`) character.
 */
export function Namespace ( ...namespace: Array<string> ): INamespaceClassDecorator
{
    const decorator = function <T extends INamespaceClassConstructor> ( target: T ): T
    {
        if ( Object.hasOwnProperty.call( target, '[[__namespace__]]' ) === true )
        {
            throw new Error( 'Target has already a namespace!' );
        }

        Object.defineProperty( target, '[[__namespace__]]', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: namespace.join( '.' )
        } );

        return target;
    } as unknown as INamespaceClassDecorator;

    Object.defineProperty( decorator, '$', {
        configurable: false,
        enumerable: true,
        writable: false,
        value: function ( ...additionalNamespace: Array<string> ): INamespaceClassDecorator
        {
            return Namespace( ...namespace, ...additionalNamespace );
        }
    } );

    return decorator;
}

////
//
//  Export
//
////

export default Namespace;
