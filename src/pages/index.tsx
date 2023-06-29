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
					<Person />
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
				<PivotList pivid={''} pivotlist={''}  />
			</div>
			<div css = {buttonArea}>
				<h2>Next.js</h2>
			</div>
		</div>
	)
}

const mainArea = css`
	display: flex;
  flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 60vw;
  height: 100vh;
	border: 1px solid #ccc;
`

const profileArea = css`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 25vh;
`

const pivotArea = css`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 25vh;
`

const buttonArea = css`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 25vh;
`
