import { TestManager } from "./../../mod.ts";
import { syncTestObjects} from "./sync-test.ts";

const testManager = new TestManager()
syncTestObjects.forEach(
    TO => testManager.runSyncTest(TO)
)
 
testManager.bilan()