
export function formatDate(date) {
    return new Intl.DateTimeFormat(
      'en-US', {weekday: 'long'}
    ).format(date)
}


export function Calc(props) {
    const sum = props.a + props.b;
  
    const today = new Date()
  
    return (
      <>
      <h2>It's today: {formatDate(today)}</h2>
        <p>Hi, I am {props.name}!</p>
        <p>The sum of the numerics props I received is {sum}</p>
      </>
    )
}

export default function Hello(props) {
    const today = new Date()

    return (
        <>
        <h3>Hello, I'm {props.name} </h3>
        <h4>It's today: {formatDate(today)}</h4>
        </>
    )
}