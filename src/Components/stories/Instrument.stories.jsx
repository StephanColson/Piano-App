import { Instrument } from '../Instrument.jsx';

const meta = {
  component: Instrument,
};

export default meta;

export const Default = {
  args: {
    data: [
      { id: 1, name: 'Guitar' },
      { id: 2, name: 'Piano' },
      { id: 3, name: 'Drums' },
    ],
  }
};