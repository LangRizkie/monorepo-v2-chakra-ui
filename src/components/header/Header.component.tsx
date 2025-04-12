import { Flex, IconButton, Image } from '@chakra-ui/react'
import { ReactNode } from 'react'
import LogoSymbol from '@/static/logo/symbol.svg'

type HeaderProps = {
	onSymbolClick: () => void
	content?: ReactNode
}

export const Header: React.FC<HeaderProps> = (props) => {
	return (
		<Flex
			as="header"
			backgroundColor={{ _dark: 'gray.900', _light: 'bg' }}
			height="24"
			maxHeight="24"
			minHeight="24"
			position="sticky"
			top="0"
			width="full"
			zIndex="5"
		>
			<Flex
				alignItems="center"
				backgroundColor={{ _dark: 'bg', _light: 'gray.100' }}
				borderTopLeftRadius="4xl"
				height="full"
				justifyContent="space-between"
				padding="8"
				width="full"
			>
				<IconButton variant="ghost" onClick={props.onSymbolClick}>
					<Image
						alt="symbol"
						draggable={false}
						height="28px"
						objectFit="contain"
						src={LogoSymbol}
						width="28px"
					/>
				</IconButton>
				<Flex alignItems="center" gap="4">
					{props.content}
				</Flex>
			</Flex>
		</Flex>
	)
}

export { type HeaderProps }
