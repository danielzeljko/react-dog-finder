
import { MemoryRouter, Routes, Route, Navigate, initialEntries } from "react-router-dom";
import Nav from './Nav';
import DogFilter from "./DogFilter";
import { render, screen, waitFor } from '@testing-library/react';
import DogList from "./DogList";

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ name: "duke"}),
}));


const TEST_DOGS = [
  {
    "name": "Whiskey",
    "age": 5,
    "src": "whiskey",
    "facts": [
      "Whiskey loves eating popcorn.",
      "Whiskey is a terrible guard dog.",
      "Whiskey wants to cuddle with you!"
    ]
  },
  {
    "name": "Duke",
    "age": 3,
    "src": "duke",
    "facts": [
      "Duke believes that ball is life.",
      "Duke likes snow.",
      "Duke enjoys pawing other dogs."
    ]
  },
  {
    "name": "Perry",
    "age": 4,
    "src": "perry",
    "facts": [
      "Perry loves all humans.",
      "Perry demolishes all snacks.",
      "Perry hates the rain."
    ]
  }
]

test('Nav: mounts without crashing', () => {
  const { getByText } = render(
    <MemoryRouter>
      <Nav dogs={TEST_DOGS}/>
    </MemoryRouter>
  )

  const dukeLink = getByText(/duke/i)

  expect(dukeLink).toBeInTheDocument();
});

test('DogFilter', () => {
  const { getByText } = render(
    <MemoryRouter>
      <DogFilter dogs={TEST_DOGS}/>
    </MemoryRouter>
  );

  const dukeFact = getByText("Duke believes that ball is life.");
  expect(dukeFact).toBeInTheDocument();
});

test('Redirects on bad url', () => {
  const { container, getByText } = render(
    <MemoryRouter initialEntries={["/notfound"]}>
      <Routes>
        <Route path="/dogs" element={<DogList dogs={TEST_DOGS} />}/>
        <Route path="/dogs/:name" element={<DogFilter dogs={TEST_DOGS} />}/>
        <Route path="*" element={<Navigate to="/dogs" />}/>
      </Routes>
    </MemoryRouter>
  );

  const lists = container.querySelectorAll("li")
  expect(lists).toHaveLength(0);
  const whiskey = getByText(/whiskey/i);
  expect(whiskey).toBeInTheDocument();
});
