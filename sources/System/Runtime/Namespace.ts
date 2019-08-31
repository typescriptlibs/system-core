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

export interface NamespaceClassConstructor extends Function
{
    /**
     * Returns the namespace of the class. Class namespaces are read-only
     * and can not be changed.
     */
    readonly '[[__namespace__]]'?: string;
}

export interface NamespaceClassDecorator extends ClassDecorator
{
    $ ( ...additionalNamespace: Array<string> ): NamespaceClassDecorator;
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
export function Namespace ( ...namespace: Array<string> ): NamespaceClassDecorator
{
    const decorator = function <T extends NamespaceClassConstructor> ( target: T ): T
    {
        if ( target['[[__namespace__]]'] )
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
    } as unknown as NamespaceClassDecorator;

    Object.defineProperty( decorator, '$', {
        configurable: false,
        enumerable: true,
        writable: false,
        value: function ( ...additionalNamespace: Array<string> ): NamespaceClassDecorator
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
