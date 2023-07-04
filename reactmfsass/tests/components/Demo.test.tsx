import renderer from 'react-test-renderer';

import Demo from '../../src/components/Demo';
import React from 'react';
import { render, screen } from "@testing-library/react";

describe("test app", () => {
it("should render the App component", () => {
    const component = renderer.create(
        <Demo />,
      );
      let tree = component.toJSON();
    expect(tree).toMatchSnapshot();


    
});
it('changes the text ', () => {
  
    render(<Demo />);

    const nameElement = screen.getByText("Name: demoreactsass");
    const frameworkElement = screen.getByText("Framework: react");
    const languageElement = screen.getByText("Language: TypeScript");
    const cssElement = screen.getByText("CSS: Empty CSS");

    expect(nameElement).toBeInTheDocument();
    expect(frameworkElement).toBeInTheDocument();
    expect(languageElement).toBeInTheDocument();
    expect(cssElement).toBeInTheDocument();

})
})

