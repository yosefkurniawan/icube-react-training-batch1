import React from "react";
import { render, fireEvent } from '@testing-library/react';
import Button from './button';

let count;

function incrementCount(num) {
    count += num;
}

test('+1 Button works', () => {
    count = 0;

    const { container } = render(
        <Button increment={1} handleIncrement={incrementCount} />
    )

    const button = container.firstChild;
    expect(button.textContent).toBe('+ 1');
    expect(count).toBe(0);
    fireEvent.click(button);
    expect(count).toBe(1);
    fireEvent.click(button);
    fireEvent.click(button);
    expect(count).toBe(3);
});

test("+100 Button works", () => {
    count = 0;

    const { container } = render(
        <Button increment={100} handleIncrement={incrementCount} />
    );

    const button = container.firstChild;
    expect(button.textContent).toBe("+ 100");
    expect(count).toBe(0);
    fireEvent.click(button);
    expect(count).toBe(100);
    fireEvent.click(button);
    fireEvent.click(button);
    expect(count).toBe(300);
});