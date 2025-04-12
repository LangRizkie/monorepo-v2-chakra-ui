import { Box, Center, Image, Portal, Presence, Stack } from '@chakra-ui/react'
import { ReactNode, useEffect, useState } from 'react'
import LogoCompact from '@/static/logo/compact.svg'
import LogoWordmark from '@/static/logo/wordmark.svg'

type SidebarProps = {
	isOpen: boolean
	content?: ReactNode
	footer?: ReactNode
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
	const [isOpen, setIsOpen] = useState<boolean>(props.isOpen)

	const width = isOpen ? '64' : '20'

	useEffect(() => {
		setIsOpen(props.isOpen)
	}, [setIsOpen, props.isOpen])

	return (
		<>
			<Stack
				backgroundColor={{ _dark: 'gray.900', _light: 'bg' }}
				height="100vh"
				left={{ base: isOpen ? '0' : '-24', xl: '0' }}
				maxWidth={width}
				minWidth={width}
				position={{ base: 'fixed', xl: 'sticky' }}
				top="0"
				transition="all"
				width={width}
				zIndex="15"
			>
				<Center alignItems="center" gap="2" height="24" maxHeight="24" minHeight="24">
					<Image alt="compact" draggable={false} height="40px" src={LogoCompact} />
					<Image
						alt="wordmark"
						draggable={false}
						height="40px"
						hidden={!isOpen}
						src={LogoWordmark}
					/>
				</Center>
				<Stack
					alignItems="start"
					height="full"
					overflowX="hidden"
					overflowY="auto"
					padding="4"
					paddingY="2"
					textStyle="sm"
				>
					{props.content}
				</Stack>
				<Center hidden={!props.footer} padding="4">
					{props.footer}
				</Center>
			</Stack>
			<Portal>
				<Presence present={isOpen}>
					<Box
						background="gray.900/60"
						height="100vh"
						hideFrom="xl"
						left="0"
						position="fixed"
						top="0"
						width="100vw"
						zIndex="10"
						onClick={() => setIsOpen(!isOpen)}
					/>
				</Presence>
			</Portal>
		</>
	)
}

export { type SidebarProps }
