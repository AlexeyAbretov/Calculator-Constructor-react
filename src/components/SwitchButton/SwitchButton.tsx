import { SVGProps, useState, useEffect, useRef } from "react";
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
    const [activeBoxProps, setActiveBoxProps] = useState({ width: 0, left: 0});
    const buttonRefs = useRef<{
        [key in string]?: HTMLDivElement | null
    }>({});

    // Выставляем пропсы для анимированного блока
    useEffect(() => {
        const width = buttonRefs.current[currentButton || '']?.offsetWidth || 0;
        const left = buttonRefs.current[currentButton || '']?.offsetLeft || 0;
        setActiveBoxProps({ width, left })
    }, [currentButton])

    return (<SwitchButtonStyled>
        <ActiveBox 
            width={activeBoxProps?.width}
            left={activeBoxProps?.left}
        />
        {
            items.map(x => {
                const Icon = icons[x.icon];

                return (<SwitchButtonItem
                    ref={(element) => buttonRefs.current[x.id] = element}
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
    position: relative;
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
    position: relative;
    ${(props) => {
        return props.isActive && css`
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

const ActiveBox = styled.div<{
    width: number;
    left: number;
}>`
    position: absolute;
    transition: left 0.3s ease;
    background: #FFFFFF;
    border: 1px solid #E2E3E5;
    border-radius: 5px;
    width: 0px;
    height: 36px;
    left: ${props => props.left}px;
    width: ${props => props.width}px;
`;