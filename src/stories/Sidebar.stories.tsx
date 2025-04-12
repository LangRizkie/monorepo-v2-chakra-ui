import type { Meta, StoryObj } from '@storybook/react'
import Sidebar from '@/components/sidebar/Sidebar.component'

const meta: Meta = {
	args: {
		content: <></>,
		footer: <></>,
		isOpen: false
	},
	component: Sidebar,
	tags: ['autodocs'],
	title: 'Sidebar'
} satisfies Meta<typeof Sidebar>

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: { content: <></>, footer: <></>, isOpen: false }
}

export default meta
