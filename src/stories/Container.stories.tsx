import type { Meta, StoryObj } from '@storybook/react'
import Container from '@/components/container/Container.component'

const meta: Meta = {
	args: {
		activate: {},
		back: {},
		children: <></>,
		deactivate: {},
		isButtonsDisabled: false,
		reactivate: {},
		submit: {},
		title: ''
	},
	component: Container,
	tags: ['autodocs'],
	title: 'Container'
} satisfies Meta<typeof Container>

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		activate: {},
		back: {},
		children: <></>,
		deactivate: {},
		isButtonsDisabled: false,
		reactivate: {},
		submit: {},
		title: ''
	}
}

export default meta
