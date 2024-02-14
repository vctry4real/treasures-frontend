import TreasureLogo from '../assets/Treasure.svg';
import { motion, AnimatePresence } from 'framer-motion';
import RegistrationSlide from '../components/registration/RegistrationSlide';
import RegisterProvider from '../providers/RegisterProvider';
import { useAlertContext } from '../providers/AlertProvider';
import Alert from '../components/Alert';

const RegisterUser = () => {
  const { alert } = useAlertContext();
  return (
    <section className="flex bg-primary min-h-screen md:grid md:grid-cols-2 gap-4">
      <div className="hidden md:flex items-center justify-center ">
        <img
          src={TreasureLogo}
          alt="Logo"
          className="w-[350px] h-[350px] md:w-full md:h-full object-contain"
        />
      </div>
      <motion.div
        layout
        className="w-full bg-zinc-200 flex flex-col  p-4  items-center justify-center "
      >
        <RegisterProvider>
          <RegistrationSlide />
        </RegisterProvider>
      </motion.div>
      {alert.show && <Alert {...alert} />}
    </section>
  );
};

export default RegisterUser;
