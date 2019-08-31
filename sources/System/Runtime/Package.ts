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

import Namespace from './Namespace';

////
//
//  Interfaces
//
////

export interface PackageClassConstructor extends Function
{
    /**
     * Returns the package of the class. Class packkages are read-only and can
     * not be changed.
     */
    readonly '[[__package__]]'?: string;
}

export interface PackageClassDecorator extends ClassDecorator
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
export function Package ( ...packages: Array<string> ): PackageClassDecorator
{
    const decorator = function <T extends PackageClassConstructor> ( target: T ): T
    {
        if ( target['[[__package__]]'] )
        {
            throw new Error( 'Target has already a package!' );
        }

        Object.defineProperty( target, '[[__package__]]', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: packages.join( '/' )
        } );

        return target;
    } as unknown as PackageClassDecorator;

    Object.defineProperty( decorator, '$', {
        configurable: false,
        enumerable: true,
        writable: false,
        value: Namespace
    } );

    return decorator;
}

////
//
//  Export
//
////

export default Package;
