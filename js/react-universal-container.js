"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
/**
 * UniversalContainer is used as a generic, cross-platform component to
 * "sandwich" between two platform-specific components. It takes a specific
 * prop named `component` which is the class of the child component it will
 * create. It passes all of its other props to that subcomponent. Any
 * complex state mapping logic can then be included in your cross platform
 * container component.
 *
 * E.g
 * ScreenComponentReactNative [Native Platform Specific]
 * └─┬ UniversalContainer<ViewComponentProps> [Cross Platform]
 *   └── ViewComponentReactNative<ViewComponentProps> [Native Platform Specific]
 * or
 * ScreenComponentReact [Web Platform Specific]
 * └─┬ UniversalContainer<ViewComponentProps> [Cross Platform]
 *   └── ViewComponentReact<ViewComponentProps> [Web Platform Specific]
 */
var UniversalContainer = (function (_super) {
    __extends(UniversalContainer, _super);
    function UniversalContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UniversalContainer.prototype.render = function () {
        var x = this.props;
        var component = x.component, otherProps = __rest(x, ["component"]);
        var SubComponent = component;
        return (React.createElement(SubComponent, __assign({}, otherProps)));
    };
    return UniversalContainer;
}(React.Component));
exports.UniversalContainer = UniversalContainer;
