import React, { useState } from 'react'


const StatusMessage: React.FC = () => {
    const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
    return (
        <div>
            <h1>Status Message Example</h1>
            {
                status === 'loading' ?
                    'Loading ...'
                    : status === 'success' ?
                        'Data loaded successfully....'
                        : 'An error occured plesae try again'
            }
            <button onClick={() => setStatus('loading')}>Set to Loading</button>
            <button onClick={() => setStatus('success')}>Set to Success</button>
            <button onClick={() => setStatus('error')}>Set to Error</button>


        </div>
    )
}

export default StatusMessage