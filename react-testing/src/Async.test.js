import { render, screen } from "@testing-library/react";
import Async from "./components/Async";

describe("Async component", () => {
  it("renders post if request succeeds", async () => {
    window.fetch = jest.fn().mockResolvedValue({
        json: () => Promise.resolve([
          { id: "id1", title: "test title 1" },
          { id: "id2", title: "test title 2" },
          { id: "id3", title: "test title 3" },
        ]),
      });
    render(<Async />);

    const listitems = await screen.findAllByRole("listitem");
    expect(listitems).toHaveLength(3);
  });
});
