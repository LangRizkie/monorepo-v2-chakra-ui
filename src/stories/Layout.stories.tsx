import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import Layout from '@/components/layout/Layout.component'

const meta: Meta = {
	args: {
		header: { content: <></>, onSymbolClick: fn() },
		sidebar: { content: <></>, footer: <></>, isOpen: false }
	},
	component: Layout,
	tags: ['autodocs'],
	title: 'Layout'
} satisfies Meta<typeof Layout>

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		header: { content: <></>, onSymbolClick: fn() },
		sidebar: { content: <></>, footer: <></>, isOpen: false }
	}
}

export default meta
