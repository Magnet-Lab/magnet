/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Box from '@mui/joy/Box'
import { useState } from 'react'

interface PivotListProps {
	pivid: string
	pivotlist: string
}

function PivotList({ pivid, pivotlist }: PivotListProps) {
	const [piv, setPiv] = useState<PivotListProps[]>([])

	return (
		<Box>
			{piv !== undefined ? (
				<Box
					css={box}
					width="50rem"
					height="5rem"
					borderRadius={5}
				>
					{piv.map(eachpiv => (
						<Box key={eachpiv.pivid}>
							<h2>{eachpiv.pivotlist}</h2>
						</Box>
					))}
					<h2 css={pivotText}>piv</h2>
				</Box>
			) : (
				<Box>
					<h2 css={pivotNone} >현재 참여중인 채널이 없어요</h2>
				</Box>
			)}
		</Box>
	)
}

export default PivotList

const pivotText = css`
	color: rgba(35, 51, 57, 1);
`
const pivotNone = css`
    color: rgba(209, 209, 209, 1);

`;

const box = css`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
    font-size: 1.5rem;
    padding-left: 2rem;
	box-shadow: 0px 0px 24px 8px rgba(0, 0, 0, 0.05);
	@media screen and (max-width: 440px) {
		width: 25rem;
		height: 4rem;
	}
`
