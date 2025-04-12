import { Flex, HStack, IconButton, Stack } from '@chakra-ui/react'
import { ReactNode, useMemo } from 'react'
import { Breadcrumb, BreadcrumbItems } from '../breadcrumb/Breadcrumb.component'
import { Container, ContainerProps } from '../container/Container.component'
import { Header, HeaderProps } from '../header/Header.component'
import { Iconify } from '../iconify/Iconify.component'
import { Sidebar, SidebarProps } from '../sidebar/Sidebar.component'

type LayoutProps = {
	sidebar: SidebarProps
	header: HeaderProps
	container: Omit<ContainerProps, 'children'>
	breadcrumb?: BreadcrumbItems[]
	modal?: ReactNode
	children?: ReactNode
}

export const Layout: React.FC<LayoutProps> = (props) => {
	const breadcrumb = useMemo(() => {
		return props.breadcrumb ?? []
	}, [props.breadcrumb])

	return (
		<Flex height="100vh" width="full">
			<Sidebar {...props.sidebar} />
			<Flex as="main" flexDirection="column" overflow="hidden" width="full">
				<Header {...props.header} />
				<Stack
					backgroundColor={{ _light: 'gray.100' }}
					gap="6"
					height="full"
					overflowY="auto"
					paddingX={{ base: 4, md: 8 }}
					paddingY={{ base: 4, md: 6 }}
				>
					<HStack alignItems="center">
						<IconButton size="xs" variant="subtle" onClick={() => history.back()}>
							<Iconify height="14" icon="bx:arrow-back" />
						</IconButton>
						<Breadcrumb
							fontWeight="semibold"
							gap="2"
							hideBelow="md"
							items={breadcrumb}
							separator="/"
						/>
					</HStack>
					<Container {...props.container}>{props.children}</Container>
				</Stack>
			</Flex>
			{props.modal}
		</Flex>
	)
}

export { type LayoutProps }
