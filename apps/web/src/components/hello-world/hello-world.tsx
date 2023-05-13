import { Button } from 'leafui'
import React from 'react'

const HelloWorld = () => (
  <>
    <h1>Hello There!</h1>
    <label htmlFor="name">
      <input id="name" name="name" type="text" />
    </label>
    <Button>Hello</Button>
  </>
)

export default HelloWorld