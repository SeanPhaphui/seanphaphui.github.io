import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import NumberFormat, { InputAttributes } from "react-number-format";
import "./Inputs.css";

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const NumberFormatCustom = React.forwardRef<
  NumberFormat<InputAttributes>,
  CustomProps
>(function NumberFormatCustom(props, ref) {
  const { onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix="$"
    />
  );
});

interface InputsProps {
  onTableChange: (table: number[]) => void;
}

const Inputs: React.FC<InputsProps> = (props) => {
  const { onTableChange } = props;
  const [start, setStart] = useState<string>();
  const [percentage, setPercentage] = useState<number>();
  const [trades, setTrades] = useState<number>();
  const [stopLoss, setStopLoss] = useState<number>();
  const [winPercent, setWinPercent] = useState<number>();
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);

  const onChangeAmountHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStart(e.target.value);
  };
  const onChangePercenttHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPercentage(parseInt(e.target.value) / 100 + 1);
  };
  const onChangeTradeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTrades(parseInt(e.target.value));
  };

  const onChangeStopLossHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStopLoss(parseInt(e.target.value) / 100);
  };

  const onChangeWinPercentHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWinPercent(parseInt(e.target.value) / 100);
  };
  const onClickHandler = () => {
    let array: number[] = [];
    var currency = start;
    currency!.replace(/[$,]+/g, "");
    var result = parseInt(currency!);
    var winnableTrades = trades! * winPercent!;
    var losableTrades = trades! - winnableTrades!
    var nth = Math.round(trades! / losableTrades!)

    for (let i = 0; i < trades!; i++) {
      if (i == 0) {
        array[i] = result * percentage!;
      } else if((i + 1) % nth == 0) {
        array[i] = array[i - 1] * stopLoss!;
      } 
      else {
        array[i] = array[i - 1] * percentage!;
      }
    }
    onTableChange(array);
  };

  React.useEffect(() => {
    var baseOptions = start && percentage && trades ? true : false;
    var extraOptions = stopLoss && winPercent ? true : false;
    if (baseOptions && !extraOptions || baseOptions && extraOptions) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [start, percentage, trades, stopLoss, winPercent]);

  return (
    <div className="Inputs">
      <TextField
        className="input"
        id="outlined-basic"
        label="Enter Starting Amount"
        name="numberformat"
        value={start}
        variant="outlined"
        InputProps={{
          inputComponent: NumberFormatCustom as any,
        }}
        inputProps={{ inputMode: "numeric" }}
        onChange={onChangeAmountHandler}
      />
      <TextField
        className="input"
        id="outlined-basic"
        label="Enter Percentage"
        variant="outlined"
        inputProps={{ inputMode: "numeric" }}
        onChange={onChangePercenttHandler}
      />
      <TextField
        className="input-bottom"
        id="outlined-basic"
        label="Enter # of Trades"
        variant="outlined"
        inputProps={{ inputMode: "numeric" }}
        onChange={onChangeTradeHandler}
      />
      <TextField
        className="input"
        id="outlined-basic"
        label="Enter Stop Loss Percentage (Optional)"
        variant="outlined"
        inputProps={{ inputMode: "numeric" }}
        onChange={onChangeStopLossHandler}
      />
      <TextField
        className="input"
        id="outlined-basic"
        label="Enter Win Percentage (Optional)"
        variant="outlined"
        inputProps={{ inputMode: "numeric" }}
        onChange={onChangeWinPercentHandler}
      />
      <Button
        className="input-button"
        variant="outlined"
        onClick={onClickHandler}
        disabled={buttonDisabled}
      >
        Generate Calculations
      </Button>
    </div>
  );
};

export default Inputs;
