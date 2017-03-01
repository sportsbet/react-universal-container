import * as React from "react";
export interface ReactUniversalContainerProps<TChildComponentProps> {
    component: React.ComponentClass<TChildComponentProps> | React.SFC<TChildComponentProps>;
}
/**
 * ReactUniversalContainer is used as a generic, cross-platform component to
 * "sandwich" between two platform-specific components. It takes a single
 * prop: which is the class of the child component it will create, and it
 * passes all of its other props to that subcomponent. Any complex state
 * mapping logic can then be included in your cross platform container
 * component.
 *
 * E.g
 * ScreenComponentIOS [Platform Specific]
 * └─┬ ReactUniversalContainer<ViewComponentProps> [Cross Platform]
 *   └── ViewComponentIOS<ViewComponentProps> [Platform Specific]
 */
export declare class ReactUniversalContainer<TChildComponentProps, TChildComponentState> extends React.Component<ReactUniversalContainerProps<TChildComponentProps> & TChildComponentProps, TChildComponentState> {
    props: any;
    render(): any;
}
