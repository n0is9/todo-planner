import React from "react";

const Layout = (props) => {
    return (
        <div className='bg-gray-900 min-h-screen py-10'>
            {props.children}
        </div>
    )
}
export default Layout