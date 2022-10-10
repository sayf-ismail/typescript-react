import React, { useState } from "react";
import "./App.css";

function Button({
  children,
  styles,
  ...rest
}: {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement> & {
    styles: React.CSSProperties;
  }) {
  return <button style={styles}>{children}</button>;
}

interface BoxProps {
  children: React.ReactNode;
}

function Box({ children, ...styles }: BoxProps & React.CSSProperties) {
  return <div style={styles}>{children}</div>;
}

interface AChildComponentProps {
  title: string;
  body: string;
  children: React.ReactNode;
}

function AChildComponent({ title, body, children }: AChildComponentProps) {
  return (
    <>
      <Button
        styles={{
          backgroundColor: "purple",
        }}
      >
        Button!
      </Button>
      <Box backgroundColor="red" display="flex">
        This is the box children
      </Box>
      <h1>{title}</h1>
      <p>{body}</p>
      <div>{children}</div>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <AChildComponent title="This is a title" body="this is a body">
        This is the child element
      </AChildComponent>
    </div>
  );
}

export default App;
