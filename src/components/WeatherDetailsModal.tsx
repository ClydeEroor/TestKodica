import Modal from 'react-modal';
import { useEffect, useState } from 'react';
import axios from 'axios';

Modal.setAppElement('#root');

export interface ModalProps {
  cityId: number;
  isOpen: boolean;
  onClose: () => void;
}

export interface Data {
  list: Array<{
    main: Record<string, number>;
    dt: number;
    dt_txt: string;
  }>;
}

function WeatherDetailsModal({ cityId, isOpen, onClose }: ModalProps) {
  const [data, setData] = useState<Data | null>(null);

  const getMarginString = (temp: number) => {
    if (temp > 0) {
      return -temp * 22;
    } else {
      return Math.abs(temp) * 22;
    }
  };

  useEffect(() => {
    const exec = async () => {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?cnt=8&units=metric&id=${cityId}&appid=f473cb3c4a2865e315ac74ebbd07ab80`
      );
      setData(res.data);
    };
    exec();
  }, [cityId]);

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <div className="flex flex-wrap relative justify-center h-full items-center">
        {data?.list?.map((elem) => {
          return (
            <div
              key={elem.dt}
              className={`flex flex-wrap justify-center mx-2 ${getMarginString(
                Number(elem.main.temp.toFixed())
              )}  px-6 py-2 bg-cyan-400 `}
              style={{
                marginTop: getMarginString(Number(elem.main.temp.toFixed()))
              }}>
              <div className="mr-4">{new Date(elem.dt_txt).toTimeString().slice(0, 5)}</div>
              <div>{elem.main.temp.toFixed()}℃</div>
            </div>
          );
        })}
      </div>
    </Modal>
  );
}

export default WeatherDetailsModal;
