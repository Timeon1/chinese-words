import hsk1 from "./list/hsk1.json";
import hsk2 from "./list/hsk2.json";
import hsk3 from "./list/hsk3.json";
import hsk4 from "./list/hsk4.json";
import hsk5 from "./list/hsk5.json";
import hsk6 from "./list/hsk6.json";
import hsk7 from "./list/hsk7-9.json";
import allchar from "./list/allchar.json";
import chengyu from "./list/chengyu.json";

// export default {
//   allword: [...hsk1, ...hsk2, ...hsk3, ...hsk4, ...hsk5, ...hsk6, ...hsk7],
//   fileList: [hsk1, hsk2, hsk3, hsk4, hsk5, hsk6, hsk7],
// };
export const allword = [...hsk1.data, ...hsk2.data, ...hsk3.data, ...hsk4.data, ...hsk5.data, ...hsk6.data, ...hsk7.data, ...allchar.data, ...chengyu.data]
// export const fileList = [hsk1, hsk2, hsk3, hsk4, hsk5, hsk6, hsk7]
