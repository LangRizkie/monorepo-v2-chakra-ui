import { Icon as ChakraIcon, IconProps } from '@chakra-ui/react'
import { Icon, IconifyIconProps } from '@iconify-icon/react'

type IconifyProps = IconProps & Omit<IconifyIconProps, 'ref'>

const Iconify: React.FC<IconifyProps> = (props) => {
	return (
		<ChakraIcon {...props} height="auto" width="auto">
			<Icon {...props} />
		</ChakraIcon>
	)
}

export { Iconify, type IconifyProps }
export default Iconify
