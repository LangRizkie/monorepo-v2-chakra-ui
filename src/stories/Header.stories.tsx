import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import Header from '@/components/header/Header.component'

const meta: Meta = {
	args: {
		content: <></>,
		onSymbolClick: fn()
	},
	component: Header,
	tags: ['autodocs'],
	title: 'Header'
} satisfies Meta<typeof Header>

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: { content: <></>, onSymbolClick: fn() }
}

export default meta
