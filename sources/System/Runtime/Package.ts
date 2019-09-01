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

import { Namespace, INamespaceClassDecorator } from './Namespace';

////
//
//  Interfaces
//
////

export interface IPackageClassConstructor extends Function
{
    /**
     * Returns the package of the class. Class packkages are read-only and can
     * not be changed.
     */
    readonly '[[__package__]]'?: string;
}

export interface IPackageClassDecorator extends ClassDecorator
{
    $: typeof Namespace;
}

////
//
//  Functions
//
////

/**
 * Decorates the constructor of the following class with a package and optional
 * namespace for further reflection.
 *
 * @example
 * ```ts
 *     @Package('@tsl', 'system-core').$('System').$('Reflection')
 *     export class MemberInfo
 *     {
 *         // => package: '@tsl/system-core'
 *         // => namespace: 'System.Runtime'
 *     }
 * ```
 *
 * @param packages
 * One or more packages of the class. All packages will be separated with a
 * slash (`/`) character.
 */
export function Package ( ...packages: Array<string> ): IPackageClassDecorator
{
    let namespaceDecorator: INamespaceClassDecorator;

    const decorator = function <T extends IPackageClassConstructor> ( target: T ): T
    {
        if ( Object.hasOwnProperty.call( target, '[[__package__]]' ) === true )
        {
            throw new Error( 'Target has already a package!' );
        }

        Object.defineProperty( target, '[[__package__]]', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: packages.join( '/' )
        } );

        if ( typeof namespaceDecorator !== 'undefined' )
        {
            namespaceDecorator( target );
        }

        return target;
    } as unknown as IPackageClassDecorator;

    Object.defineProperty( decorator, '$', {
        configurable: false,
        enumerable: true,
        writable: false,
        value: function ( ...additionalNamespaces: Array<string> ): IPackageClassDecorator
        {
            namespaceDecorator = Namespace( ...additionalNamespaces );

            return decorator;
        }
    } );

    return decorator;
}

////
//
//  Export
//
////

export default Package;
