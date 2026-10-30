import React from 'react'
import Input from './components/Input'
import Counter from './components/Counter'

const template = (props: LayoutProps<"/posts">) => {
    return (
        <div>
            <Counter />

            {props.children}
        </div>
    )
}

export default template