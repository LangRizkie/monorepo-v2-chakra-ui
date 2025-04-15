import { Icon as ChakraIcon, IconProps } from '@chakra-ui/react'
import { Icon, type IconifyIconHTMLElement, type IconifyIconProps } from '@iconify-icon/react'
import { forwardRef } from 'react'

type IconifyProps = IconProps & IconifyIconProps

const Iconify = forwardRef<IconifyIconHTMLElement, IconifyProps>((props, ref) => {
	return (
		<ChakraIcon {...props}>
			<Icon ref={ref} {...props} />
		</ChakraIcon>
	)
})

Iconify.displayName = 'Iconify'

export { Iconify, type IconifyProps }
export default Iconify
