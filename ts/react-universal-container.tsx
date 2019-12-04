import * as React from "react"

export interface UniversalContainerProps<TChildComponentProps> {
	component: React.ComponentClass<TChildComponentProps> | React.SFC<TChildComponentProps>
	isDisconnected?: boolean
}

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
export class UniversalContainer<TChildComponentProps, TChildComponentState> extends React.Component<UniversalContainerProps<TChildComponentProps> & TChildComponentProps, TChildComponentState> {
	props: any
	render() {
		const x = this.props as any
		const {component, ...otherProps} = x
		const SubComponent = component
		return (
			<SubComponent {...otherProps}/>
		)
	}
}
