const env = import.meta.env.VITE_FRAME
const script = document.createElement('script')

if(env === 'VUE') {
    script.src = '/src/entry_vue.ts'
    script.type = 'module'
}
else if(env === 'REACT') {
    script.src = '/src/entry_react.tsx'
    script.type = 'module'
}
else {
    script.innerHTML = `alert('环境错误');`
}

document.body.appendChild(script)

export {}