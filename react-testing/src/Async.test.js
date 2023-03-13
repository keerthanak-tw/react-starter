import { render, screen } from "@testing-library/react";
import Async from "./components/Async";

describe("Async component", () => {
    it('renders post if request succeeds', async () => {
        render(<Async />);

        const listitems = await screen.findAllByRole('listitem');
        expect(listitems).not.toHaveLength(0);
    });
});
