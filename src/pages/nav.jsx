import React from 'react';
import '../app/login';
import '../app/page';
import Link from 'next/link';
function nav() {
  return (
    <div>
        <Link href={'/'}>page</Link>
        <Link href={'/login'}>login</Link>
    </div>
  )
}

export default nav