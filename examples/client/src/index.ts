import { TestManager } from "./mod.ts";
import { testObjects } from "./test.ts";
const testManager = new TestManager();
testObjects.forEach(
  async (item) => {
    await testManager.runAsyyncTest(item)
  },
);
 
