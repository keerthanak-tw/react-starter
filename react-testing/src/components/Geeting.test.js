import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import Greeting from "./Greeting";

describe("Greeting", () => {
  test("renders greeting content", () => {
    render(<Greeting />);
    expect(
      screen.queryByRole("heading", { name: "Hello World!" })
    ).toBeInTheDocument();
    expect(screen.queryByText("It's good to see you!")).toBeInTheDocument();
    expect(screen.queryByText("I will be here till you toggle it")).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Toggle Text' })).toBeInTheDocument();
  });
  test('toggle the paragraph text', async () => {
    render(<Greeting />);

    await userEvent.click(screen.getByRole('button'));
    expect(
      screen.queryByRole("heading", { name: "Hello World!" })
    ).toBeInTheDocument();
    expect(screen.queryByText("It's good to see you!")).not.toBeInTheDocument();
    expect(screen.queryByText("I will be here till you toggle it")).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Toggle Text' })).toBeInTheDocument();
  });
});
