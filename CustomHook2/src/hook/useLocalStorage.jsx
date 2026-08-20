import React from 'react'

export const useLocalStorage = (key, incial) => {
	const [state, setState] = React.useState(() => {
		const local = window.localStorage.getItem(key)

		return local ? local : incial
	})

	React.useEffect(() => {
		window.localStorage.setItem(key, state)
	}, [state, key])

	return [state, setState]
}
