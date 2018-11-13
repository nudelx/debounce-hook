<p align="center"><img width="200px" height="200px" style="max-width: 100%; margin-right: auto;  margin-left: auto; " src="https://raw.githubusercontent.com/nudelx/debounce-hook/master/img/logo.png" >
<img width="200px" height="200px" style="max-width: 100%; margin-right: auto;  margin-left: auto; " src="https://raw.githubusercontent.com/nudelx/debounce-hook/master/img/img.png" ></p>

# React Hooks Composer

React hook with debounced onChange and after effect call back ( React > 16.7.0 )

`default debounce value = 400ms`

You can provide an aftereffect callback which will be triggered after debounce onInputChange

## Usage

```js
import useDebounceHook from 'debounce-hook'

const Input = ({
  id,
  defaultValue = '',
  debounce = 400,
  className,
  placeholder,
  name
}) => {
  const { value, onInputChange } = useDebounceHook(defaultValue, debounce, () =>
    console.log('UPDATE')
  )
  return (
    <div className={className}>
      <label htmlFor={id}>{name}</label>
      <input
        placeholder={placeholder}
        name={name}
        value={value}
        id={id}
        onChange={e => onInputChange(e.target.value)}
      />
    </div>
  )
}
```

## Installation

```
 npm i debounce-hook
```

or

```
 yarn add debounce-hook
```

---

Made with ♥ by nudelx
