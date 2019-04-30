import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Dashboard from './components/dashboard'
import Display from './components/display'
import { render, fireEvent, cleanup, findAllByText } from 'react-testing-library'
import 'jest-dom/extend-expect';
import { exportAllDeclaration } from '@babel/types';

afterEach(cleanup)

describe("Dashboard Buttons",()=>{
  it('adds a strike button', () => {
    const { getByText } = render(<Dashboard/>)
    const button = getByText(/Add-Strike/i)
    fireEvent.click(button);
    getByText(/1/i)
  })

  it('adds a Ball button', () => {
    const { getByText } = render(<Dashboard/>)
    const button = getByText(/Add-Ball/i)
    fireEvent.click(button);
    getByText(/1/i)
    })

  it('adds a Foul button', () => {
    const { getByText } = render(<Dashboard/>)
    const button = getByText(/Add-Foul/i)
    fireEvent.click(button);
    findAllByText(/1/i)
      })
  it('resets all values to zero hit/reset button',() =>{
    const {getByText} = render(<Dashboard/>)
    const button = getByText(/Hit-Reset/i)
    findAllByText(/0/i)
  })
  })

  describe("Display rendering",()=>{
    it('it renders out on strike 3',()=>{
      const { getByText } = render(<Dashboard/>)
      const button = getByText(/Add-Strike/i)
      fireEvent.click(button);
      fireEvent.click(button);
      fireEvent.click(button);
      getByText(/OUT!!/i)
    })
    it('it renders walk on ball 4',()=>{
      const { getByText } = render(<Dashboard/>)
      const button = getByText(/Add-Ball/i)
      fireEvent.click(button);
      fireEvent.click(button);
      fireEvent.click(button);
      fireEvent.click(button);
      getByText(/Walk!!/i)
    })
    it('it renders two strikes max with fouls no matter the amount of fouls',()=>{
      const { getByText } = render(<Dashboard/>)
      const button = getByText(/Add-Foul/i)
      fireEvent.click(button);
      fireEvent.click(button);
      fireEvent.click(button);
      fireEvent.click(button);
      getByText(/2/i)
    })
  })