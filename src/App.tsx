import React from 'react';

// const Title:React.FС<{title: string}> = ({title, children}) => <h2>{title}{children}</h2>

type TitleProps = {
  title: string,
  test?: string,
}

const Title = ({title, test = 'test'}: TitleProps) => <h2>{title}{test}</h2>

const App = () => <Title title="test"/>

export default App;
