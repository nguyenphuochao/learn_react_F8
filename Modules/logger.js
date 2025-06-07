import { TYPE_LOG } from "./constants.js";

function logger(log, type = TYPE_LOG) {
    console[type](log);
}

export default logger; // 1 function chỉ 1 export default