import { motion } from 'framer-motion';
import TimePicker from './TimePicker';
import { TimerModalProps } from '@/types/types';

const TimerModal: React.FC<TimerModalProps> = ({ setTime }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="z-50 w-9/12 h-40 bg-slate-400 absolute rounded-lg shadow-xl"
        >
            <TimePicker setTime={setTime} />
        </motion.div>
    );
};

export default TimerModal;
