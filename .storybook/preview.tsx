import { ChakraProvider } from '@chakra-ui/react'
import type { Preview } from '@storybook/react'
import React from 'react'
import { system } from '../src/config/theme'

const _ = React.Fragment

const preview: Preview = {
	decorators: [
		(Story) => (
			<ChakraProvider value={system}>
				<Story />
			</ChakraProvider>
		)
	],
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	}
}

export default preview
