import React from 'react';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer>
		   <div>
		     <p>&copy;{year}</p>
		   </div>
		</footer>
    );
}