import {useState, useEffect} from 'react'

const PREFIX = 'go_foot_'

const useLocalStorage = (key, initialValue = null) => {
    const prefixedKey = PREFIX + key

    const [value, setValue] = useState(() => {
        let jsonValue
        if (typeof window !== 'undefined') {
            jsonValue = localStorage.getItem(prefixedKey)
            if (jsonValue && typeof jsonValue === 'string') return JSON.parse(jsonValue)
            if (typeof initialValue === 'function') return initialValue()
            else return initialValue
        }
    })

    const clearValue = () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem(prefixedKey)
            console.log('inside clear function')
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem(prefixedKey, JSON.stringify(value))
        }
    }, [prefixedKey, value])

    return [value, setValue, clearValue]
}

export default useLocalStorage