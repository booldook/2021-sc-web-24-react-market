import { css } from "styled-components"

export const font = {
	noto: `'Noto Sans KR', sans-serif;`,
	notoSF: `'Noto Serif KR', serif;`
}

export const color = {
	black: '#111',
	darker: '#333',
	dark: '#555',
	greay: '#777',
	gray: '#777',
	default: '#999',
	light: '#aaa',
	lighter: '#ccc',
	bright: '#eee',
	white: '#f8f8f8',
	primary: '#3feee6',
	danger: '#fc4445',
	info: '#55bcc9',
	success: '#97caef',
	warning: '#cafafe',
}

export const size = {
	xl: '1399px',
	lg: '1199px',
	md: '991px',
	sm: '767px',
	xs: '575px',
}

export const media = {
	xl: ` (max-width: ${ size.xl })`,
	lg: ` (max-width: ${ size.lg })`,
	md: ` (max-width: ${ size.md })`,
	sm: ` (max-width: ${ size.sm })`,
	xs: ` (max-width: ${ size.xs })`,
}

export const flex = css`
	display: flex;
	flex-wrap: wrap;
`