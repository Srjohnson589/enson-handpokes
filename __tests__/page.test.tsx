import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from "@/app/page";
import {describe, it} from "@jest/globals";
import {jestExpect} from "@jest/expect";



//getting jest started; checking for a baseline test
describe('Home', () => {
    it('renders main div', () => {
        render(<Home />)

        const main = screen.getByRole('main')

        jestExpect(main).toBeDefined()
    })
})
