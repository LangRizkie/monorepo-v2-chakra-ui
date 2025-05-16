import { Button, ButtonGroup, ButtonProps, Flex, Heading, Stack } from '@chakra-ui/react'
import { ReactNode } from 'react'

type ClosedContainerProps = {
	title: string
	activate?: ButtonProps
	deactivate?: ButtonProps
	reactivate?: ButtonProps
	back?: ButtonProps
	submit?: ButtonProps
	isButtonsDisabled?: boolean
	children?: ReactNode
}

const ClosedContainer: React.FC<ClosedContainerProps> = (props) => (
	<Stack gap="4" width="full">
		<Flex justifyContent="space-between" width="full">
			<Heading fontWeight="bold" size="2xl">
				{props.title}
			</Heading>
			<ButtonGroup>
				<Button
					colorPalette="teal"
					form="activate-form"
					{...props.activate}
					disabled={props.activate?.disabled || props.isButtonsDisabled}
				>
					{props.activate?.children || props.activate?.title || 'Activate'}
				</Button>
				<Button
					colorPalette="red"
					form="deactivate-form"
					{...props.deactivate}
					disabled={props.deactivate?.disabled || props.isButtonsDisabled}
				>
					{props.deactivate?.children || props.deactivate?.title || 'Deactivate'}
				</Button>
				<Button
					colorPalette="teal"
					form="reactivate-form"
					{...props.reactivate}
					disabled={props.reactivate?.disabled || props.isButtonsDisabled}
				>
					{props.reactivate?.children || props.reactivate?.title || 'Reactivate'}
				</Button>
				<Button variant="subtle" onClick={() => history.back()} {...props.back}>
					{props.back?.title ?? 'Back'}
				</Button>
				<Button
					colorPalette="primary"
					form="submit-form"
					{...props.submit}
					disabled={props.submit?.disabled || props.isButtonsDisabled}
				>
					{props.submit?.children || props.submit?.title || 'Submit'}
				</Button>
			</ButtonGroup>
		</Flex>
		{props.children}
	</Stack>
)

export { ClosedContainer, type ClosedContainerProps }
export default ClosedContainer
