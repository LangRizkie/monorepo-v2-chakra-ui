import { Breadcrumb as ChakraBreadcrumb, Show, type SystemStyleObject } from '@chakra-ui/react'
import { forwardRef, Fragment, ReactNode } from 'react'

type BreadcrumbItems = {
	title: ReactNode
	url?: string
}

type BreadcrumbProps = ChakraBreadcrumb.RootProps & {
	separator?: React.ReactNode
	gap?: SystemStyleObject['gap']
	items: BreadcrumbItems[]
}

const Breadcrumb = forwardRef<HTMLDivElement, BreadcrumbProps>(
	function BreadcrumbRoot(props, ref) {
		const { gap, items, separator, ...rest } = props

		return (
			<ChakraBreadcrumb.Root ref={ref} {...rest}>
				<ChakraBreadcrumb.List gap={gap}>
					{items.map((item, index) => {
						const last = index === items.length - 1
						const Component = last ? ChakraBreadcrumb.CurrentLink : ChakraBreadcrumb.Link

						return (
							<Fragment key={item.url}>
								<ChakraBreadcrumb.Item>
									<Component href={item.url}>{item.title}</Component>
								</ChakraBreadcrumb.Item>
								<Show when={!last}>
									<ChakraBreadcrumb.Separator>{separator}</ChakraBreadcrumb.Separator>
								</Show>
							</Fragment>
						)
					})}
				</ChakraBreadcrumb.List>
			</ChakraBreadcrumb.Root>
		)
	}
)

export { Breadcrumb, type BreadcrumbItems, type BreadcrumbProps }
export default Breadcrumb
