/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Link from 'next/link'
import Button from '@mui/joy/Button'
import { Add } from '@mui/icons-material'

interface BtnProps {
	path: string
	text: string
}

function CreateJoinPivotBtn({ path, text }: BtnProps) {
	return (
		<Link href={path}>
			<Button size='lg' startDecorator={<Add />} variant='soft'>
                <span>{text}</span>
			</Button>
		</Link>
	)
}

export default CreateJoinPivotBtn
