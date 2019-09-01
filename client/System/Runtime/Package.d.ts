/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

    System Core Library

    Copyright (c) TypeScriptLibs and Contributors

    Licensed under the MIT License; you may not use this file except in
    compliance with the License. You may obtain a copy of the MIT License at
    https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
export interface IPackageClassConstructor extends Function {
    /**
     * Returns the package of the class. Class packkages are read-only and can
     * not be changed.
     */
    readonly '[[__package__]]'?: string;
}
export interface IPackageClassDecorator extends ClassDecorator {
    $(...additionalNamespaces: Array<string>): IPackageClassDecorator;
}
/**
 * Decorates the constructor of the following class with a package and optional
 * namespace for further reflection.
 *
 * ```ts
 * @Package('@tsl', 'system-core').$('System').$('Reflection')
 * export class MemberInfo
 * {
 *     // => package: '@tsl/system-core'
 *     // => namespace: 'System.Runtime'
 * }
 * ```
 *
 * @param packages
 * One or more packages of the class. All packages will be separated with a
 * slash (`/`) character.
 */
export declare function Package(...packages: Array<string>): IPackageClassDecorator;
export default Package;
