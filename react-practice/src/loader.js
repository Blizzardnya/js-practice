import React from 'react'

const styles = {
    div: {
        display: 'flex', 
        justifyContent: 'center', 
        margin: '.5rem'
    }
}

export default () => (
    <div style={styles.div}>
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
)