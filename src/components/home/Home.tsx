import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import InputDialog from './InputDialog';
const Home = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [outcome, setOutcome] = useState<number>(0)
  const init = () => {
    setOpen(true)
  }
  useEffect(()=> {
    init()
  }, [])
  
  return (
    <Container maxWidth="sm">
      {
        open
          ? (<div />)
          : (
            <section>
              { outcome }
            </section>
          )
      }
      <InputDialog setOutcome={setOutcome} open={open} setOpen={setOpen} />
    </Container>
  );
};

export default Home
