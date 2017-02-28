"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var React = require("react");
/**
 * ReactUniversalContainer is used as a generic, cross-platform component to
 * "sandwich" between two platform-specific components. It takes a single
 * prop: which is the class of the child component it will create, and it
 * passes all of its other props to that subcomponent. Any complex state
 * mapping logic can then be included in your cross platform container
 * component.
 *
 * E.g
 * MultiBuilderScreen [Platform Specific]
 * └─┬ UniversalContainer<MultiBuilderProps> [Cross Platform]
 *   └── MultiBuilderPresentation<MultiBuilderProps> [Platform Specific]
 */
var ReactUniversalContainer = (function (_super) {
    __extends(ReactUniversalContainer, _super);
    function ReactUniversalContainer() {
        _super.apply(this, arguments);
    }
    ReactUniversalContainer.prototype.render = function () {
        var x = this.props;
        var component = x.component, otherProps = x.otherProps;
        var SubComponent = component;
        return (React.createElement(SubComponent, __assign({}, otherProps)));
    };
    return ReactUniversalContainer;
}(React.Component));
exports.ReactUniversalContainer = ReactUniversalContainer;
