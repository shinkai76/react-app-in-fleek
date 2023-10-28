import React, { useState } from 'react';
import CoffeeIcon from '@mui/icons-material/Coffee';
import InputAdornment from '@mui/material/InputAdornment';
import CurrencyYenIcon from '@mui/icons-material/CurrencyYen';
import { TextField, Dialog, DialogActions, DialogContent, DialogTitle, Fab } from '@mui/material';


interface IData {
  days: number | "",
  hours: number | "",
  kane: number | 0 | ""
}

const InputDialog = ({setOpen, open, setOutcome}:any) => {
  const [data, setData] = useState<IData>({
    days: "",
    hours: "",
    kane: ""
  })
  const start = () => {
    setOpen(false)
    const { kane, days, hours } = data
    let perSecKane: number = Number(kane) / (Number(days) * Number(hours) * 3600)
    setInterval(() => {
      setOutcome((prev:number) => prev + perSecKane)
    }, 1000 * 1)
  }
  
  const handleChange = (e:any, name: keyof typeof data) => {
    setData({...data,...{[name]:e.target.value}})
  }
  const handleClose = () => {
    console.log('close')
  }
  return (
    <Dialog onClose={ handleClose } open={ open }>
      <DialogTitle>这个月</DialogTitle>
      <DialogContent>
        <TextField
          label="预计奉献"
          sx={ {m: 1, width: '25ch'} }
          InputProps={ {
            endAdornment: <InputAdornment position="end">天</InputAdornment>,
          } }
          variant="standard"
          value={ data.days }
          type="number"
          onChange={ (e)=> handleChange(e, 'days') }
        />
        <br />
        <TextField
          label={ <div>一天<del>卖</del>出勤</div> }
          sx={ {m: 1, width: '25ch'} }
          InputProps={ {
            endAdornment: <InputAdornment position="end">小时</InputAdornment>,
          } }
          variant="standard"
          value={ data.hours }
          type="number"
          onChange={ (e)=> handleChange(e, 'hours') }
        />
        
        <TextField
          label="您丰厚的月薪想必有"
          sx={ {m: 1, width: '25ch'} }
          InputProps={ {
            startAdornment: (
              <InputAdornment position="start">
                <CurrencyYenIcon />
              </InputAdornment>
            ),
            endAdornment: <InputAdornment position="end">元</InputAdornment>,
          } }
          variant="standard"
          value={ data.kane }
          type="number"
          onChange={ (e)=> handleChange(e, 'kane') }
        />
        <DialogActions>
          <Fab color="primary" onClick={ () => start() }>
            <CoffeeIcon />
          </Fab>
        </DialogActions>
      </DialogContent>
    </Dialog>
  )
}

export default InputDialog;
