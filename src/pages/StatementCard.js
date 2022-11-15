import styled from "styled-components"

export default function StatementCard() {
    return (
        <StatementCardStyle>
            <ContainerLeft>
                <span className="day">30/11</span>
                <span className="description">Almoço mãe</span>
            </ContainerLeft>
            <ContainerRight>
                <span className="value">39.90</span>
            </ContainerRight>
        </StatementCardStyle>

    )
}

const StatementCardStyle = styled.li`
    display: flex;
    align-items: flex-start;
    justify-content: baseline;
    font-size: 16px;
    margin-bottom: 10px;
`

const ContainerLeft = styled.div`
    width: 100%;

    .day {
        color: #C6C6C6;
        margin-right: 10px;
    }
    .description {
        color: black;
    }
`
const ContainerRight = styled.div`
    .value{
        color: #C70000; // saída #C70000 || entrada #03AC00 
    }   

`