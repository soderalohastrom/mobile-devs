"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/devlop";
exports.ids = ["vendor-chunks/devlop"];
exports.modules = {

/***/ "(ssr)/./node_modules/devlop/lib/development.js":
/*!************************************************!*\
  !*** ./node_modules/devlop/lib/development.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deprecate: () => (/* binding */ deprecate),\n/* harmony export */   equal: () => (/* binding */ equal),\n/* harmony export */   ok: () => (/* binding */ ok),\n/* harmony export */   unreachable: () => (/* binding */ unreachable)\n/* harmony export */ });\n/* harmony import */ var dequal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dequal */ \"(ssr)/./node_modules/dequal/dist/index.mjs\");\n\n\n/**\n * @type {Set<string>}\n */\nconst codesWarned = new Set()\n\nclass AssertionError extends Error {\n  name = /** @type {const} */ ('Assertion')\n  code = /** @type {const} */ ('ERR_ASSERTION')\n\n  /**\n   * Create an assertion error.\n   *\n   * @param {string} message\n   *   Message explaining error.\n   * @param {unknown} actual\n   *   Value.\n   * @param {unknown} expected\n   *   Baseline.\n   * @param {string} operator\n   *   Name of equality operation.\n   * @param {boolean} generated\n   *   Whether `message` is a custom message or not\n   * @returns\n   *   Instance.\n   */\n  // eslint-disable-next-line max-params\n  constructor(message, actual, expected, operator, generated) {\n    super(message)\n\n    if (Error.captureStackTrace) {\n      Error.captureStackTrace(this, this.constructor)\n    }\n\n    /**\n     * @type {unknown}\n     */\n    this.actual = actual\n\n    /**\n     * @type {unknown}\n     */\n    this.expected = expected\n\n    /**\n     * @type {boolean}\n     */\n    this.generated = generated\n\n    /**\n     * @type {string}\n     */\n    this.operator = operator\n  }\n}\n\nclass DeprecationError extends Error {\n  name = /** @type {const} */ ('DeprecationWarning')\n\n  /**\n   * Create a deprecation message.\n   *\n   * @param {string} message\n   *   Message explaining deprecation.\n   * @param {string | undefined} code\n   *   Deprecation identifier; deprecation messages will be generated only once per code.\n   * @returns\n   *   Instance.\n   */\n  constructor(message, code) {\n    super(message)\n\n    /**\n     * @type {string | undefined}\n     */\n    this.code = code\n  }\n}\n\n/**\n * Wrap a function or class to show a deprecation message when first called.\n *\n * > 👉 **Important**: only shows a message when the `development` condition is\n * > used, does nothing in production.\n *\n * When the resulting wrapped `fn` is called, emits a warning once to\n * `console.error` (`stderr`).\n * If a code is given, one warning message will be emitted in total per code.\n *\n * @template {Function} T\n *   Function or class kind.\n * @param {T} fn\n *   Function or class.\n * @param {string} message\n *   Message explaining deprecation.\n * @param {string | null | undefined} [code]\n *   Deprecation identifier (optional); deprecation messages will be generated\n *   only once per code.\n * @returns {T}\n *   Wrapped `fn`.\n */\nfunction deprecate(fn, message, code) {\n  let warned = false\n\n  // The wrapper will keep the same prototype as fn to maintain prototype chain\n  Object.setPrototypeOf(deprecated, fn)\n\n  // @ts-expect-error: it’s perfect, typescript…\n  return deprecated\n\n  /**\n   * @this {unknown}\n   * @param  {...Array<unknown>} args\n   * @returns {unknown}\n   */\n  function deprecated(...args) {\n    if (!warned) {\n      warned = true\n\n      if (typeof code === 'string' && codesWarned.has(code)) {\n        // Empty.\n      } else {\n        console.error(new DeprecationError(message, code || undefined))\n\n        if (typeof code === 'string') codesWarned.add(code)\n      }\n    }\n\n    return new.target\n      ? Reflect.construct(fn, args, new.target)\n      : Reflect.apply(fn, this, args)\n  }\n}\n\n/**\n * Assert deep strict equivalence.\n *\n * > 👉 **Important**: only asserts when the `development` condition is used,\n * > does nothing in production.\n *\n * @template {unknown} T\n *   Expected kind.\n * @param {unknown} actual\n *   Value.\n * @param {T} expected\n *   Baseline.\n * @param {Error | string | null | undefined} [message]\n *   Message for assertion error (default: `'Expected values to be deeply equal'`).\n * @returns {asserts actual is T}\n *   Nothing; throws when `actual` is not deep strict equal to `expected`.\n * @throws {AssertionError}\n *   Throws when `actual` is not deep strict equal to `expected`.\n */\nfunction equal(actual, expected, message) {\n  assert(\n    (0,dequal__WEBPACK_IMPORTED_MODULE_0__.dequal)(actual, expected),\n    actual,\n    expected,\n    'equal',\n    'Expected values to be deeply equal',\n    message\n  )\n}\n\n/**\n * Assert if `value` is truthy.\n *\n * > 👉 **Important**: only asserts when the `development` condition is used,\n * > does nothing in production.\n *\n * @param {unknown} value\n *   Value to assert.\n * @param {Error | string | null | undefined} [message]\n *   Message for assertion error (default: `'Expected value to be truthy'`).\n * @returns {asserts value}\n *   Nothing; throws when `value` is falsey.\n * @throws {AssertionError}\n *   Throws when `value` is falsey.\n */\nfunction ok(value, message) {\n  assert(\n    Boolean(value),\n    false,\n    true,\n    'ok',\n    'Expected value to be truthy',\n    message\n  )\n}\n\n/**\n * Assert that a code path never happens.\n *\n * > 👉 **Important**: only asserts when the `development` condition is used,\n * > does nothing in production.\n *\n * @param {Error | string | null | undefined} [message]\n *   Message for assertion error (default: `'Unreachable'`).\n * @returns {never}\n *   Nothing; always throws.\n * @throws {AssertionError}\n *   Throws when `value` is falsey.\n */\nfunction unreachable(message) {\n  assert(false, false, true, 'ok', 'Unreachable', message)\n}\n\n/**\n * @param {boolean} bool\n *   Whether to skip this operation.\n * @param {unknown} actual\n *   Actual value.\n * @param {unknown} expected\n *   Expected value.\n * @param {string} operator\n *   Operator.\n * @param {string} defaultMessage\n *   Default message for operation.\n * @param {Error | string | null | undefined} userMessage\n *   User-provided message.\n * @returns {asserts bool}\n *   Nothing; throws when falsey.\n */\n// eslint-disable-next-line max-params\nfunction assert(bool, actual, expected, operator, defaultMessage, userMessage) {\n  if (!bool) {\n    throw userMessage instanceof Error\n      ? userMessage\n      : new AssertionError(\n          userMessage || defaultMessage,\n          actual,\n          expected,\n          operator,\n          !userMessage\n        )\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZGV2bG9wL2xpYi9kZXZlbG9wbWVudC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE2Qjs7QUFFN0I7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCLG9CQUFvQixPQUFPOztBQUUzQjtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLE9BQU87O0FBRTNCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBLGFBQWEsb0JBQW9CO0FBQ2pDLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxVQUFVO0FBQ3hCO0FBQ0EsV0FBVyxHQUFHO0FBQ2Q7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxXQUFXLDJCQUEyQjtBQUN0Qyx3Q0FBd0M7QUFDeEM7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaLGNBQWMsbUJBQW1CO0FBQ2pDLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsU0FBUztBQUN2QjtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBLFdBQVcsR0FBRztBQUNkO0FBQ0EsV0FBVyxtQ0FBbUM7QUFDOUM7QUFDQSxhQUFhO0FBQ2IsY0FBYztBQUNkLFlBQVk7QUFDWjtBQUNBO0FBQ087QUFDUDtBQUNBLElBQUksOENBQU07QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxXQUFXLG1DQUFtQztBQUM5QztBQUNBLGFBQWE7QUFDYixjQUFjO0FBQ2QsWUFBWTtBQUNaO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1DQUFtQztBQUM5QztBQUNBLGFBQWE7QUFDYixjQUFjO0FBQ2QsWUFBWTtBQUNaO0FBQ0E7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxXQUFXLG1DQUFtQztBQUM5QztBQUNBLGFBQWE7QUFDYixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXNzaXN0YW50LXVpLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvZGV2bG9wL2xpYi9kZXZlbG9wbWVudC5qcz8wM2JiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZGVxdWFsfSBmcm9tICdkZXF1YWwnXG5cbi8qKlxuICogQHR5cGUge1NldDxzdHJpbmc+fVxuICovXG5jb25zdCBjb2Rlc1dhcm5lZCA9IG5ldyBTZXQoKVxuXG5jbGFzcyBBc3NlcnRpb25FcnJvciBleHRlbmRzIEVycm9yIHtcbiAgbmFtZSA9IC8qKiBAdHlwZSB7Y29uc3R9ICovICgnQXNzZXJ0aW9uJylcbiAgY29kZSA9IC8qKiBAdHlwZSB7Y29uc3R9ICovICgnRVJSX0FTU0VSVElPTicpXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBhc3NlcnRpb24gZXJyb3IuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG4gICAqICAgTWVzc2FnZSBleHBsYWluaW5nIGVycm9yLlxuICAgKiBAcGFyYW0ge3Vua25vd259IGFjdHVhbFxuICAgKiAgIFZhbHVlLlxuICAgKiBAcGFyYW0ge3Vua25vd259IGV4cGVjdGVkXG4gICAqICAgQmFzZWxpbmUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcGVyYXRvclxuICAgKiAgIE5hbWUgb2YgZXF1YWxpdHkgb3BlcmF0aW9uLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGdlbmVyYXRlZFxuICAgKiAgIFdoZXRoZXIgYG1lc3NhZ2VgIGlzIGEgY3VzdG9tIG1lc3NhZ2Ugb3Igbm90XG4gICAqIEByZXR1cm5zXG4gICAqICAgSW5zdGFuY2UuXG4gICAqL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LXBhcmFtc1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBhY3R1YWwsIGV4cGVjdGVkLCBvcGVyYXRvciwgZ2VuZXJhdGVkKSB7XG4gICAgc3VwZXIobWVzc2FnZSlcblxuICAgIGlmIChFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkge1xuICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgdGhpcy5jb25zdHJ1Y3RvcilcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7dW5rbm93bn1cbiAgICAgKi9cbiAgICB0aGlzLmFjdHVhbCA9IGFjdHVhbFxuXG4gICAgLyoqXG4gICAgICogQHR5cGUge3Vua25vd259XG4gICAgICovXG4gICAgdGhpcy5leHBlY3RlZCA9IGV4cGVjdGVkXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmdlbmVyYXRlZCA9IGdlbmVyYXRlZFxuXG4gICAgLyoqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3JcbiAgfVxufVxuXG5jbGFzcyBEZXByZWNhdGlvbkVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBuYW1lID0gLyoqIEB0eXBlIHtjb25zdH0gKi8gKCdEZXByZWNhdGlvbldhcm5pbmcnKVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBkZXByZWNhdGlvbiBtZXNzYWdlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxuICAgKiAgIE1lc3NhZ2UgZXhwbGFpbmluZyBkZXByZWNhdGlvbi5cbiAgICogQHBhcmFtIHtzdHJpbmcgfCB1bmRlZmluZWR9IGNvZGVcbiAgICogICBEZXByZWNhdGlvbiBpZGVudGlmaWVyOyBkZXByZWNhdGlvbiBtZXNzYWdlcyB3aWxsIGJlIGdlbmVyYXRlZCBvbmx5IG9uY2UgcGVyIGNvZGUuXG4gICAqIEByZXR1cm5zXG4gICAqICAgSW5zdGFuY2UuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBjb2RlKSB7XG4gICAgc3VwZXIobWVzc2FnZSlcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtzdHJpbmcgfCB1bmRlZmluZWR9XG4gICAgICovXG4gICAgdGhpcy5jb2RlID0gY29kZVxuICB9XG59XG5cbi8qKlxuICogV3JhcCBhIGZ1bmN0aW9uIG9yIGNsYXNzIHRvIHNob3cgYSBkZXByZWNhdGlvbiBtZXNzYWdlIHdoZW4gZmlyc3QgY2FsbGVkLlxuICpcbiAqID4g8J+RiSAqKkltcG9ydGFudCoqOiBvbmx5IHNob3dzIGEgbWVzc2FnZSB3aGVuIHRoZSBgZGV2ZWxvcG1lbnRgIGNvbmRpdGlvbiBpc1xuICogPiB1c2VkLCBkb2VzIG5vdGhpbmcgaW4gcHJvZHVjdGlvbi5cbiAqXG4gKiBXaGVuIHRoZSByZXN1bHRpbmcgd3JhcHBlZCBgZm5gIGlzIGNhbGxlZCwgZW1pdHMgYSB3YXJuaW5nIG9uY2UgdG9cbiAqIGBjb25zb2xlLmVycm9yYCAoYHN0ZGVycmApLlxuICogSWYgYSBjb2RlIGlzIGdpdmVuLCBvbmUgd2FybmluZyBtZXNzYWdlIHdpbGwgYmUgZW1pdHRlZCBpbiB0b3RhbCBwZXIgY29kZS5cbiAqXG4gKiBAdGVtcGxhdGUge0Z1bmN0aW9ufSBUXG4gKiAgIEZ1bmN0aW9uIG9yIGNsYXNzIGtpbmQuXG4gKiBAcGFyYW0ge1R9IGZuXG4gKiAgIEZ1bmN0aW9uIG9yIGNsYXNzLlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcbiAqICAgTWVzc2FnZSBleHBsYWluaW5nIGRlcHJlY2F0aW9uLlxuICogQHBhcmFtIHtzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29kZV1cbiAqICAgRGVwcmVjYXRpb24gaWRlbnRpZmllciAob3B0aW9uYWwpOyBkZXByZWNhdGlvbiBtZXNzYWdlcyB3aWxsIGJlIGdlbmVyYXRlZFxuICogICBvbmx5IG9uY2UgcGVyIGNvZGUuXG4gKiBAcmV0dXJucyB7VH1cbiAqICAgV3JhcHBlZCBgZm5gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVwcmVjYXRlKGZuLCBtZXNzYWdlLCBjb2RlKSB7XG4gIGxldCB3YXJuZWQgPSBmYWxzZVxuXG4gIC8vIFRoZSB3cmFwcGVyIHdpbGwga2VlcCB0aGUgc2FtZSBwcm90b3R5cGUgYXMgZm4gdG8gbWFpbnRhaW4gcHJvdG90eXBlIGNoYWluXG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZihkZXByZWNhdGVkLCBmbilcblxuICAvLyBAdHMtZXhwZWN0LWVycm9yOiBpdOKAmXMgcGVyZmVjdCwgdHlwZXNjcmlwdOKAplxuICByZXR1cm4gZGVwcmVjYXRlZFxuXG4gIC8qKlxuICAgKiBAdGhpcyB7dW5rbm93bn1cbiAgICogQHBhcmFtICB7Li4uQXJyYXk8dW5rbm93bj59IGFyZ3NcbiAgICogQHJldHVybnMge3Vua25vd259XG4gICAqL1xuICBmdW5jdGlvbiBkZXByZWNhdGVkKC4uLmFyZ3MpIHtcbiAgICBpZiAoIXdhcm5lZCkge1xuICAgICAgd2FybmVkID0gdHJ1ZVxuXG4gICAgICBpZiAodHlwZW9mIGNvZGUgPT09ICdzdHJpbmcnICYmIGNvZGVzV2FybmVkLmhhcyhjb2RlKSkge1xuICAgICAgICAvLyBFbXB0eS5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IobmV3IERlcHJlY2F0aW9uRXJyb3IobWVzc2FnZSwgY29kZSB8fCB1bmRlZmluZWQpKVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29kZSA9PT0gJ3N0cmluZycpIGNvZGVzV2FybmVkLmFkZChjb2RlKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXcudGFyZ2V0XG4gICAgICA/IFJlZmxlY3QuY29uc3RydWN0KGZuLCBhcmdzLCBuZXcudGFyZ2V0KVxuICAgICAgOiBSZWZsZWN0LmFwcGx5KGZuLCB0aGlzLCBhcmdzKVxuICB9XG59XG5cbi8qKlxuICogQXNzZXJ0IGRlZXAgc3RyaWN0IGVxdWl2YWxlbmNlLlxuICpcbiAqID4g8J+RiSAqKkltcG9ydGFudCoqOiBvbmx5IGFzc2VydHMgd2hlbiB0aGUgYGRldmVsb3BtZW50YCBjb25kaXRpb24gaXMgdXNlZCxcbiAqID4gZG9lcyBub3RoaW5nIGluIHByb2R1Y3Rpb24uXG4gKlxuICogQHRlbXBsYXRlIHt1bmtub3dufSBUXG4gKiAgIEV4cGVjdGVkIGtpbmQuXG4gKiBAcGFyYW0ge3Vua25vd259IGFjdHVhbFxuICogICBWYWx1ZS5cbiAqIEBwYXJhbSB7VH0gZXhwZWN0ZWRcbiAqICAgQmFzZWxpbmUuXG4gKiBAcGFyYW0ge0Vycm9yIHwgc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZH0gW21lc3NhZ2VdXG4gKiAgIE1lc3NhZ2UgZm9yIGFzc2VydGlvbiBlcnJvciAoZGVmYXVsdDogYCdFeHBlY3RlZCB2YWx1ZXMgdG8gYmUgZGVlcGx5IGVxdWFsJ2ApLlxuICogQHJldHVybnMge2Fzc2VydHMgYWN0dWFsIGlzIFR9XG4gKiAgIE5vdGhpbmc7IHRocm93cyB3aGVuIGBhY3R1YWxgIGlzIG5vdCBkZWVwIHN0cmljdCBlcXVhbCB0byBgZXhwZWN0ZWRgLlxuICogQHRocm93cyB7QXNzZXJ0aW9uRXJyb3J9XG4gKiAgIFRocm93cyB3aGVuIGBhY3R1YWxgIGlzIG5vdCBkZWVwIHN0cmljdCBlcXVhbCB0byBgZXhwZWN0ZWRgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICBhc3NlcnQoXG4gICAgZGVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQpLFxuICAgIGFjdHVhbCxcbiAgICBleHBlY3RlZCxcbiAgICAnZXF1YWwnLFxuICAgICdFeHBlY3RlZCB2YWx1ZXMgdG8gYmUgZGVlcGx5IGVxdWFsJyxcbiAgICBtZXNzYWdlXG4gIClcbn1cblxuLyoqXG4gKiBBc3NlcnQgaWYgYHZhbHVlYCBpcyB0cnV0aHkuXG4gKlxuICogPiDwn5GJICoqSW1wb3J0YW50Kio6IG9ubHkgYXNzZXJ0cyB3aGVuIHRoZSBgZGV2ZWxvcG1lbnRgIGNvbmRpdGlvbiBpcyB1c2VkLFxuICogPiBkb2VzIG5vdGhpbmcgaW4gcHJvZHVjdGlvbi5cbiAqXG4gKiBAcGFyYW0ge3Vua25vd259IHZhbHVlXG4gKiAgIFZhbHVlIHRvIGFzc2VydC5cbiAqIEBwYXJhbSB7RXJyb3IgfCBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkfSBbbWVzc2FnZV1cbiAqICAgTWVzc2FnZSBmb3IgYXNzZXJ0aW9uIGVycm9yIChkZWZhdWx0OiBgJ0V4cGVjdGVkIHZhbHVlIHRvIGJlIHRydXRoeSdgKS5cbiAqIEByZXR1cm5zIHthc3NlcnRzIHZhbHVlfVxuICogICBOb3RoaW5nOyB0aHJvd3Mgd2hlbiBgdmFsdWVgIGlzIGZhbHNleS5cbiAqIEB0aHJvd3Mge0Fzc2VydGlvbkVycm9yfVxuICogICBUaHJvd3Mgd2hlbiBgdmFsdWVgIGlzIGZhbHNleS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9rKHZhbHVlLCBtZXNzYWdlKSB7XG4gIGFzc2VydChcbiAgICBCb29sZWFuKHZhbHVlKSxcbiAgICBmYWxzZSxcbiAgICB0cnVlLFxuICAgICdvaycsXG4gICAgJ0V4cGVjdGVkIHZhbHVlIHRvIGJlIHRydXRoeScsXG4gICAgbWVzc2FnZVxuICApXG59XG5cbi8qKlxuICogQXNzZXJ0IHRoYXQgYSBjb2RlIHBhdGggbmV2ZXIgaGFwcGVucy5cbiAqXG4gKiA+IPCfkYkgKipJbXBvcnRhbnQqKjogb25seSBhc3NlcnRzIHdoZW4gdGhlIGBkZXZlbG9wbWVudGAgY29uZGl0aW9uIGlzIHVzZWQsXG4gKiA+IGRvZXMgbm90aGluZyBpbiBwcm9kdWN0aW9uLlxuICpcbiAqIEBwYXJhbSB7RXJyb3IgfCBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkfSBbbWVzc2FnZV1cbiAqICAgTWVzc2FnZSBmb3IgYXNzZXJ0aW9uIGVycm9yIChkZWZhdWx0OiBgJ1VucmVhY2hhYmxlJ2ApLlxuICogQHJldHVybnMge25ldmVyfVxuICogICBOb3RoaW5nOyBhbHdheXMgdGhyb3dzLlxuICogQHRocm93cyB7QXNzZXJ0aW9uRXJyb3J9XG4gKiAgIFRocm93cyB3aGVuIGB2YWx1ZWAgaXMgZmFsc2V5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdW5yZWFjaGFibGUobWVzc2FnZSkge1xuICBhc3NlcnQoZmFsc2UsIGZhbHNlLCB0cnVlLCAnb2snLCAnVW5yZWFjaGFibGUnLCBtZXNzYWdlKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gYm9vbFxuICogICBXaGV0aGVyIHRvIHNraXAgdGhpcyBvcGVyYXRpb24uXG4gKiBAcGFyYW0ge3Vua25vd259IGFjdHVhbFxuICogICBBY3R1YWwgdmFsdWUuXG4gKiBAcGFyYW0ge3Vua25vd259IGV4cGVjdGVkXG4gKiAgIEV4cGVjdGVkIHZhbHVlLlxuICogQHBhcmFtIHtzdHJpbmd9IG9wZXJhdG9yXG4gKiAgIE9wZXJhdG9yLlxuICogQHBhcmFtIHtzdHJpbmd9IGRlZmF1bHRNZXNzYWdlXG4gKiAgIERlZmF1bHQgbWVzc2FnZSBmb3Igb3BlcmF0aW9uLlxuICogQHBhcmFtIHtFcnJvciB8IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWR9IHVzZXJNZXNzYWdlXG4gKiAgIFVzZXItcHJvdmlkZWQgbWVzc2FnZS5cbiAqIEByZXR1cm5zIHthc3NlcnRzIGJvb2x9XG4gKiAgIE5vdGhpbmc7IHRocm93cyB3aGVuIGZhbHNleS5cbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1wYXJhbXNcbmZ1bmN0aW9uIGFzc2VydChib29sLCBhY3R1YWwsIGV4cGVjdGVkLCBvcGVyYXRvciwgZGVmYXVsdE1lc3NhZ2UsIHVzZXJNZXNzYWdlKSB7XG4gIGlmICghYm9vbCkge1xuICAgIHRocm93IHVzZXJNZXNzYWdlIGluc3RhbmNlb2YgRXJyb3JcbiAgICAgID8gdXNlck1lc3NhZ2VcbiAgICAgIDogbmV3IEFzc2VydGlvbkVycm9yKFxuICAgICAgICAgIHVzZXJNZXNzYWdlIHx8IGRlZmF1bHRNZXNzYWdlLFxuICAgICAgICAgIGFjdHVhbCxcbiAgICAgICAgICBleHBlY3RlZCxcbiAgICAgICAgICBvcGVyYXRvcixcbiAgICAgICAgICAhdXNlck1lc3NhZ2VcbiAgICAgICAgKVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/devlop/lib/development.js\n");

/***/ })

};
;