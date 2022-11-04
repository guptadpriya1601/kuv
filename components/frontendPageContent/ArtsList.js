import { Text } from '@chakra-ui/react'
import React from 'react'

export default function ArtsList() {
   const om=["St. Xavier's College","KJSAC Mumbai" ]
  return (
    <>
    <Text fontSize="20px " mt="20px">Colleges List bhaiya</Text>
    <ol>
      
    {om.map(data=>  <li>{data}</li>)}
    </ol>
    </>
  )
}
