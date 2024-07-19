import hsk1 from "public/list/hsk1.json";
// import hsk2 from "public/list/hsk2.json";
// import hsk3 from "public/list/hsk3.json";
import hsk4 from "public/list/hsk4.json";
import hsk5 from "public/list/hsk5.json";
import hsk6 from "public/list/hsk6.json";
import hsk7 from "public/list/hsk7-9.json";
// import allchar from "public/list/allchar.json";
import chengyu from "public/list/chengyu.json";

// export default {
//   allword: [...hsk1, ...hsk2, ...hsk3, ...hsk4, ...hsk5, ...hsk6, ...hsk7],
//   fileList: [hsk1, hsk2, hsk3, hsk4, hsk5, hsk6, hsk7],
// };
export const allword = [...hsk1.data,  ...hsk4.data, ...hsk5.data, ...hsk6.data, ...hsk7.data,  ...chengyu.data]
console.log('allword.length', allword.length)
// export const fileList = [hsk1, hsk2, hsk3, hsk4, hsk5, hsk6, hsk7]
