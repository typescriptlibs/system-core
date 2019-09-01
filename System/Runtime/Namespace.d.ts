/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

    System Core Library

    Copyright (c) TypeScriptLibs and Contributors

    Licensed under the MIT License; you may not use this file except in
    compliance with the License. You may obtain a copy of the MIT License at
    https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
export interface INamespaceClassConstructor extends Function {
    /**
     * Returns the namespace of the class. Class namespaces are read-only
     * and can not be changed.
     */
    readonly '[[__namespace__]]'?: string;
}
export interface INamespaceClassDecorator extends ClassDecorator {
    $(...additionalNamespaces: Array<string>): INamespaceClassDecorator;
}
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
 * @param namespaces
 * One or more namespaces of the class. All namespaces will be separated with a
 * point (`.`) character.
 */
export declare function Namespace(...namespaces: Array<string>): INamespaceClassDecorator;
export default Namespace;
