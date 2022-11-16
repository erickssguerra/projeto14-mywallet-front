import styled from "styled-components"

export default function StatementCard({ item }) {

    function deleteTransaction(email) {
        const confirmation = window.confirm("Voce quer mesmo deletar?")
        console.log(email, confirmation)
    }

    const { price, description, type, day, email } = item

    return (
        <StatementCardStyle>
            <ContainerLeft>
                <span className="day">{day}</span>
                <span className="description">{description}</span>
            </ContainerLeft>
            <ContainerRight type={type}>
                <span className="value">{Number(price).toFixed(2)}</span>
                <ion-icon onClick={() => deleteTransaction(email)} name="close-circle-outline"></ion-icon>
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
    display: flex;
    align-items: center;

    ion-icon {
        font-size: 14px;
        margin-left: 4px;
        color: dimgray;
        cursor: pointer;
    }
    .value{
        color: ${({ type }) => (type === "withdraw" ? "#C70000" : "#03AC00")}; // saída #C70000 || entrada #03AC00 
    }   

`