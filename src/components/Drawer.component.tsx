import { AnimatePresence, motion, Transition, Variants } from 'motion/react';
import { FC, Fragment } from 'react';

const transition: Transition = {
	duration: 0.225,

	ease: 'easeInOut',
};

const backdropVariants: Variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

const drawerVariants: Variants = {
	hidden: { translateX: '-100%' },
	visible: { translateX: 0 },
};

interface IDrawerProps {
	open: boolean;

	onClose: () => void;
}

const Drawer: FC<IDrawerProps> = ({ onClose, open }) => {
	return (
		<AnimatePresence>
			{open && (
				<Fragment>
					<motion.div
						className='fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden'
						animate='visible'
						exit='hidden'
						initial='hidden'
						onClick={onClose}
						transition={transition}
						variants={backdropVariants}
					/>

					<motion.aside
						className='bg-darkblue fixed top-0 bottom-0 left-0 w-[360px] bg-[url(/images/background-stars.svg)] bg-center shadow-md md:hidden'
						animate='visible'
						exit='hidden'
						initial='hidden'
						transition={transition}
						variants={drawerVariants}
					/>
				</Fragment>
			)}
		</AnimatePresence>
	);
};

export default Drawer;
