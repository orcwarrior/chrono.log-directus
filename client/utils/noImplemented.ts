const noImplemented = new Proxy({}, {
    get(target: {}): any {
        return {}
    }
}) as any;
export {noImplemented}
