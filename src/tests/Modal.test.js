import { render, screen } from "@testing-library/react";
import Modal from "../components/Modal";
import userEvent from "@testing-library/user-event";

const activeModalMock = {
  sprites: {
    front_defautl: "img",
  },
  id: 1,
  name: "Bumbasaur",
  types: [
    {
      type: {
        name: "grama",
      },
      type: {
        name: "veneno",
      },
    },
  ],
  weight: 10,
  height: 10,
};

const closeModalMock = jest.fn()

describe("Modal test", () => {
  test("Deve retornar o componente Modal", () => {
    render(<Modal activeModal={activeModalMock} />);
  });

  // Finalize criando o teste de interação com user: ao
  // clicar no botão de fechar, é disparada a função que fecha o modal.

  test("Click do botão de fechar o modal", async () => {
    render(<Modal activeModal={activeModalMock} closeModal={closeModalMock}/>);

    const user = userEvent.setup();

    const button = screen.getByRole("button", {
      name: /❌/i,
    });

    await user.click(button);

    expect(closeModalMock).toBeCalled()
  });
});
