//import { syncTestType } from "./../../mod.ts";
import { syncTestType  } from "https://deno.land/x/test_manager/mod.ts";
const syncTestObjects: syncTestType[] = [];

syncTestObjects.push(
  {
    testName: "test1",
    fn: () => {
      let a = 3;
      a = 4;
      return a == 4;
    },
  },
);
 
syncTestObjects.push(
    {
      testName: "test2",
      fn: () => {
        let a = 3;
        a = 4;
        return a == 4;
      },
    },
  );

  syncTestObjects.push(
    {
      testName: "test2",
      fn: () => {
        let a = 3;
        a = 4;
        return a == 4;
      },
    },
  );

export {syncTestObjects };
