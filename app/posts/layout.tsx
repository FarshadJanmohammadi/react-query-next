import React from 'react'
import Input from './components/Input'
import Counter from './components/Counter'

const layout = (props: LayoutProps<"/posts">) => {
    return (
        <div>

            {props.children}
        </div>
    )
}

export default layout