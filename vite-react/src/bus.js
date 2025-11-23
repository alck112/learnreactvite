const bus = {
    list: [],
    publish(value) {
        bus.list.forEach(fn => fn && fn(value))

    },
    subscribe(callback) {
        bus.list.push(callback)
    }
}

export default bus;