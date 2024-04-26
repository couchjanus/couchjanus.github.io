import styled from 'styled-components';

const Paragraph = styled.button`
font-size: 1.3rem;
padding: 1rem 1.5rem;
margin: 1rem auto;
&:first-line {
    color:red;
    text-transform:uppercase;
}
`;
const ErrorBlock = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:100%;

`;


export default function ErrorPage() {
    // const error = ''

    return (
        <ErrorBlock>
            <h1>Oops!</h1>
            <Paragraph>
                Sorry, an unexpected error has occurred.
                <h3>500</h3>
            </Paragraph>
        </ErrorBlock>
    )
}