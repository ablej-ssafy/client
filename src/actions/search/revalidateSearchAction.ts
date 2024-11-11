'use server';

import {revalidatePath} from 'next/cache';

const revalidateSearchPage = async () => {
  revalidatePath('/search');
};

export default revalidateSearchPage;
