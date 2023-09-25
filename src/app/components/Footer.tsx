import React from 'react'

const Footer: React.FunctionComponent = () => {
    return (
        <div className='absolute bottom-0 w-full bg-slate-100'>
            <p className='py-3 px-8 text-sm text-slate-600'>India</p>
            <div className='flex py-3 px-8'>
                <ul className='flex [&>*]:mr-6 text-sm text-slate-600'>
                    <li>About</li>
                    <li>Advertising</li>
                    <li>Business</li>
                    <li>How Search Works</li>
                </ul>
                <ul className='flex [&>*]:mr-6 text-sm text-slate-600 ml-auto'>
                    <li>Privacy</li>
                    <li>Terms</li>
                    <li>Settings</li>

                </ul>
            </div>
        </div>
    )
}

export default Footer