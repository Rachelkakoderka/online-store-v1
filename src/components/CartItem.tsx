import React from 'react'

interface Props {
    id: string
}

export default function CartItem(props : Props) {
const {id} = props


  return (
    <div>This is Item nr {id}</div>
  )
}
