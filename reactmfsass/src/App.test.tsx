import renderer from 'react-test-renderer';
import App from './App';
describe("test app", () => {
it('changes the class when hovered', () => {
  const component = renderer.create(
    <App />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});
it('changes the text ', () => {
    const component = renderer.create(
      <App />,
    );
    console.log(component)
    
  });
})

