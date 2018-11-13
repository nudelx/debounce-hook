import React from 'react'

export default function(defaultValue, debounce) {
  const [value, onInputChange] = React.useState(defaultValue)

  React.useEffect(
    () => {
      const timer = setTimeout(() => onInputChange(value), debounce || 400)
      return () => clearTimeout(timer)
    },
    [value]
  )

  return {
    value,
    onInputChange
  }
}
