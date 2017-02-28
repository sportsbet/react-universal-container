import * as React from "react";
export interface UniversalContainerProps<TChildComponentProps> {
    component: React.ComponentClass<TChildComponentProps> | React.SFC<TChildComponentProps>;
}
export declare class ReactUniversalContainer<TChildComponentProps, TChildComponentState> extends React.Component<UniversalContainerProps<TChildComponentProps> & TChildComponentProps, TChildComponentState> {
    render(): JSX.Element;
}
