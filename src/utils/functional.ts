type ErrHandler = (err: any) => void

const handleErr = (err) => {
    console.log("====================");
    console.log("err occured", err);
    console.log("====================");
};

export function tryInvoke(fn: Function, errHandler: ErrHandler = handleErr) {
    return function (...args: any[]) {
        try {
            return fn.apply(null, args)
        } catch (err) {
            errHandler(err)
        }
    }
}