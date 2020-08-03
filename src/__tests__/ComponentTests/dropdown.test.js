/**
 * @author Iniya Rajamani
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {fireEvent, render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DropdownTrigger from "../../components/Dropdown";

import { render, fireEvent } from '@testing-library/react'

test('loads items eventually', async () => {
  const { getByText, findByText } = render(<Dropdown />)
  fireEvent.click(getByText('Dropdown'))
})