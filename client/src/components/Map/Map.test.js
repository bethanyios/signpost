import React from 'react'
import ReactDOM from 'react-dom'
import Map from './Map'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

const fakeFunction = () => {
  console.log('i am pretending to do something')
}

const fakeServiceData = [
  {
    id: 'rec0qS38lvSrhj4Dz',
    fields: {
      WednesdayClosing: '14:00',
      ThursdayOpening: 'closed',
      MondayOpening: '11:00',
      TuesdayOpening: 'closed',
      SaturdayClosing: 'closed',
      SundayClosing: 'closed',
      Name: 'The Margins Project',
      Approved: true,
      Lat: '51.544880',
      'Days open': 'Monday and Wednesday',
      MondayClosing: '14:00',
      FridayOpening: 'closed',
      SaturdayOpening: 'closed',
      WednesdayOpening: '11:00',
      Address: '19b Compton Terrace',
      ShortDescription: 'Various services',
      Closing: 14,
      ThursdayClosing: 'closed',
      Lng: '-0.102830',
      FridayClosing: 'closed',
      Website: 'http://www.unionchapel.org.uk',
      SundayOpening: 'closed',
      Phone: '020 7704 9050',
      Type: ['Food', 'Shower', 'Shelter', 'Advice', 'Wellbeing'],
      Opening: 11,
      Description:
        'Drop-in: \nMonday + Wednesday 11am-2pm\nFood/Refreshments\nShower facility\nTraining programme\nHousing & Benefits advice',
      TuesdayClosing: 'closed',
      Email: 'margins@unionchapel.org.uk',
    },
    createdTime: '2020-01-21T16:05:00.000Z',
  },
]

it('renders without crashing', () => {
  const history = createMemoryHistory()
  const div = document.createElement('div')
  ReactDOM.render(
    <Router history={history}>
      <Map
        selectedService={'Wellbeing'}
        selectedServiceData={fakeServiceData}
        selectedMarker={null}
        setSelectedMarker={fakeFunction}
        selectedMarkerData={null}
        setSelectedMarkerData={fakeFunction}
      />
    </Router>,
    div
  )
})

jest.useFakeTimers()

it('map renders after settimeout finishes', () => {
  const history = createMemoryHistory()
  const { getByPlaceholderText } = render(
    <Router history={history}>
      <Map
        selectedService={'Wellbeing'}
        selectedServiceData={fakeServiceData}
        selectedMarker={null}
        setSelectedMarker={fakeFunction}
        selectedMarkerData={null}
        setSelectedMarkerData={fakeFunction}
      />
    </Router>
  )
  jest.advanceTimersByTime(2100)
  const input = getByPlaceholderText(/Jump to a location/i)
  expect(input).toBeInTheDocument()
})

test('enter location and search', () => {
  const history = createMemoryHistory()
  const { getByPlaceholderText, getByTestId } = render(
    <Router history={history}>
      <Map
        selectedService={'Wellbeing'}
        selectedServiceData={fakeServiceData}
        selectedMarker={null}
        setSelectedMarker={fakeFunction}
        selectedMarkerData={null}
        setSelectedMarkerData={fakeFunction}
      />
    </Router>
  )
  jest.advanceTimersByTime(2100)
  const input = getByPlaceholderText(/Jump to a location/i)
  fireEvent.change(input, { target: { value: 'Finsbury Park' } })
  const submitButton = getByTestId(/submit-geocode/)
  fireEvent.click(submitButton)
})

afterEach(cleanup)
