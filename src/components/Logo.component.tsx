import Link from 'next/link';

import { Fragment } from 'react';

const Logo = () => {
	return (
		<Link className='font-antonio text-medium text-[28px] text-white uppercase hover:underline md:mb-[32px] lg:mb-0' href='/'>
			<Fragment>The Planets</Fragment>
		</Link>
	);
};

export default Logo;
