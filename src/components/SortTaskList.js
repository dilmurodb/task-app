import React from 'react'

const SortTaskList = ({options, defaultValue, value, onChange}) => {
  return (
    <select 
      value={value}
      onChange={e => onChange(e.target.value)}
    >
      <option value=''>{defaultValue}</option>
      {options.map(option => <option key={option.value} value={option.value}>{option.name}</option>)}
    </select>
  )
}

export default SortTaskList