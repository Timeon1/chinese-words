import hsk1 from "src/content/list/hsk1.json";
import hsk2 from "src/content/list/hsk2.json";
import hsk3 from "src/content/list/hsk3.json";
import hsk4 from "src/content/list/hsk4.json";
import hsk5 from "src/content/list/hsk5.json";
import hsk6 from "src/content/list/hsk6.json";
import hsk7 from "src/content/list/hsk7-9.json";
import allchar from "src/content/list/allchar.json";
import chengyu from "src/content/list/chengyu.json";

// export default {
//   allword: [...hsk1, ...hsk2, ...hsk3, ...hsk4, ...hsk5, ...hsk6, ...hsk7],
//   fileList: [hsk1, hsk2, hsk3, hsk4, hsk5, hsk6, hsk7],
// };
export const allword = [...hsk1.data, ...hsk2.data, ...hsk3.data, ...hsk4.data, ...hsk5.data, ...hsk6.data, ...hsk7.data, ...allchar.data, ...chengyu.data]
// export const fileList = [hsk1, hsk2, hsk3, hsk4, hsk5, hsk6, hsk7]
