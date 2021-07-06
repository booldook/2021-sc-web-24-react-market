import styled, { css } from 'styled-components'
import { color, size, media, font, align } from './variables'

export { color, size, media, font, align }

export const mediaQuery = Object.keys(size).reduce((acc, v) => {
	acc[v] = (...args) => css`
		@media (max-width: ${ size[v] }) {
			${ css(...args) };
		}
	`
	return acc;
}, {})


export const shadow = css`
	box-shadow: 0 10px 6px -6px #777;
`

export const textShadow = ({ x, y, blur, color }) => `
	text-shadow: ${ x || 0 } ${ y || 0 } ${ blur || '5px' } ${ color || 'rgba(0, 0, 0, 0.5)' }
`

export const Button = styled.button`
	padding: 1em 1.5em;
`