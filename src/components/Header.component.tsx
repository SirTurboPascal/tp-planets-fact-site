import Logo from '@/components/Logo.component';
import NavigationBar from '@/components/NavigationBar.component';

const Header = () => {
	return (
		<header className='flex h-[68px] items-center justify-between border-b-[1px] border-white/20 px-[32px] md:h-auto md:flex-col md:pt-[16px] lg:flex-row lg:pt-0'>
			<Logo />

			<NavigationBar />
		</header>
	);
};

export default Header;
