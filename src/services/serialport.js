import { SerialPort } from "serialport";

export const execute = async () => {
  const ports = await SerialPort.list();
  console.log(ports);
};
