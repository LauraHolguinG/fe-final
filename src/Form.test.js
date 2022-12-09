// import Form from './Components/Form'
// import {render, screen} from '@testing-library/react'
// import {useContextGlobal }from './Components/utils/global.context'

// test('render form',() => {
//     render(<Form/>);
//     require
//     const formInput = screen.getByLabelText('Name');
//     expect(formInput).toBeInTheDocument();
// })
// test('render navbar',() => {
//     render(<Home/>);
//     const linkElements = screen.getByText('Contact');
//     expect(linkElements).toBeInTheDocument();
// })
// test('Render input + event', () => {
//     render(<Form/>)
//     const input = screen.getByTestId('name-input')
//     expect(input).toBeInTheDocument()
//     fireEvent.onChange(input, {target: {value: "Laurasofia"}})
//     expect(input.value).toBe("Laurasofia")
//   })
  
//   test('Render button + event', () => {
//     render(<Form/>)
//     const button = screen.getByRole("button", {name: "Registrarse"});
//     fireEvent.click(button);
//   })