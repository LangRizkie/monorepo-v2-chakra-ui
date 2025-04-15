import { Card, Input, InputGroup, Portal, Presence, Stack } from '@chakra-ui/react'
import { useBoolean, useDebounce, useDebounceEffect, useDebounceFn } from 'ahooks'
import { isEmpty } from 'lodash'
import { ReactNode, useRef, useState } from 'react'
import Iconify from '../iconify/Iconify.component'

type SearchProps = {
	defaultValue?: string
	onValueChange?: (value: string) => void
	children: ReactNode
}

const Search: React.FC<SearchProps> = ({ children, defaultValue, onValueChange }) => {
	const containerRef = useRef<HTMLDivElement>(null)

	const [isOpen, { set, setFalse, setTrue }] = useBoolean(false)
	const [search, setSearch] = useState<string>()

	const debounced = useDebounce(search, { wait: 200 })
	const { run } = useDebounceFn(() => setTrue(), { wait: 200 })

	useDebounceEffect(() => set(!isEmpty(debounced)), [debounced], { wait: 200 })

	return (
		<Stack>
			<InputGroup
				ref={containerRef}
				_focusWithin={{ width: 96 }}
				gap="0"
				startElement={<Iconify height={20} icon="bx:search" />}
				transition="all"
				transitionDuration="fast"
				transitionTimingFunction="ease"
				width="64"
				onBlur={setFalse}
				onFocus={() => !isEmpty(search) && run()}
			>
				<Input
					backgroundColor="bg"
					defaultValue={defaultValue}
					placeholder="Search..."
					onChange={(e) => {
						setSearch(e.target.value)
						onValueChange?.(e.target.value)
					}}
				/>
			</InputGroup>
			<Portal container={containerRef}>
				<Presence present={isOpen}>
					<Card.Root
						animationDuration="fast"
						animationName="slide-from-top, fade-in"
						left="0"
						position="absolute"
						top="14"
						width="full"
					>
						<Card.Body p="0">{children}</Card.Body>
					</Card.Root>
				</Presence>
			</Portal>
		</Stack>
	)
}

export { Search, type SearchProps }
export default Search
