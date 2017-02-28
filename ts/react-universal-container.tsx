import * as React from "react"

export interface UniversalContainerProps<TChildComponentProps> {
	component: React.ComponentClass<TChildComponentProps> | React.SFC<TChildComponentProps>
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
 * MultiBuilderScreen [Platform Specific]
 * └─┬ UniversalContainer<MultiBuilderProps> [Cross Platform]
 *   └── MultiBuilderPresentation<MultiBuilderProps> [Platform Specific]
 */
export class ReactUniversalContainer<TChildComponentProps, TChildComponentState>
	extends React.Component<UniversalContainerProps<TChildComponentProps> & TChildComponentProps, TChildComponentState> {
	render() {
		const x = this.props as any
		const {component, ...otherProps} = x
		const SubComponent = component
		return (
			<SubComponent {...otherProps}/>
		)
	}
}
