import { SVGProps, useState } from "react";
import styled, { css } from "styled-components";

import { PreviewIcon, ConstructorIcon } from './images';

const icons: {
    [key in string]: React.FC<SVGProps<SVGSVGElement>>;
  } = {
    preview: PreviewIcon,
    ctor: ConstructorIcon,
  };

export const SwitchButton: React.FC<{
    items: Array<{
        id: string;
        title: string;
        icon: string;
    }>
}> = ({ items }) => {
    const [currentButton, setCurrentButton] = useState(items.at(0)?.id);

    return (<SwitchButtonStyled>
        {
            items.map(x => {
                const Icon = icons[x.icon];

                return (<SwitchButtonItem
                    onClick={() => setCurrentButton(x.id)}
                    key={x.id}
                    isActive={currentButton === x.id}>
                        <Icon />
                        <SwitchButtonItemText>{x.title}</SwitchButtonItemText>
                </SwitchButtonItem>)
            })
        }
    </SwitchButtonStyled>);
}

const SwitchButtonStyled = styled.div`
    padding: 1px;
    background: #F3F4F6;
    border-radius: 6px;
    width: 243px;
    height: 38px;
    display: flex;
    justify-content: space-between;
`;

const SwitchButtonItem = styled.div<{
    isActive: boolean;
}>`
    display: flex;
    padding: 12px;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    ${(props) => {
        return props.isActive && css`
            background: #FFFFFF;
            border: 1px solid #E2E3E5;
            border-radius: 5px;

            svg path {
                stroke: #5D5FEF;
            }
        `;
    }}
`;

const SwitchButtonItemText = styled.span`
    margin-left: 12px;
    letter-spacing: 1px;
`;