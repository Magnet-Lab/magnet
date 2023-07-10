/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Link from 'next/link'
import Button from '@mui/joy/Button'
import { Add } from '@mui/icons-material'
import { text } from 'stream/consumers'

interface BtnProps {
	path: string
	text: string
}

function CreateJoinPivotBtn({ path, text }: BtnProps) {
	return (
		<Link href={path}>
			<Button variant="soft" css={btn}>
				<span css={pivtext}>{text}</span>
				<div>
					<Add css={picicon}/>
				</div>
			</Button>
		</Link>
	)
}

export default CreateJoinPivotBtn

const btn = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	width: 20rem;
	height: 20rem;
	font-size: 2rem;
	box-shadow: 0px 0px 24px 8px rgba(0, 0, 0, 0.05);

	@media screen and (max-width: 440px) {
		width: 11rem;
		height: 11rem;
		font-size: 1.25rem;
	}
`
const pivtext = css`
	all: unset;
`
const picicon = css`
	font-size: 5rem;
	@media screen and (max-width: 440px) {
		font-size: 1.25rem;
	}
`;