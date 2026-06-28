import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Olá mundo
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem veniam enim
        a quos sed harum ipsum alias deleniti hic, minus quia eveniet delectus
        saepe placeat modi neque quis? Ipsa, distinctio.
      </p>
    </>
  );
}
