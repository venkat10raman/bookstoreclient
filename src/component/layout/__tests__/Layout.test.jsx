import React from "react";
import LayoutBase from "../LayoutBase";
import { getByText } from "@testing-library/react";

describe('LayoutBase' , () => {
    it('should render layout-base component' , () => {
        <LayoutBase>
            <div>test component</div>
        </LayoutBase>
    });

    expect(getByText('test component')).toBeInTheDocument()
})