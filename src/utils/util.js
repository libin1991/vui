/**
 * Created by J.2ue on 2017/9/13.
 */

export default {
    /*
    * @function： 获取数据类型
    * @param：para,要判断的数据
    * */
    tryType: para => {
        const type = typeof para;
        if (type === "number" && isNaN(para)) return "NaN";
        if (type !== "object") return type;
        return Object.prototype.toString
            .call(para)
            .replace(/[\[\]]/g, "")
            .split(" ")[1]
            .toLowerCase();
    },
    /*
    * @function: 判断是否为数字
    * @param： num，要判断的数据
    * */
    isNumber: para => {
        if (window.isNumber) return window.isNumber(para);
        if (Number.isNumber) return Number.isNumber(para);
        return typeof para !== "undefined" && !isNaN(para);
    }
};
