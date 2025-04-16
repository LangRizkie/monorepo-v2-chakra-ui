import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import Search from '@/components/search/Search.component'

const meta: Meta = {
	args: {
		children: <></>,
		defaultValue: '',
		onValueChange: fn()
	},
	component: Search,
	tags: ['autodocs'],
	title: 'Search'
} satisfies Meta<typeof Search>

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		children: <></>,
		defaultValue: '',
		onValueChange: fn()
	}
}

export default meta
