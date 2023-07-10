/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import IconButton from '@mui/joy/IconButton'
import Menu from '@mui/joy/Menu'
import MenuItem from '@mui/joy/MenuItem'
import ListItemDecorator from '@mui/joy/ListItemDecorator'
import ListDivider from '@mui/joy/ListDivider'
import Edit from '@mui/icons-material/Edit'
import DeleteForever from '@mui/icons-material/DeleteForever'
import Person from '@mui/icons-material/Person'
import { useRef, useState } from 'react'
import PivotList from '@/components/pivotlist'
import CreateJoinPivotBtn from '@/components/cjpivotbtn'

export default function Home() {
	const buttonRef = useRef(null)
	const [open, setOpen] = useState(false)

	const handleClose = () => {
		setOpen(false)
	}
	return (
		<div css={mainArea}>
			<div css={profileArea}>
				<IconButton
					ref={buttonRef}
					id="profile-icon-button"
					aria-controls={'profile-menu'}
					aria-haspopup="true"
					aria-expanded={open ? 'true' : undefined}
					variant="outlined"
					color="primary"
					onClick={() => {
						setOpen(!open)
					}}
				>
					<Person sx={{ fontSize: '5rem' }} />
				</IconButton>
				<Menu
					id="profile-menu"
					anchorEl={buttonRef.current}
					open={open}
					onClose={handleClose}
					aria-labelledby="profile-button"
					placement="bottom"
				>
					<MenuItem onClick={handleClose}>
						<ListItemDecorator>
							<Edit />
						</ListItemDecorator>{' '}
						Edit post
					</MenuItem>
					<ListDivider />
					<MenuItem
						onClick={handleClose}
						variant="soft"
						color="danger"
					>
						<ListItemDecorator sx={{ color: 'inherit' }}>
							<DeleteForever />
						</ListItemDecorator>{' '}
						Delete
					</MenuItem>
				</Menu>
			</div>
			<div css={pivotArea}>
				<PivotList pivid={''} pivotlist={''} />
			</div>
			<div css={buttonArea}>
				<CreateJoinPivotBtn path={'/'} text={'CreatePivotBtn'} />
				<CreateJoinPivotBtn path={'/'} text={'JoinPivotBtn'} />
			</div>
		</div>
	)
}

const mainArea = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	width: 60vw;
	height: 100vh;
	border: 1px solid #ccc;

	@media (max-width: 440px) {
		border: none;
	}
`

const profileArea = css`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 15vh;
	margin-top: 5vh;
	
	@media (max-width: 440px) {
		margin-top: 10vh;
		height: 15vh;
	}
`

const pivotArea = css`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 25vh;

	@media (max-width: 440px) {
		height: 15vh;
	}
`

const buttonArea = css`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 25vh;
	margin-top: 5vh;
	gap: 6vw;

	@media (max-width: 440px) {
		height: 15vh;
	}
`
