/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div css={mainArea}>
			<Component {...pageProps} />
		</div>
	)
}

const mainArea = css`
	max-width: 60vw;
	min-height: 100vh;
	margin: 0 auto;

	@media (width < 440px) {
		max-width: 100vw;
		background-color: plum;
	}
`
